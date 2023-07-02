
interface Props {
    isMobile?: boolean
    title?: string
}
export const DescriptionHero = ({ title, isMobile }: Props) => {
    return (
        <>
            {
                title && isMobile ? (
                    <h1 className="text-3xl text-center lg:text-start sm:text-5xl lg:text-7xl text-[#141414] font-bold mt-4 lg:mt-20">
                        {title}
                    </h1>
                ) :
                    (
                        <h1 className="text-3xl text-center lg:text-start sm:text-5xl lg:text-7xl text-[#141414] font-bold mt-4 md:mt-20">
                            Make <br />
                            remote work
                        </h1>

                    )
            }

            {/* Description */}
            <div className="flex flex-col w-[100%] lg:w-[70%] mt-6 lg:mt-10 space-y-6 lg:space-y-10">
                <p className="text-[#8a8a8a] text-center lg:text-start text-ellipsis">
                    Get your team in sync, no matter your location.
                    Streamline processes. create team rituals. and
                    watch productivity soar.
                </p>

                <div className="flex items-center justify-center lg:justify-start">
                    <button className="bg-[#141414] text-white font-medium py-3 px-6 rounded-xl hover:bg-[#fafafa] hover:text-[#141414] hover:border-2 hover:border-black hover:font-semibold hover:transition-all hover:delay-75">
                        Learn more
                    </button>
                </div>
            </div>
        </>
    )
}
