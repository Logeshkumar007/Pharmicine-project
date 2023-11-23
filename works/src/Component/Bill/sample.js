import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../../Styles/Bill.css";
import { Paper } from "@mui/material";

import { Link } from "react-router-dom";
import AppBars from "../NavigationBar/Appbar";

const Bill = () => {
  const [Item, setItem] = useState([]);
  const [, setTab] = useState("");
  const [alert, setAlert] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const tab = e.target[0].value;
    if (tab === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);

      return;
    }

    setTab(tab);
    setItem([...Item, tab]);
    setTab("");
    setInputValue("");
  };

  const handleDelete = (indexToDelete) => {
    setItem(Item.filter((Item, index) => index !== indexToDelete));
  };

  const handleBuyNow = () => {
    console.log(Item); // This will log all the items in the console
  };

  const Tablets = [
    { label: "Paracetamol (Exp.date:17-09-2024) Rs:10/strip" },
    { label: "Vicks (Exp.date:19-09-2024) Rs:20/strip" },
    { label: "DairyMilk (Exp.date:24-09-2024) Rs:50/piece" },
    { label: "Elder Berry (Exp.date:07-09-2024) Rs:10/strip" },
  ];

  // Product section starts here
  return (
    <>
      <AppBars />
      <div className="root">
        {/* <h1>hello</h1> */}
        {alert && (
          <Stack sx={{ width: "50%", borderRadius: "10px" }} spacing={2}>
            <Alert
              className={alert ? "alert-show" : "alert-hide"}
              severity="info"
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                fontWeight: "bold",
                color: "red",
              }}
            >
              Please Enter The Requirement
            </Alert>
          </Stack>
        )}
        <Paper elevation={6}>
          <form onSubmit={handleForm} className="form">
            <label
              style={{
                fontSize: "60px",
                fontFamily: "sans-serif",
                margin: "40px",
              }}
            >
              REQUIREMENTS
            </label>
            <Box sx={{ padding: "10px", marginTop: "7px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Tablets}
                marginTop
                sx={{ width: 300, color: "yellow" }}
                value={inputValue} // Set the value of the input
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue); // Update the input value when it changes
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Enter The Requirement"
                    sx={{ fontWeight: "1700", color: "green" }}
                  />
                )}
              />
            </Box>
            <Button variant="contained" color="success" type="submit">
              Add ITEMS
            </Button>
          </form>
          {/* Product section ends here} */}

          {/* Delete function mentione below */}
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 4,

                  display: "flex",
                  justifyContent: "center",
                  color: "#000000",
                  fontWeight: "bold",
                  // border: "2px solid black",
                  // backgroundColor: "white",
                  backgroundColor: Item.length > 0 ? "white" : "transparent", // Change background color based on Item length
                  width: "100%",
                  flex: "1 ",
                }}
                variant="h4"
                component="div"
              >
                Products
              </Typography>
              {Item.length > 0 && (
                <Demo>
                  {Item.map((item, index) => {
                    return (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item} />
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDelete(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItem>
                    );
                  })}
                </Demo>
              )}
              <Stack
                direction="row"
                spacing={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  padding: "10px",
                }}
              >
                <Link to="/checkout">
                  <Button variant="contained" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Box>
          {/* Delete function mentione above */}
        </Paper>
      </div>
    </>
  );
};

export default Bill;

//Theme for product section
const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  // borderRadius: "10px",
}));
