import { Box, Divider, Typography, styled } from "@mui/material";
import portraid from "../Components/portraid.jpg"

const Img = styled("img")({
  width: 150,
  borderRadius: 100,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Img
          src={portraid}
          alt="random"
        />
        <Box textAlign="end" sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="h1">
            Guido Toritto
          </Typography>
          <Typography variant="h7">Frontend Developer</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Buenos Aires, Argentina GMT -3
          </Typography>
        </Box>
      </Box>
      <Box>
        <br />
        <Divider />
        <Typography>
          <p>
            I am a Frontend Developer with 2 years of experience in this role.
            With knowledge in UX/UI Design (Figma Prototyping), HTML/CSS, React,
            Javascript, Bootstrap/Tailwind/Bulma, SASS and GIT-GITHUB.
            Passionate about creating engaging and functional web experiences, I
            collaborated on web development projects and gained skills in user
            interface design and implementation, I have worked with various
            projects as a freelancer.
          </p>
        </Typography>
      </Box>
    </>
  );
};
