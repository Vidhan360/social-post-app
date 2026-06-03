import {
  Paper,
  Box,
  TextField,
  Button,
} from "@mui/material";

import { useState } from "react";

import { motion } from "framer-motion";

import { toast } from "react-toastify";

import API from "../services/api";

const CreatePost = ({
  onPostCreated,
}) => {
  const [text, setText] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleImageChange = (
    e
  ) => {
    const file =
      e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(
      URL.createObjectURL(
        file
      )
    );
  };

  const handleSubmit =
    async () => {
      try {
        if (
          !text &&
          !image
        ) {
          return toast.error(
            "Write something first"
          );
        }

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "text",
          text
        );

        if (image) {
          formData.append(
            "image",
            image
          );
        }

        const response =
          await API.post(
            "/posts",
            formData
          );

        if (
          response.data.success
        ) {
          toast.success(
            "Posted 🚀"
          );

          setText("");
          setImage(null);
          setPreview(null);

          if (
            onPostCreated
          ) {
            onPostCreated();
          }
        }
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <Paper
      component={motion.div}
      whileHover={{
        y: -3,
      }}
      sx={{
        p: 4,

        borderRadius:
          "32px",

        background:
          "rgba(255,255,255,0.05)",

        backdropFilter:
          "blur(30px)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        boxShadow:
          "0 20px 60px rgba(0,0,0,0.35)",
      }}
    >
      <TextField
        fullWidth
        multiline
        minRows={3}
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
        variant="standard"
        InputProps={{
          disableUnderline:
            true,
        }}
        sx={{
          "& textarea": {
            color: "white",

            fontSize:
              "1.15rem",

            lineHeight: 1.8,
          },
        }}
      />

      {preview && (
        <Box
          component="img"
          src={preview}
          alt="preview"
          sx={{
            width: "100%",
            mt: 3,
            mb: 3,

            maxHeight:
              "400px",

            objectFit:
              "cover",

            borderRadius:
              "20px",

            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        />
      )}

      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mt: 2,

          pt: 2,

          borderTop:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Button
          component="label"
          sx={{
            color:
              "#a78bfa",

            fontWeight:
              "bold",

            textTransform:
              "none",

            fontSize:
              "0.95rem",
          }}
        >
          Add Photo

          <input
            hidden
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
          />
        </Button>

        <Button
          onClick={
            handleSubmit
          }
          disabled={loading}
          sx={{
            px: 5,
            py: 1.3,

            borderRadius:
              "999px",

            color: "#fff",

            fontWeight:
              "bold",

            background:
              "linear-gradient(135deg,#3b82f6,#8b5cf6)",

            boxShadow:
              "0 0 25px rgba(139,92,246,0.45)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
            },
          }}
        >
          {loading
            ? "Posting..."
            : "Post →"}
        </Button>
      </Box>
    </Paper>
  );
};

export default CreatePost;