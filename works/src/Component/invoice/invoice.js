import React, { useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import "../../Styles/invoice.css";

const Invoice = ({ cart, handleDelete }) => {
  const printInvoice = () => {
    window.print();
  };

  useEffect(() => {
    const handlePrint = () => {
      // Hide unwanted elements during printing
      const nonPrintableElements = document.querySelectorAll(".non-printable");
      nonPrintableElements.forEach((element) => {
        element.style.display = "none";
      });

      // Print the invoice
      window.print();

      // Restore the display property of hidden elements
      nonPrintableElements.forEach((element) => {
        element.style.display = "block";
      });
    };

    // Attach the handlePrint function to the 'beforeprint' event
    window.addEventListener("beforeprint", handlePrint);

    // Detach the handlePrint function when the component unmounts
    return () => {
      window.removeEventListener("beforeprint", handlePrint);
    };
  }, []);

  return (
    <div className="invoice-container">
      <Typography variant="h4" className="invoice-title">
        Invoice
      </Typography>
      <div className="printable-area">
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
    </div>
  );
};

export default Invoice;
