import React from "react";

function Logos(props) {
    return (
            <div className="pt-5 block m-auto">
                <a href={props.link} rel="noreferrer" target="_blank"><img src={props.url} alt={props.alt} /></a>
            </div>
    );
}

export default Logos;