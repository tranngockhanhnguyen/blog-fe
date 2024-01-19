import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./layout/Layout";
import Main from "./layout/Main";
import ProtectedRoutes from "./layout/ProtectedRoutes";
import PublicRoutes from "./layout/PublicRoutes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Main />}>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Dashboard />} />
          </Route>
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
