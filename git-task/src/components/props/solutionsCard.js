import React, { useState } from "react";

function SolutionsCard(props) {
  const [color] = useState(props.color);
    return (
      <div className="rounded-2xl shadow-2xl transition ease-in-out duration-500 p-6 my-5 md:my-0">
            <h4 className={`text-${color}`}>{props.title}</h4>
            <p className="h-40 text-base pt-2.5 pb-10">{props.description}</p>
            <a href={props.link} rel="noreferrer"><p className="text-base font-semibold">Learn more</p></a>
      </div>
    );
  }

  export default SolutionsCard;