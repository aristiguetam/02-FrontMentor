import Image from "next/image"

import { DescriptionHero } from "./DescriptionHero"
import { Company } from ".."

export const Hero = () => {
    return (
        <div className="container flex flex-col lg:flex-row mx-auto items-center px-4 lg:px-36 mt-4 lg:mt-12 mb-20 ">

            {/* Imagen - Hero - Mobile */}
            <div className="w-[100%] flex justify-center lg:hidden">
                <Image src={"/images/image-hero-mobile.png"} alt={"DesktopImage"} width={0} height={0} sizes="100vw" priority className="object-cover object-center w-full h-auto" />
            </div>

            {/* Description Hero */}
            <div className="hidden lg:flex lg:flex-col w-[100%] lg:w-[60%]">

                <DescriptionHero />

                <Company />
            </div>

            <div className="w-[100%] lg:hidden">

                <DescriptionHero title="Make remote work" isMobile />

                <Company />
            </div>

            {/* Imagen - Hero - Desktop */}
            <div className="hidden lg:flex lg:w-[40%]">
                <Image src={"/images/image-hero-desktop.png"} priority alt={"DesktopImage"} width={0} height={0} sizes="100vw" className="object-cover w-full h-full" />
            </div>
        </div>
    )
}
