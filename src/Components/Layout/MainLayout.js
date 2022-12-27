import BookmarkHolder from "../Bookmarks/BookmarkHolder";
import './MainLayout.css'
import TwitchHolder from "../Twitch/TwitchHolder";


export default function MainLayout() {
    return (
        <div class='main-flex'>
            <TwitchHolder/>
            <BookmarkHolder/>
        </div>
    )
}