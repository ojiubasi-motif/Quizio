// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/teacher/Dashboard";
import Sets from "./components/teacher/Sets";
import Progress from "./components/teacher/Progress";
import Members from "./components/teacher/Members";


function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />

        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Sets />} />
            <Route path="/members" element={<Members />} />
            <Route path="/progress" element={<Progress />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
