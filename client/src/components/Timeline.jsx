import '../styles/timeline.css';

function Timeline() {
    return (
        <div className="position-relative">
            <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-24 w-25 text-center">
                    TIMELINE
                </div>
                <hr className='w-15' />
            </div>
            <div className="timeline w-100 d-flex row justify-content-center m-0 p-0 px-5">
                <div>
                    <div className="timeline-item">
                        <h4 className='fs-18'>Registrations open</h4>
                    </div>
                    <div className="timeline-item">
                        <h4 className='fs-18'>Registrations closed</h4>
                    </div>
                    <div className="timeline-item">
                        <h4 className='fs-18'>Techyon day 1</h4>
                    </div>
                    <div className="timeline-item">
                        <h4 className='fs-18'>Techyon day 2</h4>
                    </div>
                    <div className="timeline-item">
                        <h4 className='fs-18'>Techyon day 3</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
