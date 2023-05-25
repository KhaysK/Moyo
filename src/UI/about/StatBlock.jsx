import React from "react";
import classes from "./StatBlock.module.css"

function StatBlock({img, title, data}) {
    return (  
        <div className={classes.container}>
            <img src={img} alt="" style={{marginBottom:"8px"}}/>
            <p style={{fontSize:"48px", color:"#252A34"}}>{data}</p>
            <p>{title}</p>
        </div>
    );
}

export default StatBlock;