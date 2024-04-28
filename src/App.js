import React, { useState } from "react";
import "./App.css";
import { DropdownMenu } from "./DropdownMenu";
import { TopBar, BottomBar } from "./NavBar";

function App() {
  const [selectedName, setSelectedName] = useState("");

  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
  };

  return (
    <div className="App">
      <section>
        <header>
          <TopBar />
        </header>
        <main>
          <img src="/images/calendar.png" alt="calendar" />
          <div className="main-container">
            <div className="main-header">
              <h2>Select Mentor</h2>
              <DropdownMenu
                selectedName={selectedName}
                handleSelectChange={handleSelectChange}
              />
            </div>
            <button>Create Appointment</button>
          </div>
        </main>
        <footer>
          <BottomBar />
        </footer>
      </section>
    </div>
  );
}

export default App;
