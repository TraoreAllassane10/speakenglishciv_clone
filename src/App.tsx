import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Coaching from "./pages/Coaching";
import Traduction from "./pages/Traduction";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/traduction" element={<Traduction />} />
        <Route path="/test-niveau" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
