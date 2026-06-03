import {
  Paper,
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

import API from "../services/api";
import PostModal from "./PostModal";

const PostCard = ({ post }) => {
  const currentUser =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const [likesCount, setLikesCount] =
    useState(
      post.likes?.length || 0
    );

  const [comments, setComments] =
    useState(
      post.comments || []
    );

  const [commentText, setCommentText] =
    useState("");

  const [openComments, setOpenComments] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const [openPost, setOpenPost] =
    useState(false);

  const [deleted, setDeleted] =
    useState(false);

  const handleLike =
    async () => {
      try {
        const response =
          await API.put(
            `/posts/${post._id}/like`
          );

        setLikesCount(
          response.data.likesCount
        );
      } catch {
        toast.error(
          "Failed to like post"
        );
      }
    };

  const handleDelete =
    async () => {
      try {
        await API.delete(
          `/posts/${post._id}`
        );

        toast.success(
          "Post deleted"
        );

        setDeleted(true);

        setOpenDelete(
          false
        );
      } catch {
        toast.error(
          "Delete failed"
        );
      }
    };

  const handleComment =
    async () => {
      try {
        if (
          !commentText.trim()
        ) {
          return toast.error(
            "Write a comment"
          );
        }

        await API.post(
          `/posts/${post._id}/comment`,
          {
            text:
              commentText,
          }
        );

        setComments([
          ...comments,
          {
            username:
              currentUser.username,
            text:
              commentText,
          },
        ]);

        setCommentText("");

        toast.success(
          "Comment added"
        );
      } catch {
        toast.error(
          "Failed to add comment"
        );
      }
    };

  if (deleted) return null;

  return (
    <>
      <Paper
        component={motion.div}
        whileHover={{
          y: -5,
          scale: 1.01,
        }}
        sx={{
          p: 4,
          mb: 4,

          borderRadius:
            "32px",

          background:
            "rgba(255,255,255,0.05)",

          backdropFilter:
            "blur(25px)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          boxShadow:
            "0 15px 40px rgba(0,0,0,0.35)",
        }}
      >
        {/* HEADER */}

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
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

          {currentUser._id ===
            post.userId && (
            <IconButton
              onClick={() =>
                setOpenDelete(
                  true
                )
              }
            >
              🗑️
            </IconButton>
          )}
        </Box>

        {/* TEXT */}

        {post.text && (
          <Typography
            onClick={() =>
              setOpenPost(
                true
              )
            }
            sx={{
              mb: 2,
              lineHeight: 1.8,
              fontSize:
                "1rem",

              cursor:
                "pointer",
            }}
          >
            {post.text}
          </Typography>
        )}

        {/* IMAGE */}

        {post.image && (
          <Box
            component="img"
            src={`${import.meta.env.VITE_API_URL.replace(
           "/api",
           ""
            )}${post.image}`}
            alt="post"
            onClick={() =>
              setOpenPost(
                true
              )
            }
            sx={{
              width: "100%",

              borderRadius:
                "24px",

              mt: 2,
              mb: 2,

              cursor:
                "pointer",

              transition:
                "0.3s",

              "&:hover": {
                transform:
                  "scale(1.02)",
              },
            }}
          />
        )}

        <Divider
          sx={{
            my: 2,
            borderColor:
              "rgba(255,255,255,0.08)",
          }}
        />

        {/* ACTIONS */}

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            onClick={
              handleLike
            }
            sx={{
              color:
                "#f472b6",
              fontWeight:
                "bold",
            }}
          >
            ❤️ {likesCount}
          </Button>

          <Button
            onClick={() =>
              setOpenComments(
                true
              )
            }
            sx={{
              color:
                "#a78bfa",
              fontWeight:
                "bold",
            }}
          >
            💬 {
              comments.length
            }
          </Button>

          <Button
            onClick={() =>
              setOpenPost(
                true
              )
            }
            sx={{
              color:
                "#60a5fa",
              fontWeight:
                "bold",
            }}
          >
            View Post
          </Button>
        </Box>
      </Paper>

      {/* POST MODAL */}

      <PostModal
        open={openPost}
        onClose={() =>
          setOpenPost(
            false
          )
        }
        post={post}
      />

{/* COMMENTS DIALOG */}

<Dialog
  open={openComments}
  onClose={() =>
    setOpenComments(false)
  }
  fullWidth
  maxWidth="sm"
  PaperProps={{
    sx: {
      background:
        "rgba(15,23,42,0.98)",

      backdropFilter:
        "blur(40px)",

      color: "white",

      borderRadius:
        "28px",

      border:
        "1px solid rgba(255,255,255,0.08)",

      boxShadow:
        "0 25px 80px rgba(0,0,0,0.8)",
    },
  }}
>
  <DialogTitle
    sx={{
      fontSize: "1.6rem",
      fontWeight: 700,
    }}
  >
    Comments
  </DialogTitle>

  <DialogContent>
    <Box
      sx={{
        maxHeight: "350px",
        overflowY: "auto",
        mb: 3,
      }}
    >
      {comments.length ===
      0 ? (
        <Typography
          textAlign="center"
          color="#94a3b8"
          py={4}
        >
          No comments yet.
        </Typography>
      ) : (
        comments.map(
          (
            comment,
            index
          ) => (
            <Box
              key={index}
              sx={{
                p: 2.5,

                mb: 2,

                borderRadius:
                  "18px",

                background:
                  "rgba(255,255,255,0.08)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                backdropFilter:
                  "blur(10px)",
              }}
            >
              <Typography
                fontWeight="bold"
                mb={1}
              >
                {
                  comment.username
                }
              </Typography>

              <Typography
                sx={{
                  color:
                    "#e2e8f0",
                }}
              >
                {comment.text}
              </Typography>
            </Box>
          )
        )
      )}
    </Box>

    <TextField
      fullWidth
      multiline
      rows={3}
      value={commentText}
      placeholder="Write a comment..."
      onChange={(e) =>
        setCommentText(
          e.target.value
        )
      }
      sx={{
        "& .MuiOutlinedInput-root":
          {
            borderRadius:
              "18px",

            background:
              "rgba(255,255,255,0.04)",

            color:
              "white",
          },
      }}
    />

    <Button
      fullWidth
      sx={{
        mt: 3,

        py: 1.5,

        borderRadius:
          "999px",

        color: "white",

        fontWeight:
          "bold",

        background:
          "linear-gradient(135deg,#3b82f6,#8b5cf6)",

        boxShadow:
          "0 0 25px rgba(139,92,246,0.4)",

        "&:hover": {
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
        },
      }}
      onClick={
        handleComment
      }
    >
      SEND COMMENT
    </Button>
  </DialogContent>
</Dialog>

      {/* DELETE DIALOG */}

      <Dialog
        open={
          openDelete
        }
        onClose={() =>
          setOpenDelete(
            false
          )
        }
        PaperProps={{
          sx: {
            background:
              "#0f172a",
            color:
              "white",
            borderRadius:
              "24px",
          },
        }}
      >
        <DialogTitle>
          Delete Post
        </DialogTitle>

        <DialogContent>
          <Typography
            mb={3}
          >
            This action
            cannot be undone.
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
                setOpenDelete(
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
                handleDelete
              }
            >
              Delete
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostCard;