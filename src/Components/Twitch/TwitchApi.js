const channels = ['GiantBomb', 'Nextlander', 'iOki', 'a_seagull', 'chainbrain', 'Smight', 'IKeepItTaco', 'Flats', 'Quill18', 'Werster', 'Draskyl', 'Snip3down', 'Artosis', 'jorbs', 'PurgeGamers']

const headers = { 'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_AUTH}`, 'Client-Id': process.env.REACT_APP_TWITCH_ID }
const method = 'GET'

export const fetchChannelInfo = async () => {
    // getUserId('GiantBomb')
    const q = 'user_login='
    const queryParams = q + channels.join(`&${q}`)
    const url = `https://api.twitch.tv/helix/streams?${queryParams}`

    const response = await fetch(url, { method, headers })
    const channelData = await response.json()
    const gameIds = channelData.data.map(ch => ch.game_id)
    const gameDataArray = await fetchGameBoxArtUrl(gameIds)
    const gameData = {}
    gameDataArray.forEach(g => {
        gameData[g.id] = g
    })
    console.log(gameData)

    return { channelData: channelData.data, gameData } || { channelData: [], gameData: [] }
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