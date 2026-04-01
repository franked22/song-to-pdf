"""Application configuration from environment variables."""

import os
from pathlib import Path

# ── Paths ────────────────────────────────────────────────────
UPLOAD_DIR = Path(os.getenv("UPLOAD_DIR", "/tmp/song-to-pdf/uploads"))
OUTPUT_DIR = Path(os.getenv("OUTPUT_DIR", "/tmp/song-to-pdf/outputs"))
MODEL_CACHE = Path(os.getenv("MODEL_CACHE", "/tmp/song-to-pdf/models"))

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
MODEL_CACHE.mkdir(parents=True, exist_ok=True)

# ── Server ───────────────────────────────────────────────────
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "http://localhost:3000,https://song-to-pdf.vercel.app").split(",")
MAX_UPLOAD_SIZE_MB = int(os.getenv("MAX_UPLOAD_SIZE_MB", "500"))
PORT = int(os.getenv("PORT", "8000"))

# ── ML Model Settings ───────────────────────────────────────
WHISPER_MODEL = os.getenv("WHISPER_MODEL", "base")  # tiny, base, small, medium, large
DEMUCS_MODEL = os.getenv("DEMUCS_MODEL", "htdemucs")  # htdemucs, htdemucs_ft, mdx_extra
BASIC_PITCH_ONSET_THRESHOLD = float(os.getenv("BASIC_PITCH_ONSET_THRESHOLD", "0.5"))
BASIC_PITCH_FRAME_THRESHOLD = float(os.getenv("BASIC_PITCH_FRAME_THRESHOLD", "0.3"))

# ── Redis (optional, for job queue) ─────────────────────────
REDIS_URL = os.getenv("REDIS_URL", "")

# ── S3 / DigitalOcean Spaces (optional, for file storage) ──
S3_ENDPOINT = os.getenv("S3_ENDPOINT", "")
S3_BUCKET = os.getenv("S3_BUCKET", "")
S3_ACCESS_KEY = os.getenv("S3_ACCESS_KEY", "")
S3_SECRET_KEY = os.getenv("S3_SECRET_KEY", "")
