import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <Typography>
              I worked at the construction company Casedif as a web developer,
              working closely with graphic designers and professionals
              specialized in the field of e-commerce and home selling systems.
              This experience was not only surprising and enriching, but also
              played a fundamental role in boosting my confidence in interacting
              with clients. I learned how to reassure them, giving them the
              certainty that they would receive an amazing result.
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
              GNV Group <br /> Oct-2022/May-2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              have developed significant Frontend skills, acquiring proficiency
              in forms handling, service integration, advanced JavaScript
              functions, as well as the implementation of security measures for
              dynamic routes and paths. These skills have been honed to
              optimally adapt to different screen sizes. In addition, my
              creative skills have grown significantly in designing user
              interfaces, bringing innovation and aesthetics to the user
              experience. I have also improved the overall usability, constantly
              looking for ways to optimize the user interaction with the
              application.
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
          </AccordionDetails>
        </Accordion>
      

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
          Coderhouse 2021
        </Typography>
      </div>
    </>
  );
}
