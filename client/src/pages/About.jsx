import React from "react";
// import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import "../styles/about.css";
import { developerList, designerList } from "../utils/utils";

function About() {
  return (
    <div className="d-flex row justify-content-center position-relative mt-5 py-5 background-pattern">
      {/* team info and FAQ will go here */}
      <div className="ellipse w-100">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-4">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">TEAM</div>
          <hr className="w-15" />
        </div>
      </div>
      <div className="position-relative text-center w-100">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">Developer</div>
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
        }}
        className="container coordinator-cards"
      >
        {developerList.map((coordinator, index) => {
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "1rem",
                  }}
                  className="btn-wa"
                >
                  <img
                    src="/assets/images/socials/whatsapp.png"
                    alt="whatsapp"
                    className="wa-icon"
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <div className="position-relative text-center w-100">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">Designer</div>
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
        }}
        className="container coordinator-cards"
      >
        {designerList.map((coordinator, index) => {
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "1rem",
                  }}
                  className="btn-wa"
                >
                  <img
                    src="/assets/images/socials/whatsapp.png"
                    alt="whatsapp"
                    className="wa-icon"
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* <div className="position-relative text-center w-100">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">Co-ordinator</div>
          <hr className="w-15" />
        </div>
      </div> */}
    </div>
  );
}

export default About;
