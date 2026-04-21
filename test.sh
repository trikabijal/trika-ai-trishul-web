#!/usr/bin/env bash
set -euo pipefail

echo "==> Running lint..."
npm run lint

echo "==> Running build check..."
npm run build

echo "==> All checks passed."
