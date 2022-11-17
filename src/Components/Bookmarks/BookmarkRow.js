import './BookmarkStyles.css'

export default function BookmarkRow({ url, name, color, background }) {
    return (
            <a style={{ color, background }} className='bookmark-anchor bookmark-div shadow' href={url} target='_blank' rel="noreferrer">
                <span>{name}</span>
            </a>
    )
}