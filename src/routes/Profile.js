import React from "react";
import {authService} from "../fbase";
import {useHistory} from "react-router-dom";

export default () => {

    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut().then(r =>
            history.push("/")
        )
    }

    return (
        <button onClick={onLogOutClick}>Log Out</button>
    )
}
