import React from "react";
import Card  from "@mui/material/Card";



function NoteCard(props){
    const customStyle = {
        maxWidth: "20%",
        padding: "1rem",
        borderRadius: 5,
        margin: "1rem"
    }

    return(
        <Card sx={customStyle}>
        <h1 style={{justifyContent: "center"}}>{props.title}</h1>
        <p>{props.description}</p>
        </Card>
    );
}

export default NoteCard;