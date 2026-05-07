import Navbar from "../navbar/Navbar";
import HomeMadeShape from '../logos/Home.made.shapes';

export default function Privacy() {
    return (
        <header>
            <Navbar />
            <div className="container py-21 pr-12.75 m-auto pl-68">
                <div className="flex justify-between">
                    <HomeMadeShape className="h-6 w-6 bg-pureColor" />
                    <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 -8.74228e-07L48 0L48 52L28 52L28 -8.74228e-07Z" fill="white" fill-opacity="0.19"/>
                        <path d="M0 -6.11959e-07L14 0L14 14L-6.11959e-07 14L0 -6.11959e-07Z" fill="#8389FF"/>
                        <path d="M14 -1.48619e-06L48 0L48 34L14 34L14 -1.48619e-06Z" fill="#FFA155"/>
                        <path d="M28 14L48 14L48 34L28 34L28 14Z" fill="#FFD3AF"/>
                    </svg>
                </div>

                <div>
                    <h1 className="main-header text-primaryColor">Privacy Policy</h1>
                    <p className="paragraph text-paragColor">Last Updated  on 27th January 2021</p>
                </div>
            </div>
        </header>
    )
}