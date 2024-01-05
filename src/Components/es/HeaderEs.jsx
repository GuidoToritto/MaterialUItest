import { Box, Divider, Typography, styled } from "@mui/material";
import Portraid from "../img/portraid.jpg"

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
          src={Portraid}

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
          Soy Desarrollador Frontend con 2 años de experiencia en el puesto.
            Con conocimientos en Diseño UX/UI (Figma Prototyping), HTML/CSS, React,
            Javascript, Bootstrap/Tailwind/Bulma, SASS y GIT-GITHUB.
            Apasionado por la creación de experiencias web atractivas y funcionales, he
            colaboré en proyectos de desarrollo web y adquirí habilidades en diseño e
            diseño de interfaz de usuario y la aplicación, he trabajado con varios
            proyectos como freelancer.
          </p>
        </Typography>
      </Box>
    </>
  );
};
