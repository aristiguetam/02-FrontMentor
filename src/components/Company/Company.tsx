import Image from "next/image"

export const Company = () => {
    return (
        <div className="flex items-center justify-center lg:justify-start gap-6 mt-12 lg:mt-20 ">
            <Image src={"/images/client-databiz.svg"} alt={"databiz"} width={0} height={0} sizes="100vw" className=" w-auto h-[16px] lg:w-auto lg:h-auto sm:h-[35px]" />
            <Image src={"/images/client-audiophile.svg"} alt={"audiophile"} width={0} height={0} sizes="100vw" className=" w-auto h-[25px] lg:w-auto lg:h-auto sm:h-[35px]" />
            <Image src={"/images/client-meet.svg"} alt={"meet"} width={0} height={0} sizes="100vw" className=" w-auto h-[16px] sm:h-[35px] lg:w-auto lg:h-auto " />
            <Image src={"/images/client-maker.svg"} alt={"maker"} width={0} height={0} sizes="100vw" className=" w-auto h-[16px] lg:w-auto lg:h-auto sm:h-[35px]" />
        </div>
    )
}
