export default function Apply() {
    return (
        <section>
            <div className="containers">
                <h1 className="title">Apply Now</h1>

                <form className="flex flex-col gap-8 mt-7.25">
                    <div className="grid grid-cols-2 gap-8">
                        <input className="py-8.5 pl-10 outline-0 bg-blockItemsColor font-medium leading-7 placeholder:font-medium placeholder:leading-7 placeholder:text-primaryColor" type="text" placeholder="First Name" />
                        <input className="py-8.5 pl-10 outline-0 bg-blockItemsColor font-medium leading-7 placeholder:font-medium placeholder:leading-7 placeholder:text-primaryColor" type="text" placeholder="Last Name" />
                        <input className="py-8.5 pl-10 outline-0 bg-blockItemsColor font-medium leading-7 placeholder:font-medium placeholder:leading-7 placeholder:text-primaryColor" type="text" placeholder="Email Id" />
                        <input className="py-8.5 pl-10 outline-0 bg-blockItemsColor font-medium leading-7 placeholder:font-medium placeholder:leading-7 placeholder:text-primaryColor" type="tel" placeholder="Mobile No" />
                    </div>
                    <textarea rows={5} className="resize-none w-full outline-0 pt-9.75 pl-10 bg-blockItemsColor placeholder:text-primaryColor" placeholder="Why do you thing you are good fit for Ether?"></textarea>
                </form>
            </div>
        </section>
    )
}