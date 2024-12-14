import React from "react";
import DisplayName from "./DisplayName";

export default function UserInfo(props) {
    return (
        <div>
            <DisplayName user={props.user} />
        </div>
    )
}