import { RectangleShape, Shape } from "../logos/CTA.logos";

export default function CTA() {
    return (
<<<<<<< HEAD
    <section>
=======
    <section className="mt-5">
>>>>>>> 99814d1 (404 not found)
      <div className="containers">
        <div className="bg-boxColor relative p-24 flex justify-between items-center">
          <Shape className='absolute left-0 top-0' />
          <div>
            <b className="text-secondaryColor font-medium leading-5 tracking-[3px]">NEWSLETTER</b>
            <h5 className="text-secondaryColor title mt-3.25">
                Subscribe our News Letter <br />
                to get Latest Updates.
            </h5>
          </div>

         <input className="bg-secondaryColor mt-4 p-[20px_262px_20px_29px] outline-0 placeholder:leading-6 placeholder:text-primaryColor placeholder:font-medium" type="email" placeholder="Paresh@Pixeto.com" />
         <RectangleShape className='absolute right-0' />
         </div>
     </div>
    </section>
    )
}