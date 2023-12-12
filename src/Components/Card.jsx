import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Product() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
      }}
    >
      <Img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq70AvDs-OIZrlcU0kAqvObihT8VhvedCurSyXCDCakQ&s"
        alt="random"
      />
      <Box sx={{ flexGrow: 1 }} lineHeight={1}>
        <h4>Product Name</h4>
       
        <Button variant="contained">Add card</Button>
      </Box>
      <Box component="p" sx={{ mr: 1 }}>
        
        <p>$19.99</p>
      </Box>
    </Paper>
  );
}
