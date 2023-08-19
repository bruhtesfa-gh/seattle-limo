import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import About from "../components/about/about";
import Blog from "../components/blog/blog";
import Contact from "../components/contact/contact";
import NotFound from "../components/Error/not-found";
import BlogDetail from "../components/blogdetail/blog-detail";
import Fleets from "../components/fleets/fleets";
import Services from "../components/services/services";
import Service from "../components/service/service";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleets" element={<Fleets />} />
      <Route path="/fleets/:slug" element={<Fleets />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<Service />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
