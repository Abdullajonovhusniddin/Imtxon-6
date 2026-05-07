import stuff1 from "/src/assets/img/stuff1.png";
import stuff2 from "/src/assets/img/stuff2.png";
import stuff3 from "/src/assets/img/stuff3.png";
import stuff4 from "/src/assets/img/stuff4.png";
import stuff5 from "/src/assets/img/stuff5.png";
import stuff6 from "/src/assets/img/stuff6.png";
import logo from "/src/assets/svg/logo.svg";

export default function All() {
    const stuffs = [stuff1 , stuff2 , stuff3 , stuff4 , stuff5 , stuff6];
    
    return (
        <section className="bg-allSectionColor py-24 my-24">
            <div className="containers">
                <h1 className="main-header text-primaryColor">All posts</h1>
                    <div className="grid grid-cols-3 gap-8">     
                        {stuffs.map(
                            stuff => 
                            <div>
                            <img src={stuff} alt="stuff1" />
                            <div className="bg-secondaryColor p-8">
                                <h3>
                                    We aim to attain the greatest satisfaction for our clients 
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                  <div className="flex gap-3 items-center mt-8.5">
                                <img src={logo} alt="" />
                                <span>
                                    <p className="font-normal leading-6 text-primaryColor">Andre Johnson</p>
                                    <p className="font-medium leading-5 text-[14px]">Jan 19, 2021</p>
                                </span>
                            </div>
                            </div>
                        </div>
                        )}
                    </div>
            </div>
        </section>
    )
}