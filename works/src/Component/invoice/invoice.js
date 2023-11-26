import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import "../../Styles/invoice.css";
import { useEffect } from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/IconButton";

const Invoice = ({ cart, handleDelete }) => {
  const printInvoice = () => {
    window.print();
  };
  useEffect(() => {
    // Save original body background style
    const originalBackground = document.body.style.background;
    const originalBackgroundSize = document.body.style.backgroundSize;

    // Set new body background style
    document.body.style.background =
      "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a17937-8c0d-4a78-b75b-d9847af5b606/dg7ssyw-c79f2b26-1b69-4633-8cd6-4256bcca93eb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTE3OTM3LThjMGQtNGE3OC1iNzViLWQ5ODQ3YWY1YjYwNlwvZGc3c3N5dy1jNzlmMmIyNi0xYjY5LTQ2MzMtOGNkNi00MjU2YmNjYTkzZWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EO5d-A_h03cUY0q0fAsM8qlGBnPxiT2hybyl1VHA1ws) repeat";
    document.body.style.backgroundSize = "cover";

    // Reset to original body background style on component unmount
    return () => {
      document.body.style.background = originalBackground;
      document.body.style.backgroundSize = originalBackgroundSize;
    };
  }, []);
  return (
    <div className="invoice-container">
      <Typography variant="h4" className="invoice-title">
        Invoice
      </Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              style={{ color: "#000", marginRight: "20px", padding: "10px" }}
              primary={item.name}
              secondary={`₹${item.price}`}
            />
            <button
              style={{
                backgroundColor: "#0096ff",
                marginLeft: "20px",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
              }}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" className="invoice-total">
        Total: ₹{cart.reduce((total, item) => total + item.price, 0)}
      </Typography>
      <Button variant="contained" color="primary" onClick={printInvoice}>
        Pay Now
      </Button>
    </div>
  );
};

export default Invoice;
