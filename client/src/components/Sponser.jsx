import Box from "@mui/material/Box";
import { sponserList } from "../utils/utils";
import "../styles/sponser.css";

function Sponser() {
  return (
    <div className="sponser-section">
      <Box className="sponsers">
      <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    EVENT ASSOCIATES
                </div>
                <hr className='w-15' />
            </div>
        <Box
          sx={{
            display: "flex",
            maxWidth: { xs: "95%", sm: "90%" },
            mx: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1vw"
          }}
          className="sponser-container"
        >
          {sponserList.map(({ name, image, link }, id) => {
            return (
              <Box
                sx={{ maxWidth: { sx: "4rem", md: "7rem" }, p: 1,  borderRadius: "5px"}}
                className="sponser-item"
                key={id}
              >
                <a href={link}><img className="sponser-img" src={image} alt={name} /></a>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default Sponser;
