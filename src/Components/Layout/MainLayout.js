import BookmarkHolder from "../Bookmarks/BookmarkHolder"
import './MainLayout.css'
import TwitchHolder from "../Twitch/TwitchHolder"
import YoutubeHolder from '../Youtube/YoutubeHolder'


export default function MainLayout() {
    return (
        <div className='main-flex'>
            <TwitchHolder/>
            <YoutubeHolder/>
            <BookmarkHolder/>
        </div>
    )
}