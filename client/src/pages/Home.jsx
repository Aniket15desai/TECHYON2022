import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Sponser from "../components/Sponser";
import EventList from "../components/EventList";
import CoordinatorList from "../components/CoordinatorList"


function Home() {
  return (
    <div className="homepage">
      <Hero />
      <Timeline />
      <Sponser />
      <EventList />
      <CoordinatorList />
    </div>
  );
}

export default Home;
