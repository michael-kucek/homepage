import './TwitchStyles.css'

const getThumbnailUrl = (thumbnailUrl, thumbnailSize = 100) => {
    return thumbnailUrl.replace('{width}', thumbnailSize * 16).replace('{height}', thumbnailSize * 9)
}

const getGameThumbnailUrl = (thumbnailUrl, thumbnailSize = 100) => {
    return thumbnailUrl.replace('{width}', thumbnailSize * 3).replace('{height}', thumbnailSize * 4)
}


export default function TwitchRow({ user_name, game_name, thumbnail_url, title, viewer_count, started_at, game_thumbnail_url }) {
    const getLiveTime = () => {
        const then = new Date(started_at)
        const now = new Date()
        const diff = new Date(now.getTime() - then.getTime())
        return `${(diff / (1000 * 60 * 60)).toFixed(1)} hours ago`
    }
    return (
        <div className='twitch-div shadow'>
            <img className='twitch-thumbnail' src={getThumbnailUrl(thumbnail_url)} alt={`${user_name} thumbnail`}></img>
            <div className='twitch-info'>
                <img className='twitch-game-thumbnail' src={getGameThumbnailUrl(game_thumbnail_url)} alt={`${user_name} thumbnail`}></img>
                <div className='twitch-channel-name'>
                    <a href={`https://twitch.tv/${user_name}`}>{user_name}</a> {'   '}
                    <a href={`https://twitch.tv/${user_name}`} target='_blank' rel="noreferrer">❏</a>
                </div>
                <div className='twitch-stream-info'>
                    <div>
                        {viewer_count} viewers
                    </div>
                    <div>
                        {getLiveTime()}
                    </div>
                </div>
            </div>
        </div>
    )
}