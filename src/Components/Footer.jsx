import { EmailOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <br />
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contact Us
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Email: guidotoritto@outlook.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            (+54) 1134046008
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Follow Us
          </Typography>
          <Link href="https://www.linkedin.com/in/guido-toritto" color="inherit">
            <LinkedIn />
          </Link>
          <Link
            href="https://github.com/GuidoToritto"
            color="inherit"
            sx={{ pl: 1, pr: 1 }}
          >
            <GitHub />
          </Link>
          <Link href="mailto:guidotoritto@outlook.com" color="inherit">
            <EmailOutlined />
          </Link>
        </Box>
      </Container>
    </>
  );
}
