'use client';
import { useContext } from "react"
import Image from "next/image"
import { UIContext } from "@/context";
import { FeaturesCard } from "../FeaturesCard/FeaturesCard";
import { CompanyCard } from "../CompanyCard/CompanyCard";

export const SideMenu = () => {

    const {
        sideMenu,
        featuresList,
        companyList,
        toggleSideMenu,
        toggleFeaturesList,
        toggleCompanyList,
    } = useContext(UIContext);

    return (
        <>
            {
                sideMenu ? (
                    <>
                        <div className="fadeIn flex fixed w-screen h-screen z-[9999] top-0">
                            <div className="w-[40%] h-screen bg-black/70" />

                            <div className="flex flex-col w-[60%] h-screen bg-white p-5">

                                <div className="flex">
                                    <div className="flex-1" />
                                    <Image src={"/images/icon-close-menu.svg"} alt={"close"} width={28} height={28} onClick={toggleSideMenu} />
                                </div>

                                <div className="flex flex-col mt-10 space-y-4">

                                    <div className="flex items-center gap-4 cursor-pointer" onClick={toggleFeaturesList}>
                                        <h3 className="text-[#8a8a8a]">Features</h3>
                                        {
                                            featuresList
                                                ? <Image src={"/images/icon-arrow-up.svg"} alt={"arrow"}  width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                                                : <Image src={"/images/icon-arrow-down.svg"} alt={"arrow"}  width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                                        }

                                    </div>
                                    {
                                        featuresList
                                        &&
                                        (
                                            <div className="fadeIn flex justify-center">
                                                <FeaturesCard style="shadow-none space-y-3" />
                                            </div>
                                        )
                                    }
                                    <div className="flex items-center gap-4" onClick={toggleCompanyList}>
                                        <h3 className="text-[#8a8a8a]">Company</h3>
                                        {
                                            companyList
                                                ? <Image src={"/images/icon-arrow-up.svg"} alt={"arrow"}  width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                                                : <Image src={"/images/icon-arrow-down.svg"} alt={"arrow"}  width={0} height={0} sizes="100vw" className="object-cover object-center h-auto w-auto" />
                                        }

                                    </div>

                                    {
                                        companyList
                                        &&
                                        (
                                            <div className="fadeIn flex justify-center">
                                                <CompanyCard style="shadow-none space-y-3" />
                                            </div>
                                        )
                                    }

                                    <h3 className="text-[#8a8a8a]">Careers</h3>
                                    <h3 className="text-[#8a8a8a]">About</h3>
                                </div>

                                <div className="flex flex-col mt-10 space-y-4">
                                    <button className="text-[#8a8a8a]">
                                        Login
                                    </button>
                                    <button className="border-2 border-[#8a8a8a] px-5 py-2 rounded-xl text-[#8a8a8a]">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null
            }

        </>
    )
}
