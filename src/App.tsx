import { Routes, Route } from "react-router-dom";
import MainLayout from "./utils/layout";
import DonatePet from "./banners/donatePet";
import MakeFriend from "./banners/makeFriend";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="/donate-pet" element={<DonatePet />}></Route>
      <Route path="/make-friend" element={<MakeFriend />}></Route>
    </Routes>
  );
}
