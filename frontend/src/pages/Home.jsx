import {
  Box,
  Typography,
  Paper,
  Avatar,
  Chip,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import AnimatedBackground from "../components/AnimatedBackground";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

import API from "../services/api";
import MobileBottomNav from "../components/MobileBottomNav";
const Home = () => {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const [posts, setPosts] =
  useState([]);

  const [page, setPage] =
  useState(1);

  const [hasMore, setHasMore] =
  useState(true);

  const [loadingMore,
  setLoadingMore] =
  useState(false);

  const fetchPosts =
  async (
    pageNumber = 1,
    append = false
  ) => {
    try {
      const response =
        await API.get(
          `/posts?page=${pageNumber}&limit=5`
        );

      if (
        response.data.success
      ) {
        const newPosts =
          response.data.posts;

        if (append) {
          setPosts(
            (prev) => [
              ...prev,
              ...newPosts,
            ]
          );
        } else {
          setPosts(
            newPosts
          );
        }

        setHasMore(
          pageNumber <
            response.data
              .totalPages
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  fetchPosts(1);
  }, []);

  const loadMore =
  async () => {
    const nextPage =
      page + 1;

    setLoadingMore(
      true
    );

    await fetchPosts(
      nextPage,
      true
    );

    setPage(
      nextPage
    );

    setLoadingMore(
      false
    );
  };

  return (
    <>
      <AnimatedBackground />

      <Box
  sx={{
    minHeight: "100vh",

    px: {
       xs: 2,
       md: 4,
         },

       py: 3,

       pb: {
            xs: 12,
            md: 3,
          },

           position: "relative",

           zIndex: 1,
         }}

      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "220px minmax(650px,850px) 250px",
            },

            justifyContent:
              "center",

            gap: 4,
          }}
        >
          {/* LEFT SIDEBAR */}

          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Paper
              sx={{
                display: {
                  xs: "none",
                  lg: "block",
                },

                p: 3,

                height:
                  "fit-content",

                position:
                  "sticky",

                top: 20,

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.05)",

                backdropFilter:
                  "blur(25px)",

                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  flexDirection:
                    "column",

                  alignItems:
                    "center",

                  mb: 4,
                }}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,

                    mb: 2,

                    background:
                      "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                  }}
                >
                  {user.username
                    ?.charAt(0)
                    ?.toUpperCase()}
                </Avatar>

                <Typography
                  fontWeight="bold"
                >
                  {user.username}
                </Typography>

                <Typography
                  color="#94a3b8"
                >
                  @{user.username}
                </Typography>
              </Box>

              <Sidebar />
            </Paper>
          </motion.div>

          {/* CENTER FEED */}

          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Box>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight="900"
                  sx={{
                    background:
                      "linear-gradient(135deg,#60a5fa,#8b5cf6,#ec4899)",

                    WebkitBackgroundClip:
                      "text",

                    WebkitTextFillColor:
                      "transparent",

                    mb: 1,
                  }}
                >
                  SocialHub
                </Typography>

                <Typography
                  sx={{
                    color:
                      "#94a3b8",

                    mb: 5,

                    fontSize:
                      "1rem",
                  }}
                >
                  Connect • Create • Inspire
                </Typography>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
              >
                <Box id="create-post">
               <CreatePost
                onPostCreated={
               fetchPosts
               }
               />
              </Box>
              </motion.div>

              <Box
                sx={{
                  mt: 8,
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
                {hasMore && (
  <Box
    sx={{
      display: "flex",
      justifyContent:
        "center",

      mt: 4,
    }}
  >
    <Button
      variant="contained"
      onClick={
        loadMore
      }
      disabled={
        loadingMore
      }
      sx={{
        px: 5,
        py: 1.5,

        borderRadius:
          "999px",

        background:
          "linear-gradient(135deg,#3b82f6,#8b5cf6)",

        boxShadow:
          "0 0 30px rgba(139,92,246,0.4)",
      }}
    >
      {loadingMore
        ? "Loading..."
        : "Load More"}
    </Button>
  </Box>
)}
              </Box>
            </Box>
          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Paper
              sx={{
                display: {
                  xs: "none",
                  lg: "block",
                },

                p: 3,

                height:
                  "fit-content",

                position:
                  "sticky",

                top: 20,

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.05)",

                backdropFilter:
                  "blur(25px)",

                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Trending
              </Typography>

              <Box
                sx={{
                  display: "flex",

                  flexWrap:
                    "wrap",

                  gap: 1,
                }}
              >
                <Chip label="#AI" />
                <Chip label="#WebDev" />
                <Chip label="#React" />
                <Chip label="#Startup" />
                <Chip label="#Programming" />
                <Chip label="#Technology" />
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Box>
      <MobileBottomNav />
    </>
  
  );
};

export default Home;