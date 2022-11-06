import { useEffect, useState } from "react"
import Spinner from "../Shared/Spinner";
import { fetchChannelInfo } from "./TwitchApi"
import TwitchRow from "./TwitchRow";
// import TwitchChannel from "./TwitchChannel"

export default function TwitchHolder() {
    const [channelData, setChannelData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // https://beta.reactjs.org/apis/react/useEffect#
    useEffect(() => {
        // setup code
        let ignore = false;
        setChannelData([])
        setIsLoading(true)
        fetchChannelInfo().then(result => {
            if (!ignore) {
                console.log(result)
                setChannelData(result)
                setIsLoading(false)
            }
        })
        // clean up code
        return () => {
            ignore = true;
        }
        // dependencies in this component
    }, [])

    const channelList = channelData.map(c => <TwitchRow key={c.user_id} {...c} ></TwitchRow>)
    return (
        <div>
            {isLoading ? <Spinner/> : channelList}
        </div>
    )
}