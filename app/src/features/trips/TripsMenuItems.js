import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FlightIcon from "@mui/icons-material/Flight";
import ListItemLink from "../../one-front/components/ListItemLink";

export const TripsMenuItem = () => (
  <>
    <ListItemLink to="/trips">
      <ListItemIcon>
        <FlightIcon />
      </ListItemIcon>
      <ListItemText primary="Trips" />
    </ListItemLink>
    <ListItemLink to="/trips/add">
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Add Trip" />
    </ListItemLink>
  </>
);
