<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
>>>>>>> 99814d1 (404 not found)
import Company from "./pages/Company";
import Carrer from "./pages/Carrer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Template from "./pages/tp";
<<<<<<< HEAD
import CarrerInner from  "./pages/Carerr.inner";
import PrivacyPolicy from "./pages/Privacy.policy";
import BlogInner from "./pages/Blog.inner";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Company />} />
                <Route path="/carrer_page" element = {<Carrer />} />
                <Route path="/blog_page" element = {<Blog /> } />
                <Route path="/blog_inner_page" element = {<BlogInner />} />
                <Route path="/contact_page" element = { <Contact /> } />
                <Route path="/template_page" element = {<Template />}/>
                <Route path="/carrer_inner_page" element = {<CarrerInner />}/>
                <Route path="/privacy_page" element = {<PrivacyPolicy />}/>
            </Routes>
        </BrowserRouter>
    )
=======
import CarrerInner from "./pages/Carerr.inner";
import PrivacyPolicy from "./pages/Privacy.policy";
import BlogInner from "./pages/Blog.inner";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Company />} />
                <Route path="/carrer_page" element={<Carrer />} />
                <Route path="/blog_page" element={<Blog />} />
                <Route path="/blog_inner_page" element={<BlogInner />} />
                <Route path="/contact_page" element={<Contact />} />
                <Route path="/template_page" element={<Template />} />
                <Route path="/carrer_inner_page" element={<CarrerInner />} />
                <Route path="/privacy_page" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    );
>>>>>>> 99814d1 (404 not found)
}