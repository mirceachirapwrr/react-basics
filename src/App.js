import { useState } from "react";
import reactLogo from "./assets/react.png";
import viteLogo from "./assets/vite.svg";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("members");

  const selectMember = (id) => {
    window.location.href = "member/" + id;
  };

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>

      <button onClick={() => setCount((state) => state + 1)}>
        Click to add 1 to: {count}
      </button>

      <p className="read-the-docs">
        Click the button to increse the counter value
      </p>

      {/* <MembersList members={members} action={selectMember} />; */}
    </div>
  );
}

export default App;
