import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AppsIcon from "@mui/icons-material/Apps";
import ListItemLink from "../../one-front/components/ListItemLink";

export const AppMenuItems = () => (
  <>
    <ListItemLink to="/">
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Apps" />
    </ListItemLink>
    <ListItemLink to="/dashboard">
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemLink>
  </>
);
