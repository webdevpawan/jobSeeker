import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateJob from "./components/CreateJob";
import UpdateJob from "./components/UpdateJob";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<CreateJob />} />
        <Route path="/update" element={<UpdateJob />} />
      </Routes>
    </Router>
  );
}

export default App;
