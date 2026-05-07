import office from "/src/assets/img/office.png";

export default function BlogInner() {
    return (
        <section className="mb-24">
            <div className="containers ">
                <div className="relative">
                <img src={office} alt="office" className="h-auto" />
                    <svg className="absolute -bottom-4 right-0" width="346" height="17" viewBox="0 0 346 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="346" y="17" width="346" height="17" transform="rotate(180 346 17)" fill="#444CFC"/>
                        <rect x="296" y="17" width="296" height="17" transform="rotate(180 296 17)" fill="#FFA155"/>
                        <rect x="296.164" y="16.9739" width="214.544" height="16.9735" transform="rotate(180 296.164 16.9739)" fill="#FFD3AF"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}