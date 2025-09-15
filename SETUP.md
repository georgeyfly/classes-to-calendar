# UMN Classes to Calendar - Setup Guide

## Issues Fixed

1. **Updated Default Dates**: Changed from Fall 2021 to Fall 2025 (September 3 - December 18, 2025)
2. **Environment Configuration**: Created setup instructions for Google Calendar API

## Required Setup Steps

### 1. Google Calendar API Setup

You need to set up Google Calendar API credentials:

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create or select a project**
3. **Enable Google Calendar API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"
4. **Create OAuth 2.0 Credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized origins: `http://localhost:3000`, `http://localhost:8000`
   - Add authorized redirect URIs: `http://localhost:3000`, `http://localhost:8000`
5. **Create API Key**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Restrict the key to Google Calendar API

### 2. Environment Variables

Create a `.env` file in the project root with:

```bash
# Project Configuration
PROJECT_NAME=Classes to Calendar
VERSION=0.0.1

# Domain Configuration
DOMAIN=localhost

# Google Calendar API Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CALENDAR_API_KEY=your_google_api_key_here

# Docker Configuration
DOCKER_IMAGE_BACKEND=classes-to-calendar-backend
DOCKER_IMAGE_FRONTEND=classes-to-calendar-frontend
TAG=latest
FRONTEND_ENV=development
INSTALL_DEV=true
```

Create a `frontend/.env` file with:

```bash
# Frontend Environment Configuration
REACT_APP_ENV=development
REACT_APP_DOMAIN_DEV=http://localhost:8000
REACT_APP_DOMAIN_STAG=https://staging.umnclassestocalendar.com
REACT_APP_DOMAIN_PROD=https://umnclassestocalendar.com
REACT_APP_NAME=Classes to Calendar
```

### 3. Running the Application

#### Option 1: Using Docker (Recommended)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or run development versions
./scripts/build-backend-dev.sh
./scripts/build-frontend-dev.sh
./scripts/run-backend-dev.sh
./scripts/run-frontend-dev.sh
```

#### Option 2: Local Development

**Backend:**
```bash
cd backend/app
poetry install
poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

### 4. Testing the Integration

1. **Start the application** (backend on port 8000, frontend on port 3000)
2. **Upload a UMN class schedule HTML file** or use the browser extension
3. **Sign in with Google** when prompted
4. **Select or create a calendar**
5. **Add classes to your Google Calendar**

## Common Issues and Solutions

### Issue: "Sign-in with Google failed"
- **Solution**: Check that `GOOGLE_CLIENT_ID` is correctly set in `.env`
- **Solution**: Ensure OAuth credentials are configured with correct origins

### Issue: "Could not authorize Google API"
- **Solution**: Check that `GOOGLE_CALENDAR_API_KEY` is correctly set
- **Solution**: Ensure Google Calendar API is enabled in Google Cloud Console

### Issue: "A calendar must be selected"
- **Solution**: Make sure to select either "New Calendar" or "Existing Calendar" before creating events

### Issue: Classes not appearing with correct dates
- **Solution**: The default dates have been updated to Fall 2024. You can also manually set start/end dates when uploading.

## Browser Extension

The browser extension adds a button to MyU (University of Minnesota's student portal) to quickly add classes to Google Calendar.

- **Chrome**: https://chrome.google.com/webstore/detail/umn-classes-to-calendar/hgdfmecgpajmoeionaieooohpbkibaen
- **Firefox**: https://addons.mozilla.org/en-US/firefox/addon/umn-classes-to-calendar/
- **Edge**: https://microsoftedge.microsoft.com/addons/detail/umn-classes-to-calendar/ilbnlffpbbemoigkjpnldhihppmcnhji

## API Documentation

Once running, visit:
- **API Docs**: http://localhost:8000/redoc
- **Frontend**: http://localhost:3000
