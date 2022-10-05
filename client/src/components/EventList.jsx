import { useState } from "react";
import Box from "@mui/material/Box";
import "../styles/eventList.css";
import { eventList } from "../utils/utils";

const categoryList = ["ALL", "NATIONAL", "MECH", "COMP", "IT", "ETC"];

function EventList() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
  return (
    <>
      <Box sx={{mb: 3}} className="events" id="events">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">Events</div>
          <hr className="w-15" />
        </div>
        <Box className="event-container container">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 3
            }}
            className="event-controller container"
          >
            {categoryList.map((category, index) => {
              return (
                <Box
                  sx={{ px: { xs: 2 }, py: { xs: 1 }, my: { xs: 1}, mx: { xs: 1} }}
                  className={`event-pill ${selectedCategory == category ? 'active-pill': ''}`}
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Box>
              );
            })}
          </Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}} className="event-cards">
            {
              (selectedCategory == "ALL") ? (
                eventList.map((event, index) => {
                  return (
                    <Box sx={{p: 2}} className="card" key={index}>
                    <img src={event.image} alt="" className="event-thumbnail"/>
                    <h3 className="event-title">{event.event}</h3>
                    <p className="department-name">{event.department}</p>
                  </Box>
                  );
                })
              ) : (
                eventList.filter(event => event.categories.includes(selectedCategory)).map((event, index) => {
                  return (
                    <Box sx={{p: 2}} className="card" key={index}>
                    <img src={event.image} alt="" className="event-thumbnail"/>
                    <h3 className="event-title">{event.event}</h3>
                    <p className="department-name">{event.department}</p>
                  </Box>
                  );
                })
              )
            }
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EventList;
