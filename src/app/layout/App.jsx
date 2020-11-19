import React from "react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
