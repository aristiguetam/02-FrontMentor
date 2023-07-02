interface Props {
    style?: string;
}
export const CompanyCard = ({ style }: Props) => {
    return (
        <div className={`${style ? style : 'flex flex-col bg-[#ffffff] w-[130px] rounded-xl py-5 shadow-2xl items-center'} `}>

            <div className="flex flex-col space-y-3">
                <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer" >History</h3>

                <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer">Our Team</h3>

                <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer">Blog</h3>
            </div>

        </div>
    )
}
