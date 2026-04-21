#!/usr/bin/env bash
set -euo pipefail

echo "==> Starting production server on port ${PORT:-3000}..."
npm run start
