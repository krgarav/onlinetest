import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Question from "./Pages/Questions/Question";
import Instruction from "./Pages/Instruction/Instruction";
import Result from "./Pages/Result/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/questions" element={<Question />} />
      <Route path="/instruction" element={<Instruction />} />
      <Route path="/result" element={<Result/>}/>
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;
