import BookmarkHolder from "../Bookmarks/BookmarkHolder";
import { flexParent } from "../Shared/Styles";
import TwitchHolder from "../Twitch/TwitchHolder";


export default function MainLayout() {
    return (
        <div style={{ ...flexParent }}>
            <TwitchHolder/>
            <BookmarkHolder/>
        </div>
    )
}