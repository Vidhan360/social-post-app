import {
  Box,
  Typography,
  Avatar,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import AnimatedBackground from "../components/AnimatedBackground";
import MobileBottomNav from "../components/MobileBottomNav";
import PostCard from "../components/PostCard";

import API from "../services/api";

const Profile = () => {
  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    ) || {};

  const [posts, setPosts] =
    useState([]);

  const [logoutOpen,
    setLogoutOpen] =
    useState(false);

  const fetchUserPosts =
    async () => {
      try {
        const response =
          await API.get(
            `/posts/user/${user._id}`
          );

        if (
          response.data.success
        ) {
          setPosts(
            response.data.posts
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  return (
    <>
      <AnimatedBackground />

      <Box
        sx={{
          minHeight:
            "100vh",

          p: {
            xs: 2,
            md: 4,
          },

          position:
            "relative",

          zIndex: 1,

          pb: {
            xs: 10,
            md: 4,
          },
        }}
      >
        {/* PROFILE CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Paper
            sx={{
              maxWidth: 900,

              mx: "auto",

              p: 5,

              mb: 7,

              borderRadius:
                "36px",

              background:
                "rgba(255,255,255,0.05)",

              backdropFilter:
                "blur(25px)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 25px 80px rgba(0,0,0,0.35)",
            }}
          >
            <Box
              sx={{
                display: "flex",

                justifyContent:
                  "space-between",

                mb: 4,
              }}
            >
              <Button
                startIcon={
                  <HomeIcon />
                }
                onClick={() =>
                  navigate("/")
                }
                sx={{
                  color:
                    "white",
                }}
              >
                Home
              </Button>

              <Button
                color="error"
                startIcon={
                  <LogoutIcon />
                }
                onClick={() =>
                  setLogoutOpen(
                    true
                  )
                }
              >
                Logout
              </Button>
            </Box>

            <Box
              sx={{
                textAlign:
                  "center",
              }}
            >
              <Avatar
                sx={{
                  width: 130,
                  height: 130,

                  mx: "auto",

                  mb: 3,

                  fontSize:
                    "3rem",

                  background:
                    "linear-gradient(135deg,#3b82f6,#8b5cf6)",

                  boxShadow:
                    "0 0 40px rgba(139,92,246,0.4)",
                }}
              >
                {user.username
                  ?.charAt(0)
                  ?.toUpperCase()}
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {user.username}
              </Typography>

              <Typography
                color="#94a3b8"
              >
                {user.email}
              </Typography>

              <Box
                sx={{
                  mt: 5,

                  display: "flex",

                  justifyContent:
                    "center",

                  gap: 8,
                }}
              >
                <Box
                  textAlign="center"
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    {
                      posts.length
                    }
                  </Typography>

                  <Typography
                    color="#94a3b8"
                  >
                    Posts
                  </Typography>
                </Box>

                <Box
                  textAlign="center"
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    --
                  </Typography>

                  <Typography
                    color="#94a3b8"
                  >
                    Followers
                  </Typography>
                </Box>

                <Box
                  textAlign="center"
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    --
                  </Typography>

                  <Typography
                    color="#94a3b8"
                  >
                    Following
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </motion.div>

        {/* POSTS */}

        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 5,

              background:
                "linear-gradient(135deg,#60a5fa,#8b5cf6)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",
            }}
          >
            My Posts
          </Typography>

          <Box
            sx={{
              display: "flex",

              flexDirection:
                "column",

              gap: 4,
            }}
          >
            {posts.map(
              (
                post,
                index
              ) => (
                <motion.div
                  key={
                    post._id
                  }
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index *
                      0.08,

                    duration:
                      0.5,
                  }}
                >
                  <PostCard
                    post={post}
                  />
                </motion.div>
              )
            )}
          </Box>
        </Box>

        {/* PREMIUM LOGOUT DIALOG */}

        <Dialog
          open={
            logoutOpen
          }
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
              Are you sure
              you want to
              logout?
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
      </Box>

      <MobileBottomNav />
    </>
  );
};

export default Profile;