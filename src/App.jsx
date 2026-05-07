import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import Carrer from "./pages/Carrer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Template from "./pages/tp";
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
}