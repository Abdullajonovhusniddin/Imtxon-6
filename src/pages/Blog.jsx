import Header from "../Components/headers/Header.blog";
import All from "../Components/section/All.section";
import CTA from "../Components/section/CTA.section";
import Recent from "../Components/section/Recent.section";
import Footer from '../Components/footer/Footer';

export default function Blog() {
    return (
        <>
            <Header />
            <Recent />
            <All />
            <CTA />
            <Footer />
        </>
    )
}