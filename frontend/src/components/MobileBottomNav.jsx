import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { motion } from "framer-motion";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const MobileBottomNav =
  () => {
    const navigate =
      useNavigate();

    const location =
      useLocation();

    const user =
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      ) || {};

    const goToCreate =
      () => {
        const section =
          document.getElementById(
            "create-post"
          );

        section?.scrollIntoView(
          {
            behavior:
              "smooth",
          }
        );
      };

    const currentValue =
      location.pathname ===
      "/"
        ? 0
        : location.pathname.includes(
            "/profile"
          )
        ? 2
        : 0;

    return (
      <motion.div
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            position:
              "fixed",

            bottom: 12,

            left: 12,

            right: 12,

            zIndex: 9999,

            borderRadius:
              "24px",

            overflow:
              "hidden",

            display: {
              xs: "block",
              lg: "none",
            },

            background:
              "rgba(15,23,42,0.88)",

            backdropFilter:
              "blur(25px)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            boxShadow:
              "0 0 40px rgba(139,92,246,0.25)",
          }}
        >
          <BottomNavigation
            value={
              currentValue
            }
            sx={{
              background:
                "transparent",
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={
                <HomeIcon />
              }
              onClick={() =>
                navigate("/")
              }
            />

            <BottomNavigationAction
              label="Create"
              icon={
                <AddCircleIcon />
              }
              onClick={
                goToCreate
              }
            />

            <BottomNavigationAction
              label="Profile"
              icon={
                <PersonIcon />
              }
              onClick={() =>
                navigate(
                  `/profile/${user._id}`
                )
              }
            />
          </BottomNavigation>
        </Paper>
      </motion.div>
    );
  };

export default MobileBottomNav;