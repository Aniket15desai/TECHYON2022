import React from "react";
// import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import "../styles/about.css";
import { developerList, designerList, teamList} from "../utils/utils";

function About() {
  return (
    <div id="team" className="d-flex row justify-content-center position-relative py-5 container-fluid mx-auto">
      <div className="ellipse w-100">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-4">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">TEAM</div>
          <hr className="w-15" />
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          paddingBottom: "3rem",
          marginTop: "2rem"
        }}
        className="container coordinator-cards"
      >
        {teamList.map((coordinator, index) => {
          return (
            <Box
              sx={{
                p: 2,
                maxWidth: { xs: "100%", sm: "14rem" },
                display: { xs: "flex", sm: "block" },
                alignItems: "center",
                flexDirection: "row",
                gap: { xs: 2, md: 0 },
              }}
              className="coordinator-card"
              key={index}
            >
              <Box
                sx={{
                  maxWidth: { xs: "40%", sm: "100%" },
                  display: "flex",
                  alignItems: "center",
                  justify: "center",
                }}
                className="img-container"
              >
                <img src={coordinator.image} alt="" className="profile-img" />
              </Box>
              <Box sx={{ maxWidth: { xs: "60%", sm: "100%" } }}>
                <h3 className="coordinator-title">{coordinator.name}</h3>
                <p className="department-name">{coordinator.department}</p>
                <p className="coordinator-role">{coordinator.role}</p>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default About;
