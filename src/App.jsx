import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import Layout from "./layout/Layout";
import Main from "./layout/Main";
import NotFound from "./layout/NotFound";
import ProtectedRoutes from "./layout/ProtectedRoutes";
import PublicRoutes from "./layout/PublicRoutes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Main />}>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
          </Route>
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
