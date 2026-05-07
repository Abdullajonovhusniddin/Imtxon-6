import Footer from "../Components/footer/Footer";
import Header from "../Components/headers/Header.company";
import CTA from "../Components/section/CTA.section";
import Expertise from "../Components/section/Expertise.section";
import Story from "../Components/section/Story.section";
import Team from "../Components/section/Team.section";
import Vision from "../Components/section/Vision.section";

export default function Company() {
    return (
        <>
            <Header />
            <Story />
            <Expertise />
            <Vision />
            <Team />
            <CTA />
            <Footer />
        </>
    )
}