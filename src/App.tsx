import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/list";
import Table from "@/pages/table";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route
        element={
          <ProtectedRoute>
            <Table />
          </ProtectedRoute>
        }
        path="/table"
      />
      <Route
        element={
          <ProtectedRoute>
            <PricingPage />
          </ProtectedRoute>
        }
        path="/list"
      />
    </Routes>
  );
}

export default App;
