import {Shape} from "../logos/Footer.logos";

export default function Checkmark() {
    return (
        <section>
         <div className="containers">
            <div className="flex gap-6 mt-8">
                <div className="bg-[#454DFD] p-5 inline">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.06066" y1="5.06068" x2="8.06066" y2="12.0607" stroke="white" stroke-width="3"/>
                        <line x1="5.93934" y1="12.0607" x2="16.9393" y2="1.06068" stroke="white" stroke-width="3"/>
                    </svg>
                </div>

                <label className="paragraph text-paragColor translate-y-3">
                    I agree to accept the privacy policy,  We will add your contact details provided in this form to our system <br /> for contacting you regarding your request.
                </label>
            </div>
            <button className="bg-blockColors flex items-center gap-3.25 py-5 px-8 relative mt-15">
                      <p className=" leading-6 font-medium text-secondaryColor">Submit Application</p>
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7071 8.07112C21.0976 7.6806 21.0976 7.04743 20.7071 6.65691L14.3431 0.292946C13.9526 -0.0975785 13.3195 -0.0975785 12.9289 0.292946C12.5384 0.68347 12.5384 1.31664 12.9289 1.70716L18.5858 7.36401L12.9289 13.0209C12.5384 13.4114 12.5384 14.0446 12.9289 14.4351C13.3195 14.8256 13.9526 14.8256 14.3431 14.4351L20.7071 8.07112ZM0 8.36401L20 8.36401V6.36401L0 6.36401L0 8.36401Z" fill="white"/>
                        </svg>

                        <Shape className='absolute left-0 top-0' />
            </button>
        </div>
        </section>
    )
}