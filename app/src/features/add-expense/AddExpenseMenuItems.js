import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AttachMoney from "@mui/icons-material/AttachMoney";
import ListItemLink from "../../one-front/components/ListItemLink";

export const AddExpenseMenuItems = () => (
  <>
    <ListItemLink to="/expense/add">
      <ListItemIcon>
        <AttachMoney />
      </ListItemIcon>
      <ListItemText primary="Add Expense" />
    </ListItemLink>
  </>
);
