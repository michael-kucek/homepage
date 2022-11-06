import { useEffect, useState } from "react"
import { fetchChannelInfo } from "./TwitchApi"
import TwitchChannel from "./TwitchChannel";
// import TwitchChannel from "./TwitchChannel"

export default function TwitchHolder() {
    const [channelData, setChannelData] = useState([])

    // https://beta.reactjs.org/apis/react/useEffect#
    useEffect(() => {
        // setup code
        let ignore = false;
        setChannelData([])
        fetchChannelInfo().then(result => {
            if (!ignore) {
                console.log(result)
                setChannelData(result);
            }
        })
        // clean up code
        return () => {
            ignore = true;
        }
        // dependencies in this component
    }, [])

    const channelList = channelData.map(c => <TwitchChannel key={c.user_id} {...c} ></TwitchChannel>)
    return (
        <div>
            {channelList}
        </div>
    )
}