import Box from "@mui/material/Box";
import { sponserList } from "../utils/utils";
import "../styles/sponser.css";

function Sponser() {
  return (
    <>
      <Box className="sponsers">
      <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    SPONSERS
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
          {sponserList.map(({ name, image }, id) => {
            return (
              <Box
                sx={{ maxWidth: { sx: "10%", md: "20%" }, p: 1, background: "white", borderRadius: "5px"}}
                className="sponser-item"
                key={id}
              >
                <img className="sponser-img" src={image} alt={name} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Sponser;
