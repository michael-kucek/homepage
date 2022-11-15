import './BookmarkStyles.css'

export default function BookmarkRow({ url, name, color, background }) {
    return (
        <a className='bookmark-anchor' href={url} target='_blank' rel="noreferrer">
            <div className='bookmark-div shadow' style={{ color, background }}>
                {name}
            </div>
        </a>
    )
}