import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./layout/Main";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
