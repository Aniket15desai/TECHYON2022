import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import "../styles/eventList.css";
import { eventList } from "../utils/utils";

const categoryList = ["ALL", "NATIONAL", "MECH", "COMP", "IT", "ETC"];

function EventList() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ mb: 3 }} className="events" id="events">
        <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
          <hr className="w-15" />
          <div className="fs-24 w-25 text-center">EVENTS</div>
          <hr className="w-15" />
        </div>
        <Box className="event-container container">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 3,
            }}
            className="event-controller container"
          >
            {categoryList.map((category, index) => {
              return (
                <Box
                  sx={{
                    px: { xs: 2 },
                    py: { xs: 1 },
                    my: { xs: 1 },
                    mx: { xs: 1 },
                  }}
                  className={`event-pill ${
                    selectedCategory === category ? "active-pill" : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
            className="event-cards"
          >
            {selectedCategory === "ALL"
              ? eventList.map((event, index) => {
                  return (
                    <Box
                      sx={{
                        p: 2,
                        maxWidth: { xs: "100%", sm: "22rem" },
                        fontSize: { xs: 10, md: 20 },
                        display: { xs: "block"},
                        alignItems: "center",
                        flexDirection: "row",
                        gap: { xs: 2, md: 0 }
                      }}
                      className="card"
                      key={index}
                      onClick={() => navigate(`/event/${event.id}`)}
                    >
                      <Box
                        sx={{ maxWidth: { xs: "100%", sm: "100%" } }}
                        className="thumbnail-container"
                      >
                        <img
                          src={event.image}
                          alt=""
                          className="event-thumbnail"
                        />
                      </Box>
                      <Box >
                        <h3 className="event-title">{event.eventName}</h3>
                        <p className="department-name">{event.department}</p>
                      </Box>
                    </Box>
                  );
                })
              : eventList
                  .filter((event) =>
                    event.categories.includes(selectedCategory)
                  )
                  .map((event, index) => {
                    return (
                      <Box
                      sx={{
                        p: 2,
                        maxWidth: { xs: "100%", md: "22rem" },
                        fontSize: { xs: 10, md: 20 },
                        display: { xs: "block"},
                        alignItems: "center",
                        flexDirection: "row",
                        gap: { xs: 2, md: 0 }
                      }}
                      className="card"
                      key={index}
                      onClick={() => navigate(`/event/${event.id}`)}
                    >
                      <Box
                        sx={{ maxWidth: { xs: "100%", sm: "100%" } }}
                        className="thumbnail-container"
                      >
                        <img
                          src={event.image}
                          alt=""
                          className="event-thumbnail"
                        />
                      </Box>
                      <Box >
                        <h3 className="event-title">{event.eventName}</h3>
                        <p className="department-name">{event.department}</p>
                      </Box>
                    </Box>
                    );
                  })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EventList;
