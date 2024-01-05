import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

export default function Main() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography variant="h5" py="10px">
        Experiencia
      </Typography>

      <Box>
        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Empresa de construcción Casedif <br /> Feb-2022/Oct-2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Trabajé en la empresa de construcción Casedif como desarrollador
              web, colaborando estrechamente con diseñadores gráficos y
              profesionales especializados en el campo del comercio electrónico
              y los sistemas de venta a domicilio. Esta experiencia no sólo fue
              sorprendente y enriquecedora, sino que también fundamental para
              aumentar mi confianza a la hora de interactuar con los clientes.
              Aprendí a tranquilizarlos, dándoles la la certeza de que
              recibirían un resultado asombroso.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Grupo GNV <br /> Oct-2022/May-2023
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              He desarrollado importantes habilidades Frontend, adquiriendo
              competencia en el manejo de formularios, la integración de
              servicios así como la implementación de medidas de seguridad para
              rutas y caminos dinámicos. Estos conocimientos se han
              perfeccionado para adaptarse de forma óptima a los diferentes
              tamaños de pantalla. Además, mis Además, mi capacidad creativa ha
              crecido considerablemente usuario, aportando innovación y estética
              a la experiencia usuario. También he mejorado la usabilidad
              general, buscando constantemente de optimizar la interacción del
              usuario con la aplicación. aplicación.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Freelance <br /> May-2023/Ahora
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Durante un extenso periodo, he venido cultivando mi carrera como
              profesional autónomo, realizando importantes proyectos para varias
              empresas, entre ellas constructoras, artistas artistas plásticos y
              DJ musicales. Además, he colaborado en la creación de tablas para
              bases de datos de empresas de diversos sectores, destacando, por
              ejemplo, mi aportación a Dunlop.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <br />
      <Typography variant="h5" py="10px">
        Portfolio
      </Typography>

      <Box>
        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Desire-Bar
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Desarrollé este proyecto usando React y consumiendo APIs de The
              Cocktail DB. Simulé el feed de una página de cócteles en
              Instagram, con un diseño apasionado y cosmopolita. Al hacer clic
              en cada bebida, puedes visualizar los ingredientes en detalle.
            </Typography>
            <br />
            <Button href="https://be-my-desire-project.vercel.app/">
              Demo
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              UrBand
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I created two projects with HTML and Tailwind, simulating landing
              pages. One with a vibrant and punk design, highlighting raw
              colors, and the other with a more subtle and playful approach.
            </Typography>
            <br />
            <Button href="https://your-band.vercel.app/">Demo version01</Button>
            <Button href="https://your-band02-5ku2.vercel.app/">
              Demo version02
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              3D-Art by Littlebbull
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Soy un apasionado del diseño 3D, desarrollé un sitio web con
              React.js y estilo CSS para mostrar mis obras de arte y diseños en
              el tridimensional.
            </Typography>
            <br />
            <Button href="https://website2023-roan.vercel.app/home">
              Demo
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Anita B Queen Page
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Colaboré con DJ Anita B Queen para crear un sitio web sencillo que
              informa sobre su gira, así como tener una función de inicio de
              sesión para la compra de mercancía. Implementado con HTML, CSS y
              JavaScript.
            </Typography>
            <br />
            <Button href="https://anita-portfolio.vercel.app/">Demo</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Weather Project
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Realicé dos proyectos usando React y diferentes tecnologías como
              Material-UI y CSS. Ambos consumen varias APIs para proporcionar
              información meteorológica en tiempo real. Introduciendo el nombre
              de la ciudad en el campo de entrada, puedes obtener datos
              meteorológicos actualizados.
            </Typography>
            <br />
            <Button href="https://weather-project-smoky.vercel.app/">
              Demo
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ transition: " color 1s" }}
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Fastershoe
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mi primer proyecto en React, Fastershoe es una sencilla página que
              ofrece un catálogo de zapatillas para comprar, con la posibilidad
              de seleccionar la talla deseada.
            </Typography>
            <br />
            <Button href="https://entrega-final-react-guido-toritto-hqg8.vercel.app">
              Demo
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>

      <br />

      <div>
        <Typography variant="h5" textAlign="start" py="10px">
          Habilidades
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Lenguajes de programación:</span>{" "}
          Avanzado: CSS/Bootstrap/Tailwind/Bulma.
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Framework:</span> React.Js
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Herramientas:</span> Git, Adobe
          Photoshop, Adobe Illustrator, Figma.
        </Typography>
      </div>
      <div>
        <Typography variant="h5" textAlign="start" py="10px">
          Educación
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>
           Universidad de Arte de Argentina
          </span>{" "}
          Buenos Aires, Argentina. Artes plásticas
        </Typography>
      </div>
      <div>
        <Typography variant="h5" textAlign="start" py="10px">
          Certificaciones
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Frontend Developer -</span>{" "}
          Coderhouse 2022
        </Typography>
      </div>
    </>
  );
}
