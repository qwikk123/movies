import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import GenreSelect from './ItemSelect/GenreSelect';
import ActorSelect from './ItemSelect/ActorSelect';
import TextField from '@mui/material/TextField';

const drawerWidth = 300;

export default function SidePanel({ handleFilterChange, genre, updateGenre, actors, updateActors}) {
  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List style={{marginTop: "55px"}}>
          <ListItem key={"TODO"} disablePadding>
              <ListItemText primary={"Search for movies"} sx={{textAlign: "center"}} />
          </ListItem>
        </List>
        <List>
          <ListItem key="title" disablePadding style={{paddingBottom: 10}}>
            <TextField sx={{width: 500}} label="Title"></TextField>
          </ListItem>
          <ListItem key="genre" disablePadding style={{paddingBottom: 10}}>
            <GenreSelect handleFilterChange={(key,value) => handleFilterChange(key, value)} 
            genre={genre} updateGenre={value => updateGenre(value)}/>
          </ListItem>
          <ListItem key="actor" disablePadding>
            <ActorSelect handleFilterChange={(key,value) => handleFilterChange(key, value)} 
            actors={actors} updateActors={value => updateActors(value)}/>
          </ListItem>
        </List>
      </Drawer>
  );
}
