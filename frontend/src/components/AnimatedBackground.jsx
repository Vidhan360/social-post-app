import { Box } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "fixed",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "rgba(59,130,246,0.35)",
          filter: "blur(140px)",
          top: "-150px",
          left: "-150px",
          zIndex: -1,
        }}
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "rgba(139,92,246,0.35)",
          filter: "blur(150px)",
          bottom: "-180px",
          right: "-180px",
          zIndex: -1,
        }}
      />

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "fixed",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "rgba(236,72,153,0.25)",
          filter: "blur(120px)",
          top: "40%",
          left: "50%",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 0%, #020617 90%)",
          zIndex: -2,
        }}
      />
    </>
  );
};

export default AnimatedBackground;