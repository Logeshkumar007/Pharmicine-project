import * as React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useEffect } from "react";
export default function FrontWeb() {
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
    <>
      <Box
        sx={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white" }}>
          <h1>Empowering Health,Inspiring Hope</h1>

          <Link to="/signin" variant="body2">
            <Button
              type="submit"
              fullWidth
              variant="success"
              sx={{
                mt: 2,
                mb: 1,
                width: "100%",
                borderRadius: "20px",
                // borderColor: "white",
                border: "3px solid white",
              }}
            >
              <h1 style={{ color: "green" }}>Get Started</h1>
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
}
