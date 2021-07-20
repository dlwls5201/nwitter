import React, {useState} from "react";
import {dbService} from "../fbase";

const Nweet = ({nweetObj, isOwner}) => {

    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?")
        console.log(ok);
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete()
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev)

    /*const toggleEditing2 = () => (setEditing((prev) => !prev))

    const toggleEditing3 = () => {
        return (setEditing((prev) => !prev))
    }*/

    const onNweetSubmit = async (event) => {
        event.preventDefault()
        await dbService.doc(`nweets/${nweetObj.id}`).update({text: newNweet})
        setEditing(false)
    }

    const onNweetChange = (event) => {
        const {target: {value}} = event;
        setNewNweet(value);
    }

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onNweetSubmit}>
                        <input
                            type="text"
                            placeholder="Edit your nweet"
                            value={newNweet}
                            required
                            onChange={onNweetChange}
                        />
                        <input type="submit" value="Update Nweet"/>
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>
                    )
                    }</>
            )}
        </div>
    )
};

export default Nweet;
