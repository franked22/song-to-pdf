"""API key authentication for protected transcription endpoints."""

from __future__ import annotations

import hmac
import os
from typing import Optional

from fastapi import Header, HTTPException


def _is_production() -> bool:
    return os.getenv("ENV", "").strip().lower() in {"production", "prod"}


def _allow_insecure_dev() -> bool:
    """Insecure mode is explicit and never honored in production."""
    return os.getenv("ALLOW_INSECURE_DEV", "").strip() == "1" and not _is_production()


def _secure_equals(provided: str, expected: str) -> bool:
    provided_b = provided.encode("utf-8")
    expected_b = expected.encode("utf-8")
    if len(provided_b) != len(expected_b):
        hmac.compare_digest(expected_b, expected_b)
        return False
    return hmac.compare_digest(provided_b, expected_b)


async def require_api_key(
    authorization: Optional[str] = Header(default=None),
    x_api_key: Optional[str] = Header(default=None, alias="X-API-Key"),
) -> None:
    """Require Authorization Bearer or X-API-Key matching SONIC_API_KEY.

    Fail-closed when SONIC_API_KEY is unset, unless ALLOW_INSECURE_DEV=1
    and ENV is not production.
    """
    expected = os.getenv("SONIC_API_KEY", "").strip()
    if not expected:
        if _allow_insecure_dev():
            return
        raise HTTPException(
            status_code=503,
            detail="SONIC_API_KEY is not configured",
        )

    provided = (x_api_key or "").strip()
    if not provided and authorization:
        scheme, _, token = authorization.partition(" ")
        if scheme.lower() == "bearer":
            provided = token.strip()

    if not provided or not _secure_equals(provided, expected):
        raise HTTPException(status_code=401, detail="Invalid or missing API key")
