import { supabase } from "../../supabaseClient"

const channels = ['UCAWnFCJGAP7YPti-gQSe1ng', 'UCO0gHyqLNeIrCAjwlO2BmiA']

const headers = { 'Authorization': `Bearer ${process.env.REACT_APP_YOUTUBE_AUTH}`, 'Accept': 'application/json' }
const method = 'GET'

export const fetchChannelInfo = async () => {
    // getUserId('GiantBomb')
    const q = 'channelId='
    const queryParams = q + channels.join(`&${q}`)
    // const url = `https://www.googleapis.com/youtube/v3/videos?${queryParams}`
    // console.log('youtube!')
    // const url = `https://www.youtube.com/feeds/videos.xml?channel_id='UCO0gHyqLNeIrCAjwlO2BmiA`
    // const response = await fetch(url, { method })//, headers })
    // const channelData = await response.json()
    // console.log(channelData)
    const { data, error } = await supabase.functions.invoke('youtube')
    console.log(data)
    // return { channelData: channelData.data } || { channelData: []}
    return { channelData: [] }
}

export const fetchGameBoxArtUrl = async (ids) => {
    const q = 'id='
    const queryParams = q + ids.join(`&${q}`)
    const url = `https://api.twitch.tv/helix/games?${queryParams}`

    const response = await fetch(url, { method, headers })
    const data = await response.json()
    return data.data || []
}


/**
const channelInfo.data = {
    "id": "41465610059",
    "user_id": "19070311",
    "user_login": "a_seagull",
    "user_name": "A_Seagull",
    "game_id": "515025",
    "game_name": "Overwatch 2",
    "type": "live",
    "title": "[DROPS] ⚠️ GAMERS AHEAD ⚠️",
    "viewer_count": 13952,
    "started_at": "2022-11-05T16:18:45Z",
    "language": "en",
    "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_a_seagull-{width}x{height}.jpg",
    "tag_ids": [
        "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
        "c2542d6d-cd10-4532-919b-3d19f30a768b"
    ],
    "is_mature": true
}

const gameData.data = {
    "game_id": "515025",
    "game_name": "Overwatch 2",
    "box_art_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_a_seagull-{width}x{height}.jpg",
}
 */