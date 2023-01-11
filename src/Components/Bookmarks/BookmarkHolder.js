import BookmarkRow from "./BookmarkRow"

const bookmarkData = [{
    name: 'Newsblur',
    url: 'https://newsblur.com/',
    color: '#222222',
    background: 'radial-gradient(100% 122.16% at 100% 100%, #D2964B 0%, #D2964BCD 100%)',
    // background: '#D2964B',
}, {
    name: 'Raindrop.io',
    url: 'https://app.raindrop.io/my/0',
    color: '#fff',
    background: 'radial-gradient(100% 122.16% at 100% 100%, #0b7ed0 0%, #0b7ed0CD 100%)',
    // background: '#0b7ed0',
}, {
    name: 'Hulu',
    url: 'https://hulu.com',
    color: '#1ce783',
    background: 'radial-gradient(100% 122.16% at 100% 100%, #040405 0%, #040405CD 100%)',
    // background: '#040405',
}, {
    name: 'Netflix',
    url: 'https://netflix.com',
    color: '#E50914',
    background: 'radial-gradient(100% 122.16% at 100% 100%, #1A1A1A 0%, #1A1A1A60 100%)',
    // background: '#1A1A1A',
}, {
    name: 'Heardle',
    url: 'https://www.spotify.com/heardle/?',
    color: '#19b250',
    background: 'radial-gradient(100% 122.16% at 100% 100%, #0e0f0f 0%, #0e0f0fCD 100%)',
    // background: '#0e0f0f',
}]

export default function BookmarkHolder() {
    const bookmarkList = bookmarkData.map(b => <BookmarkRow key={b.url} {...b} />)

    return (
        <div id='bookmarks'>
            {bookmarkList}
        </div>
    )
}