import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(12px)",
        background:
          "rgba(15,23,42,0.8)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          SocialHub
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;