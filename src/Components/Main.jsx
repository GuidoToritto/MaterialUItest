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
        Experience
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
              Casedif Construction Company <br /> Feb-2022/Oct-2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              I worked at the construction company Casedif as a web developer,
              working closely with graphic designers and professionals
              specialized in the field of e-commerce and home selling systems.
              This experience was not only surprising and enriching, but also
              played a fundamental role in boosting my confidence in interacting
              with clients. I learned how to reassure them, giving them the
              certainty that they would receive an amazing result.
            </Typography > 
            <Typography style={{fontWeight: 'bold'}}>Scrips: JavaScript · HTML · CSS</Typography>
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
              GNV Group <br /> Oct-2022/May-2023
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I have developed significant Frontend skills, acquiring
              proficiency in forms handling, service integration, advanced
              JavaScript functions, as well as the implementation of security
              measures for dynamic routes and paths. These skills have been
              honed to optimally adapt to different screen sizes. In addition,
              my creative skills have grown significantly in designing user
              interfaces, bringing innovation and aesthetics to the user
              experience. I have also improved the overall usability, constantly
              looking for ways to optimize the user interaction with the
              application.
            </Typography>
            <Typography style={{fontWeight: 'bold'}}>
              Scripts: React.js · Git · GitHub · JavaScript · HTML · CSS
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
              Freelancer Work <br /> May-2023/Now
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              During an extensive period, I have been cultivating my career as a
              freelance professional, carrying out significant projects for
              several companies, including construction companies, plastic
              artists and musical DJ artists. In addition, I have collaborated
              in the creation of tables for databases for companies in various
              sectors, highlighting, for example, my contribution to Dunlop.
            </Typography>
            <Typography style={{fontWeight: 'bold'}}>
              Scripts: SolidWorks · Tailwind CSS · Material-UI · React.js · Git
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
              I developed this project using React and consuming APIs from The
              Cocktail DB. I simulated the feed of a cocktail page on Instagram,
              with a passionate and cosmopolitan design. By clicking on each
              drink, you can visualize the ingredients in detail.
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
              Passionate about 3D design, I developed a website with React.js
              and CSS styling to showcase my artwork and designs in the
              three-dimensional realm.
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
              I collaborated with DJ Anita B Queen to create a simple website
              that informs about her tour, as well as having a login function
              for merchandise purchase. Implemented with HTML, CSS and
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
              I realized two projects using React and different technologies
              such as Material-UI and CSS. Both consume several APIs to provide
              real-time weather information. By entering the city name in the
              input field, you can get updated weather data.
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
              My first project in React, Fastershoe is a simple page that offers
              a catalog of sneakers for purchase, with the ability to select the
              desired size.
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
          Skills
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Programming Languages:</span>{" "}
          Advanced: CSS/Bootstrap/Tailwind/Bulma.
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Framework tools:</span> React.Js
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Tools:</span> Git, Adobe
          Photoshop, Adobe Illustrator, Figma.
        </Typography>
      </div>
      <div>
        <Typography variant="h5" textAlign="start" py="10px">
          Education
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>
            Art University of Argentina -
          </span>{" "}
          Buenos Aires, Argentina. Plastic Arts
        </Typography>
      </div>
      <div>
        <Typography variant="h5" textAlign="start" py="10px">
          Certifications
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Frontend Developer -</span>{" "}
          Coderhouse 2022
        </Typography>
      </div>
    </>
  );
}
