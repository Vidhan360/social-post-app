import { Card } from "@mui/material";

const GlassCard = ({ children }) => {
  return (
    <Card
      sx={{
        background:
          "rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(20px)",

        border:
          "1px solid rgba(255,255,255,0.12)",

        boxShadow:
          "0 20px 60px rgba(0,0,0,0.4)",

        borderRadius: 6,
      }}
    >
      {children}
    </Card>
  );
};

export default GlassCard;