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
import { PropaneSharp } from "@mui/icons-material";

export default function CreateCard(props) {
  return (
    <div>
      <Card
        size="lg"
        variant="solid"
        color="neutral"
        invertedColors
        sx={{ bgcolor: "neutral.900" }}
      >
        <Chip size="sm" variant="outlined">
          Welcome to Modern Banking
        </Chip>
        <Typography level="h2">Get Your Virtual Card</Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            mx: "calc(-1 * var(--ListItem-paddingX))",
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Virtual Credit Cards
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Financial Analytics
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Checking Account
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            API Integration
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Cancel Anytime
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Button
            onClick={() => props.setCardCreation(!props.cardCreation)}
            endDecorator={<KeyboardArrowRight />}
          >
            Create Card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
