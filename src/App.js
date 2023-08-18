import LandingPage from "./LandingPage";
import { ResumePage, AmhNlpPage } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="bg-light-1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="amh-nlp" element={<AmhNlpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
