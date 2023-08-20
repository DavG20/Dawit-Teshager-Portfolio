import LandingPage from "./LandingPage";
import { ResumePage } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-light-1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
