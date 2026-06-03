import { Box, Typography } from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import { motion } from "framer-motion";

import AnimatedBackground from "./AnimatedBackground";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AnimatedBackground />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              background:
                "rgba(255,255,255,0.05)",

              backdropFilter: "blur(25px)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              borderRadius: "32px",

              overflow: "hidden",

              boxShadow:
                "0 30px 80px rgba(0,0,0,0.45)",
            }}
          >
            {/* LEFT SIDE */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                flexDirection: "column",

                justifyContent: "center",

                padding: 6,

                position: "relative",

                overflow: "hidden",
              }}
            >
              {/* FLOATING ORB */}

              <motion.div
                animate={{
                  y: [0, -25, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",

                  width: "300px",
                  height: "300px",

                  borderRadius: "50%",

                  background:
                    "radial-gradient(circle,#8b5cf6,transparent)",

                  filter: "blur(90px)",

                  top: "10%",
                  left: "-50px",

                  opacity: 0.6,
                }}
              />

              {/* LOGO */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Box sx={{ mb: 10 }}>
                  <Typography
                    sx={{
                      fontSize: "4.5rem",
                      fontWeight: 900,
                      lineHeight: 1,

                      background:
                        "linear-gradient(90deg,#60a5fa,#8b5cf6,#ec4899,#60a5fa)",

                      backgroundSize:
                        "300% 300%",

                      animation:
                        "gradientShift 8s ease infinite",

                      WebkitBackgroundClip:
                        "text",

                      WebkitTextFillColor:
                        "transparent",
                    }}
                  >
                    SOCIAL
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "4.5rem",
                      fontWeight: 900,
                      lineHeight: 1,

                      background:
                        "linear-gradient(90deg,#60a5fa,#8b5cf6,#ec4899,#60a5fa)",

                      backgroundSize:
                        "300% 300%",

                      animation:
                        "gradientShift 8s ease infinite",

                      WebkitBackgroundClip:
                        "text",

                      WebkitTextFillColor:
                        "transparent",
                    }}
                  >
                    HUB
                  </Typography>
                </Box>
              </motion.div>

              {/* FEATURES */}

              <Box>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <PeopleAltIcon
                      sx={{
                        color: "#60a5fa",
                        fontSize: 30,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#cbd5e1",
                        fontSize: "1.15rem",
                        fontWeight: 500,
                      }}
                    >
                      Connect People
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <AutoAwesomeIcon
                      sx={{
                        color: "#8b5cf6",
                        fontSize: 30,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#cbd5e1",
                        fontSize: "1.15rem",
                        fontWeight: 500,
                      }}
                    >
                      Create Content
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <RocketLaunchIcon
                      sx={{
                        color: "#ec4899",
                        fontSize: 30,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#cbd5e1",
                        fontSize: "1.15rem",
                        fontWeight: 500,
                      }}
                    >
                      Inspire Communities
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </Box>

            {/* RIGHT SIDE */}

            <Box
              sx={{
                padding: {
                  xs: 4,
                  md: 6,
                },

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {children}
            </Box>
          </Box>
        </motion.div>
      </Box>

      <style>
        {`
          @keyframes gradientShift {

            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }

          }
        `}
      </style>
    </>
  );
};

export default AuthLayout;