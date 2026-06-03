import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const navigate =
    useNavigate();

  const [logoutOpen,
    setLogoutOpen] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    ) || {};

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  const scrollToCreatePost =
    () => {
      const section =
        document.getElementById(
          "create-post"
        );

      if (section) {
        section.scrollIntoView({
          behavior:
            "smooth",
        });
      }
    };

  return (
    <>
      <Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={4}
        >
          SocialHub
        </Typography>

        <Button
          startIcon={
            <HomeIcon />
          }
          fullWidth
          onClick={() =>
            navigate("/")
          }
          sx={{
            justifyContent:
              "flex-start",

            mb: 2,

            color: "white",
          }}
        >
          Home
        </Button>

        <Button
          startIcon={
            <PersonIcon />
          }
          fullWidth
          onClick={() =>
            navigate(
              `/profile/${user._id}`
            )
          }
          sx={{
            justifyContent:
              "flex-start",

            mb: 2,

            color: "white",
          }}
        >
          Profile
        </Button>

        <Button
          startIcon={
            <AddCircleIcon />
          }
          fullWidth
          onClick={
            scrollToCreatePost
          }
          sx={{
            justifyContent:
              "flex-start",

            mb: 2,

            color: "white",
          }}
        >
          Create Post
        </Button>

        <Button
          color="error"
          startIcon={
            <LogoutIcon />
          }
          fullWidth
          onClick={() =>
            setLogoutOpen(
              true
            )
          }
          sx={{
            justifyContent:
              "flex-start",
          }}
        >
          Logout
        </Button>
      </Box>

      {/* PREMIUM LOGOUT DIALOG */}

      <Dialog
        open={logoutOpen}
        onClose={() =>
          setLogoutOpen(
            false
          )
        }
        PaperProps={{
          sx: {
            background:
              "rgba(15,23,42,0.98)",

            color:
              "white",

            borderRadius:
              "24px",

            border:
              "1px solid rgba(255,255,255,0.08)",

            backdropFilter:
              "blur(25px)",

            minWidth:
              "350px",
          },
        }}
      >
        <DialogTitle>
          Logout
        </DialogTitle>

        <DialogContent>
          <Typography
            sx={{
              mb: 3,
            }}
          >
            Are you sure you
            want to logout?
          </Typography>

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "flex-end",

              gap: 2,
            }}
          >
            <Button
              onClick={() =>
                setLogoutOpen(
                  false
                )
              }
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={
                logout
              }
            >
              Logout
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Sidebar;