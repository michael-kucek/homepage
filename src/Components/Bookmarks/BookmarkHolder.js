import BookmarkRow from "./BookmarkRow"

const bookmarkData = [{
    'name': 'Newsblur',
    'url': 'https://newsblur.com/',
    'color': '#222222',
    'background': '#D2964B'
}, {
    'name': 'Raindrop.io',
    'url': 'https://app.raindrop.io/my/0',
    'color': '#fff',
    'background': '#0b7ed0'
}, {
    'name': 'Hulu',
    'url': 'https://hulu.com',
    'color': '#1ce783',
    'background': '#040405'
}, {
    'name': 'Netflix',
    'url': 'https://netflix.com',
    'color': '#E50914',
    'background': '#1A1A1A'
}]

export default function BookmarkHolder() {
    const bookmarkList = bookmarkData.map(b => <BookmarkRow key={b.url} {...b} />)

    return (
        <div id='bookmarks'>
            {bookmarkList}
        </div>
    )
}