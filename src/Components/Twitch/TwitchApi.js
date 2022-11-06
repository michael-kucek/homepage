const channels = ['GiantBomb', 'Nextlander', 'iOki', 'a_seagull', 'chainbrain', 'distortion2', 'Smight']

export const fetchChannelInfo = async () => {
    // getUserId('GiantBomb')
    const q = 'user_login='
    const queryParams = q + channels.join(`&${q}`)
    console.log(queryParams)
    const url = `https://api.twitch.tv/helix/streams?${queryParams}`

    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_AUTH}`, 'Client-Id': process.env.REACT_APP_TWITCH_ID }
    })
    const data = await response.json()
    return data.data || []
}