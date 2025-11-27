# YouTube Integration Setup

This site features an automatic latest video display from Chef Surendra Rawat's YouTube channel.

## Setup Instructions

### Option 1: With YouTube API Key (Recommended for Production)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API Key)
5. Add the API key to your Vercel environment variables:
   - `YOUTUBE_API_KEY` - Your YouTube Data API key
6. Get your channel ID:
   - Go to your YouTube channel
   - Click on your profile picture → Settings → Advanced settings
   - Copy the Channel ID
7. Update `app/api/youtube/latest/route.ts` with your actual channel ID (replace `UCYourChannelIDHere`)

### Option 2: Without API Key (Fallback Mode)

If you don't set up the YouTube API key, the section will display a fallback video that links to your channel. This is fine for testing but won't show your actual latest video.

## How It Works

- The YouTube section fetches the latest video from your channel automatically
- When clicked, the video opens in a new tab on YouTube
- There's a subscribe button that links to your channel with auto-subscribe prompt
- The section is fully responsive across all devices
- Falls back gracefully if API is unavailable

## Environment Variables

Add to your Vercel project:
- `YOUTUBE_API_KEY` (optional but recommended)

## Current Channel

https://www.youtube.com/@ChefSurendraRawat
