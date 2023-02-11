import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Time from "./Time";

function NavBar(){
    return(
        <AppBar position="static">
        <Toolbar>         
          <Typography variant="h6" component="div" sx={{flexGrow: 3, display:"flex" }}>
            Keeper
          </Typography>
          {/* <button color="inherit">Login</button> */}
          <Time />
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;