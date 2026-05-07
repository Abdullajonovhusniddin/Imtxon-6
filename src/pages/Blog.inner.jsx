import Footer from "../Components/footer/Footer";
import Header from '../Components/headers/Header.blog.inner';
import Section from "../Components/section/Blog.inner.section";
import CTA from "../Components/section/CTA.section";
import BlogInfo from "../Components/section/BlogInfo.inner.jsx"

export default function BlogInner() {
    return (
        <>  
            <Header />
            <Section />
            <BlogInfo />
            <CTA />
            <Footer />
        </>
    )
}