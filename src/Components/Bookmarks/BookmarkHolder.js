import BookmarkRow from "./BookmarkRow"

const bookmarkData = [{
    'name': 'Hulu',
    'url': 'https://hulu.com'
}, {
    'name': 'Netflix',
    'url': 'https://netflix.com'
}]

export default function BookmarkHolder() {
    const bookmarkList = bookmarkData.map(b => <BookmarkRow key={b.url} {...b} />)

    return (
        <div>
            {bookmarkList}
        </div>
    )
}