import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { About_Us, Benefits, Blog, Home,Services } from "./pages";


export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services/>}/>
        <Route path="about-us" element={<About_Us/>}/>
        <Route path="/benefits" element={<Benefits/>}/>
        <Route path="blog" element={<Blog/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
