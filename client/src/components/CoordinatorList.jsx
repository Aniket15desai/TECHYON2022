
import Box from "@mui/material/Box";
import { coordinatorList } from "../utils/utils";
import "../styles/coordinator.css";

function CoordinatorList() {
  return (
    <div className="coordinator-section">
      <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
        <hr className="w-15" />
        <div className="fs-24 w-25 text-center">Co-Ordinators</div>
        <hr className="w-15" />
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
        {coordinatorList.map((coordinator, index) => {
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
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", mt: "1rem"}} className="btn-wa">
                  <a
                    href={coordinator.wa} rel="noreferrer" target="_blank"
                  >
                  <img src="/assets/images/socials/whatsapp.png" alt="whatsapp" className="wa-icon"/></a>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default CoordinatorList;
