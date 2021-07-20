import React, {useEffect, useState} from "react";
import {dbService} from "../fbase";
import Nweet from "../components/Nweet";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    /*const getNweets = async () => {
        const nweets = await dbService.collection("nweets").get();
        nweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id: document.id,
            };
            setNweets((prev) => [nweetObject, ...prev]);
        })
    }*/

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setNweets(nweetArray)
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
                text: nweet,
                createdAt: Date.now(),
                createdId: userObj.uid
            }
        )
        setNweet("");
    }

    const onChange = (event) => {
        const {target: {value}} = event;
        setNweet(value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind" maxLength={120}/>
                <input type="submit" value="Nweet"/>
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={userObj.uid === nweet.createdId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;
