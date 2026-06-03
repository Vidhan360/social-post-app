import { useState } from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Avatar,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  PersonAdd,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import axios from "axios";

import AuthLayout from "../components/AuthLayout";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await axios.post(
          "http://localhost:5000/api/auth/signup",
          formData
        );

      if (response.data.success) {
        toast.success(
          "Account Created Successfully"
        );

        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Signup Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Box
        sx={{
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Avatar
              sx={{
                width: 90,
                height: 90,
                background:
                  "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                boxShadow:
                  "0 0 40px rgba(139,92,246,0.5)",
              }}
            >
              <PersonAdd
                sx={{
                  fontSize: 50,
                }}
              />
            </Avatar>
          </motion.div>
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            mb: 1,
          }}
        >
          Create Account
        </Typography>

        <Typography
          sx={{
            color: "#94a3b8",
            textAlign: "center",
            mb: 4,
          }}
        >
          Join SocialHub and start
          connecting today
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={
              formData.username
            }
            onChange={
              handleChange
            }
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              mt: 4,
              py: 1.7,
              borderRadius: "16px",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              boxShadow:
                "0 10px 30px rgba(99,102,241,0.4)",
              "&:hover": {
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
              },
            }}
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </Button>

          <Button
            fullWidth
            onClick={() =>
              navigate("/login")
            }
            sx={{
              mt: 2,
              color: "#60a5fa",
            }}
          >
            Already have an account?
          </Button>
        </form>
      </Box>
    </AuthLayout>
  );
};

export default Signup;