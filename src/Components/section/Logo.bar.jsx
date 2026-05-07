import {IpsumLogo1 , IpsumLogo2 , IpsumLogo3 , IpsumLogo4 , IpsumLogo5} from '../logos/Logo.ipsum';

export default function LogoBar() {
    const logos = [ <IpsumLogo1 /> , <IpsumLogo2 /> , <IpsumLogo3 /> , <IpsumLogo4 /> , <IpsumLogo5 /> ];
    return (
        <div className="bg-logoBarColor mt-24 flex p-[0_107px_0_112px] justify-between">
            { logos.map(
                logo => logo
            ) }
        </div>
    )
}