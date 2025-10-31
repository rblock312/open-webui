#!/bin/bash

# Automated Savings AI Startup Script
# This ensures our customizations persist through updates

echo "🚀 Starting Automated Savings AI (Custom Open WebUI)"

# Override any upstream title changes
export WEBUI_NAME="Automated Savings"

# Ensure custom CSS is available
if [ -f "/app/static/custom.css" ]; then
    echo "✅ Custom CSS found"
else
    echo "⚠️  Custom CSS not found, creating fallback"
    cat > /app/static/custom.css << 'EOF'
/* Automated Savings.ai Fallback Branding */
:root {
  --primary-brand: #66B3FF;
}
EOF
fi

# Start the original application
exec bash backend/start.sh