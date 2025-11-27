import { NextResponse } from "next/server"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_HANDLE = "@ChefSurendraRawat"

const FALLBACK_VIDEOS = [
  {
    id: "video1",
    title: "Authentic Himalayan Cuisine - Traditional Recipes",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    publishedAt: new Date().toISOString(),
    url: "https://www.youtube.com/@ChefSurendraRawat",
  },
  {
    id: "video2",
    title: "Master Chef Secrets - Professional Kitchen Tips",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    url: "https://www.youtube.com/@ChefSurendraRawat",
  },
  {
    id: "video3",
    title: "Gourmet Indian Dishes - Fine Dining Recipes",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    url: "https://www.youtube.com/@ChefSurendraRawat",
  },
  {
    id: "video4",
    title: "Spice Blending Techniques - Authentic Flavors",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    url: "https://www.youtube.com/@ChefSurendraRawat",
  },
  {
    id: "video5",
    title: "Traditional Tandoori Cooking Methods",
    thumbnail: "/placeholder.svg?height=720&width=1280",
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    url: "https://www.youtube.com/@ChefSurendraRawat",
  },
]

export async function GET() {
  try {
    // If no API key is set, return fallback
    if (!YOUTUBE_API_KEY) {
      console.log("YouTube API: No API key configured, returning fallback")
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(CHANNEL_HANDLE)}&type=channel&maxResults=1&key=${YOUTUBE_API_KEY}`,
    )

    if (!searchResponse.ok) {
      console.error("YouTube API: Search request failed", searchResponse.status)
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const searchData = await searchResponse.json()

    if (!searchData.items || searchData.items.length === 0) {
      console.error("YouTube API: No channel found for handle", CHANNEL_HANDLE)
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const channelId = searchData.items[0].snippet.channelId

    // Fetch channel's uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`,
    )

    if (!channelResponse.ok) {
      console.error("YouTube API: Channel request failed", channelResponse.status)
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const channelData = await channelResponse.json()

    if (!channelData.items || channelData.items.length === 0) {
      console.error("YouTube API: No channel data returned")
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads

    if (!uploadsPlaylistId) {
      console.error("YouTube API: Uploads playlist not found")
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=5&key=${YOUTUBE_API_KEY}`,
    )

    if (!videosResponse.ok) {
      console.error("YouTube API: Videos request failed", videosResponse.status)
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const videosData = await videosResponse.json()

    if (!videosData.items || videosData.items.length === 0) {
      console.error("YouTube API: No videos found in playlist")
      return NextResponse.json(FALLBACK_VIDEOS)
    }

    const videos = videosData.items.map((video: any) => {
      const videoId = video.snippet.resourceId.videoId
      return {
        id: videoId,
        title: video.snippet.title,
        thumbnail:
          video.snippet.thumbnails?.maxres?.url ||
          video.snippet.thumbnails?.high?.url ||
          video.snippet.thumbnails?.medium?.url ||
          `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        publishedAt: video.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      }
    })

    return NextResponse.json(videos)
  } catch (error) {
    console.error("YouTube API Error:", error instanceof Error ? error.message : error)
    return NextResponse.json(FALLBACK_VIDEOS)
  }
}
