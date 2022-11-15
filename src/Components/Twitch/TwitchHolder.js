import { useEffect, useState } from "react"
import Spinner from "../Shared/Spinner";
import { fetchChannelInfo } from "./TwitchApi"
import TwitchRow from "./TwitchRow";
// import TwitchChannel from "./TwitchChannel"

export default function TwitchHolder() {
    const [channelData, setChannelData] = useState([])
    const [gameData, setGameData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortKey] = useState('viewer_count')

    // https://beta.reactjs.org/apis/react/useEffect#
    useEffect(() => {
        // setup code
        let ignore = false;
        setChannelData([])
        setGameData([])
        setIsLoading(true)
        fetchChannelInfo().then(result => {
            if (!ignore) {
                console.log(result)
                setChannelData(result.channelData)
                setGameData(result.gameData)
                console.log('loading false')
                setIsLoading(false)
            }
        })
        // clean up code
        return () => {
            ignore = true;
        }
        // dependencies in this component
    }, [])

    // TODO: handle case insensitive for strings and ints for viewers
    if (sortKey) channelData.sort((a, b) => b[sortKey] - a[sortKey])

    const channelList = channelData.map(c =>
        <TwitchRow
            key={c.user_id} {...c}
            game_thumbnail_url={gameData[c.game_id].box_art_url}
        />
    )
    return (
        <div id="twitch">
            {isLoading ? <Spinner /> : channelList}
        </div>
    )
}