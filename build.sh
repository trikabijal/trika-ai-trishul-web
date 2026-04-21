#!/usr/bin/env bash
set -euo pipefail

ENV="${1:-local}"

echo "==> Installing dependencies..."
npm install

case "$ENV" in
  dev)
    echo "==> Starting dev server..."
    npm run dev
    ;;
  prod)
    echo "==> Building for production..."
    npm run build
    ;;
  *)
    echo "==> Building for local..."
    npm run build
    ;;
esac

echo "==> Done."
