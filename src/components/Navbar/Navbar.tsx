'use client';

import { useContext } from "react"
import Image from "next/image"
import { UIContext } from "@/context"

export const Navbar = () => {

    const {
        companyList,
        toggleCompanyList,
        toggleFeaturesList,
        toggleSideMenu,
        featuresList
    } = useContext(UIContext);

    return (
        <nav className="container mx-auto flex items-center mt-10 px-5 md:px-0">

            <div className="flex gap-16">
                <Image
                    src={'/images/logo.svg'}
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-[30px] object-cover object-center" />

                <div className=" hidden md:flex gap-8 items-center">

                    <div className="flex items-center gap-2 cursor-pointer" onClick={toggleFeaturesList}>
                        <h3 className="text-[#8a8a8a] hover:text-black" >Features</h3>
                        {
                            featuresList ?
                                <Image src={'/images/icon-arrow-up.svg'} alt="Arrow" priority width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                                : <Image src={'/images/icon-arrow-down.svg'} alt="Arrow" priority width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                        }

                    </div>

                    <div className="flex items-center gap-2 cursor-pointer" onClick={toggleCompanyList}>
                        <h3 className="text-[#8a8a8a] hover:text-black">Company</h3>
                        {
                            companyList ?
                                <Image src={'/images/icon-arrow-up.svg'} alt="Arrow" priority width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                                : <Image src={'/images/icon-arrow-down.svg'} alt="Arrow" priority width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                        }

                    </div>

                    <h3 className="text-[#8a8a8a] cursor-pointer hover:text-black">Careers</h3>
                    <h3 className="text-[#8a8a8a] cursor-pointer hover:text-black">About</h3>
                </div>
            </div>

            <div className="flex-1" />

            <div className="hidden md:flex gap-8 items-center">
                <button className="cursor-pointer text-[#8a8a8a] hover:text-black">
                    Login
                </button>

                <button className="cursor-pointer border-2 border-[#8a8a8a] hover:border-black rounded-2xl py-2 px-6 text-[#8a8a8a] hover:text-black">
                    Register
                </button>
            </div>

            <div className="flex md:hidden " onClick={toggleSideMenu}>
                <Image src={'/images/icon-menu.svg'} alt="Hamburger" width={0} height={0} sizes="100vw" className="w-auto h-auto object-cover object-center"  />
            </div>
        </nav>
    )
}
