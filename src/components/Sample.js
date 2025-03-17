import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WaterDropIcon from "@mui/icons-material/Opacity";
import WarningIcon from "@mui/icons-material/Warning";

const Sample = () => {
  return (
    <Box sx={{ maxWidth: "sm", mx: "auto", height: "100vh", bgcolor: "background.default", p: 2, borderRadius: "12px" }}>
      {/* Header */}
      <Box sx={{ bgcolor: "primary.main", p: 1, display: "flex", alignItems: "center" }}>
        <Typography variant="h6" color="primary.contrastText">BOOK WG ALL → 35/103</Typography>
      </Box>

      {/* Address Info */}
      <Box sx={{ bgcolor: "background.paper", p: 2, my: 1 }}>
        <Typography variant="h5" fontWeight="bold">NORDIC BREW CO.</Typography>
        <Typography variant="subtitle1">WESSELS GATE 181</Typography>

      </Box>

      {/* Meter Info */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 1, bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight="bold">344405</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <WaterDropIcon color="primary" fontSize="large" />
          <InfoIcon fontSize="large" />
          <ChatBubbleIcon fontSize="large" />
        </Box>
      </Box>

      {/* Warning & Input Box */}
      <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
        <WarningIcon color="error" fontSize="large" />
        <Box sx={{ flex: 1, border: "1px solid", borderColor: "grey.400", height: 40, ml: 1 }} />
      </Box>

      {/* Keypad */}
      <Grid container spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "BK", 0, "ENT"].map((key) => (
          <Grid item xs={4} key={key}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ height: 60, fontSize: 18, fontWeight: "bold" }}
            >
              {key}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sample;