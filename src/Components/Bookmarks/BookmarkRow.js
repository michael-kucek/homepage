import './BookmarkStyles.css'

export default function BookmarkRow({ url, name, color, background }) {
    return (
        <div className='bookmark-div shadow' style={{ background }}>
            <a style={{ color }} className='bookmark-anchor' href={url} target='_blank' rel="noreferrer">
                {name}
            </a>
        </div>
    )
}