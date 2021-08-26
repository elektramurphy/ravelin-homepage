import React from "react";
import Image from 'next/image'

function Logos(props) {
    return (
            <div className="pt-5 block m-auto">
                <a href={props.link} rel="noreferrer" target="_blank"><Image src={props.url} alt={props.alt} width={'130px'} height={'130px'} /></a>
            </div>
    );
}

export default Logos;