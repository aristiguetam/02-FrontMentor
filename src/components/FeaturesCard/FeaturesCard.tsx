import Image from "next/image"

interface Props {
    style?: string;
}
export const FeaturesCard = ({ style }: Props) => {

    return (

        <div
            className={` ${style ? style : ' bg-[#ffffff] w-[180px] rounded-xl space-y-3 py-5 px-8 shadow-2xl '}`}>

                <div className="flex items-center gap-3">
                    <Image src={"/images/icon-todo.svg"} alt={"todolist"} width={0} height={0} sizes="100vw" className="fadeIn object-cover object-center h-auto w-auto" priority />
                    <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer" >Todo List</h3>
                </div>

                <div className="flex items-center  gap-3 ">
                    <Image src={"/images/icon-calendar.svg"} alt={"calendar"} width={0} height={0} sizes="100vw" className="fadeIn object-cover object-center h-auto w-auto" priority />
                    <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer">Calendar</h3>
                </div>

                <div className="flex items-center gap-3">
                    <Image src={"/images/icon-reminders.svg"} alt={"Reminders"} width={0} height={0} sizes="100vw" className="fadeIn object-cover object-center h-auto w-auto" priority />
                    <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer">Reminders</h3>
                </div>

                <div className="flex items-center gap-3">
                    <Image src={"/images/icon-planning.svg"} alt={"planning"} width={0} height={0} sizes="100vw" className="fadeIn object-cover object-center h-auto w-auto" priority />
                    <h3 className="text-[#8a8a8a] hover:text-black font-light cursor-pointer">Planning</h3>
                </div>

        </div>
    )
}
