import * as React from 'react';
import NoteCard from "./NoteCard";
import NavBar from './NavBar';
import Box from "@mui/material/Box";
import notes from "./data";


function generateCards(nt) {
  return (
    <NoteCard
      title={nt.title}
      description={nt.description}
    />
  )
}

function App() {
  return (
    <Box>
      <NavBar />
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {notes.map(generateCards)}
      </div>
      
    </Box>

  );
}

export default App;