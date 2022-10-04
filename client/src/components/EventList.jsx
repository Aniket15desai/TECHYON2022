import Box from "@mui/material/Box";

function EventList() {
    return (
        < >
           <Box className="events">
           <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    Events
                </div>
                <hr className='w-15' />
            </div>
            <Box className="event-container container">
                EventList
            </Box>
            </Box> 
        </>
    )
}

export default EventList
