import {
  Avatar,
} from "@mui/material";

const UserAvatar = ({
  username,
  color,
}) => {
  return (
    <Avatar
      sx={{
        bgcolor: color || "#1976d2",
      }}
    >
      {username?.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default UserAvatar;