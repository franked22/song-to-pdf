FROM python:3.11-slim

# System deps for audio processing
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    libsndfile1 \
    libffi-dev \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir torch torchaudio --index-url https://download.pytorch.org/whl/cpu && \
    pip install --no-cache-dir -r requirements.txt

# Pre-download Whisper model (base) during build for faster cold starts
RUN python -c "import whisper; whisper.load_model('base', download_root='/tmp/song-to-pdf/models')"

# Copy application code
COPY . .

# Create directories
RUN mkdir -p /tmp/song-to-pdf/uploads /tmp/song-to-pdf/outputs /tmp/song-to-pdf/models

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
