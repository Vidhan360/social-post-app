import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";

const PostModal = ({
  open,
  onClose,
  post,
}) => {
  if (!post) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          background:
            "#0f172a",

          color: "white",

          borderRadius:
            "28px",

          border:
            "1px solid rgba(255,255,255,0.08)",
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            alignItems:
              "center",
          }}
        >
          <Avatar
            sx={{
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
            }}
          >
            {post.username
              ?.charAt(0)
              ?.toUpperCase()}
          </Avatar>

          <Box>
            <Typography
              fontWeight="bold"
            >
              {post.username}
            </Typography>

            <Typography
              fontSize="0.85rem"
              color="#94a3b8"
            >
              {new Date(
                post.createdAt
              ).toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {post.image && (
          <Box
            component="img"
            src={`http://localhost:5000${post.image}`}
            alt="post"
            sx={{
              width: "100%",

              maxHeight:
                "600px",

              objectFit:
                "cover",

              borderRadius:
                "24px",

              mb: 3,
            }}
          />
        )}

        <Typography
          sx={{
            fontSize:
              "1.05rem",

            lineHeight:
              1.9,
          }}
        >
          {post.text}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default PostModal;