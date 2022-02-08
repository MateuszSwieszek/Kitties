import React from "react";
import { Card } from "../card/card_component";

export const CardList = (props) =>(
    <div className="card_list">
        {props.monsters.map(monster =>(
                <Card  key={monster.id} monster={monster}/>   
                ))}    
    </div>
);


    
