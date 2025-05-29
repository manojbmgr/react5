import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";
const FormPage = lazy(() => import("./pages/FormPage"));
const About = lazy(() => import("./pages/About"));
function App() {
  return (
    <Router>
      <AppNavbar />
      <Suspense fallback={<h2 className="text-center mt-5">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
