import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Question from "./Pages/Questions/Question";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/questions" element={<Question />} />
    </Routes>
  );
}

export default App;
