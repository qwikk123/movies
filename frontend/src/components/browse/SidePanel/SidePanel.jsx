import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import GenreSelect from "./ItemSelect/GenreSelect";
import ActorSelect from "./ItemSelect/ActorSelect";
import TextField from "@mui/material/TextField";
import TitleSearch from "./Search/TitleSearch";

const drawerWidth = 300;

export default function SidePanel({
  handleFilterChange,
  handleFilterChangeLists,
  genre,
  updateGenre,
  actors,
  updateActors,
  title,
  setTitle,
}) {
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "rgb(24, 26, 27)",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List style={{ marginTop: "75px" }}>
        <ListItem key={"TODO"}>
          <ListItemText
            primary={"Search for movies"}
            sx={{ textAlign: "center", borderRadius: "0px" }}
          />
        </ListItem>
      </List>
      <List>
        <ListItem key="title">
          <TitleSearch
            handleFilterChange={handleFilterChange}
            title={title}
            setTitle={setTitle}
          />
        </ListItem>
        <ListItem key="genre">
          <GenreSelect
            handleFilterChange={handleFilterChangeLists}
            genre={genre}
            updateGenre={(value) => updateGenre(value)}
          />
        </ListItem>
        <ListItem key="actor">
          <ActorSelect
            handleFilterChange={handleFilterChangeLists}
            actors={actors}
            updateActors={(value) => updateActors(value)}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
