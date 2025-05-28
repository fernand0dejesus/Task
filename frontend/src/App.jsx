import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Information from "./pages/Information";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NoProtect from "./pages/NoProtect";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/information" element={<Information />} />
          </Route>
          <Route path="/noprotect" element={<NoProtect/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;