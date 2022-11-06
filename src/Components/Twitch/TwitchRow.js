import { divMargin, flexParent } from "../Shared/Styles"

const sty = {
    section: {
        ...flexParent,
        padding: '1rem',
        width: 600,
        height: 100,
        border: '2px solid purple'
    },
    pic: {
        width: 100,
        height: 100
    },
    name: {
        ...divMargin,
        fontSize: 'calc(8px + 2vmin)',
    },
    game: {
        ...divMargin,
        fontSize: 'calc(8px + 1vmin)',
    },
    title: {
        ...divMargin,
        fontSize: 'calc(8px + 1vmin)',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: 25,
        whiteSpace: 'nowrap',
        width: 300
    }
}

const getThumbnailUrl = (thumbnail_url, thumbnailSize) => {
    return thumbnail_url.replace('{width}', thumbnailSize * 16).replace('{height}', thumbnailSize * 9)
}

export default function TwitchRow({ user_name, game_name, thumbnail_url, title, viewer_count, started_at }) {
    const getLiveTime = () => {
        const then = new Date(started_at)
        const now = new Date()
        const diff = new Date(now.getTime() - then.getTime())
        return `${(diff / (1000 * 60 * 60)).toFixed(1)} hours ago`
    }
    return (
        <section style={sty.section}>
            <img src={getThumbnailUrl(thumbnail_url, 15)} alt={`${user_name} thumbnail`}></img>
            <div>
                <div style={sty.name}>
                    <a href={`https://twitch.tv/${user_name}`}>{user_name}</a> {'   '}
                    <a href={`https://twitch.tv/${user_name}`} target='_blank' rel="noreferrer">❏</a>
                    </div>
                <div style={sty.title}>{title}</div>
                <div style={sty.game}>{game_name}</div>
            </div>
            <div>
                <div>{viewer_count} viewers</div>
                <div>{getLiveTime()}</div>

            </div>
        </section>
    )
}

/**
const exampleProp = {
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
 */