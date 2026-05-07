import logo from '/src/assets/svg/logo.svg';
import office1 from '/src/assets/img/office1.png';
import office2 from '/src/assets/img/office2.png';
import office3 from '/src/assets/img/office3.png';
import office4 from '/src/assets/img/office4.png';

export default function Recent() {
    const images = [ office1 , office2 , office3 , office4 ];
    
    return (
        <section>
            <div className="containers">
                <h2 className="main-header">Read Recent Post</h2>
                <div className="grid grid-cols-2 gap-8">
                     {images.map(
                        img => 
                        <div className="flex">
                        <img src={img} alt="" />
                        <div className='bg-blockItemsColor py-8 pl-8 pr-7'>
                            <h3 className="font-semibold leading-9 text-2xl text-primaryColor">
                                Today’s best design  <br /> trends for digital <br /> products
                            </h3>

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