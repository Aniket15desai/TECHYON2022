import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Sponser from "../components/Sponser";
import EventList from "../components/EventList";

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <Timeline />
      <Sponser />
      <EventList />
    </div>
  );
}

export default Home;
