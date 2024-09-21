import "./App.css";
import InboxM from "./components/InboxM";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-F7F8FD">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <InboxM />
      </div>
    </div>
  );
}

export default App;
