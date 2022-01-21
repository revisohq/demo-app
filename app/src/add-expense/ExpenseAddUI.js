import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ExpenseAddUI = ({ categories, saveForm, abortForm }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    saveForm({ amount, category });
  };

  return (
    <form onSubmit={onSubmit} style={{ margin: 50 }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(evt) => setCategory(evt.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: 10, marginTop: 10 }}>
          <TextField
            label="Amount"
            variant="outlined"
            value={amount}
            onChange={(evt) => setAmount(evt.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <Button type="submit" variant="contained">
            save
          </Button>
          <Button onClick={abortForm}>cancel</Button>
        </FormControl>
      </Box>
    </form>
  );
};

export default ExpenseAddUI;
