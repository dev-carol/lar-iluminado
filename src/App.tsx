import { Routes, Route, } from "react-router-dom";
import MainLayout from "./utils/layout";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        </Route>
      </Routes>
  );
}