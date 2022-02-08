import React from "react";
import'./card_style.css'

export const Card = (props) =>(
    <div className="card">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=170x170`}></img>
        <h2 key={props.monster.id}>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)