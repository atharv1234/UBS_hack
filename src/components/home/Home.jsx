// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import List from '@mui/joy/List';
// import ListDivider from '@mui/joy/ListDivider';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Home from '@mui/icons-material/Home';
// import Person from '@mui/icons-material/Person';

// export default function HorizontalList() {
//   return (
//     <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
//       <List role="menubar" orientation="horizontal">
//         <ListItem role="none">
//           <ListItemButton
//             role="menuitem"
//             component="a"
//             href="#horizontal-list"
//             aria-label="Home"
//           >
//             <Home />
//           </ListItemButton>
//         </ListItem>
//         <ListDivider />
//         <ListItem role="none">
//           <ListItemButton role="menuitem" component="a" href="#horizontal-list">
//             Products
//           </ListItemButton>
//         </ListItem>
//         <ListDivider />
//         <ListItem role="none">
//           <ListItemButton role="menuitem" component="a" href="#horizontal-list">
//             Blog
//           </ListItemButton>
//         </ListItem>
//         <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
//           <ListItemButton
//             role="menuitem"
//             component="a"
//             href="#horizontal-list"
//             aria-label="Profile"
//           >
//             <Person />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );
// }

import * as React from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { makeObservable, observable, computed } from "mobx";
import CardDetails from "./CardDetails/CardDetails";
import CreateCard from "./CardDetails/CreateCard";
import StepperElement from "../StepperElement/StepperElement";

const Home = (props) => {
  const [cardCreation, setCardCreation] = useState(true);
  return (
    <>
      {cardCreation ? (
        <>
          <CreateCard
            cardCreation={cardCreation}
            setCardCreation={setCardCreation}
          />
          <CardDetails />
        </>
      ) : (
        <StepperElement />
      )}
    </>
  );
};

export default Home;
