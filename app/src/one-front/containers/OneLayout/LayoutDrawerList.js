import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export const LayoutDrawerList = ({ items }) => (
  <>
    <Divider />
    <List>
      {items.map((ListItem) => (
        <ListItem.component key={ListItem.name || ListItem.component.name} />
      ))}
    </List>
  </>
);
