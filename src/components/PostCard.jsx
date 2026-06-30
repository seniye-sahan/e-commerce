import { Calendar, ChevronRight } from "lucide-react";
import { AiOutlineAreaChart } from "react-icons/ai";


function PostCard({ desktopImage, mobileImage }) {
    return (
        <div className="h-[606px] w-[330px] bg-white shadow-[0px_2px_4px_0px_#0000001A] md:w-[348px]">
            <div className="relative h-[300px] w-[330px] md:w-[348px]">

                {/* Mobil */}
                <img
                    src={mobileImage}
                    alt="Post"
                    className="h-full w-full object-cover md:hidden"
                />

                {/* Desktop */}
                <img
                    src={desktopImage}
                    alt="Post"
                    className="hidden h-full w-full object-cover md:block"
                />

                <span className="absolute left-[20px] top-[20px] flex h-[24px] w-[58px] items-center justify-center rounded-[3px] bg-[#E74040] text-[14px] font-bold text-white">
                    NEW
                </span>

            </div>

            <div className="flex h-[306px] flex-col gap-[10px] px-[25px] pb-[35px] pt-[25px]">
                <div className="flex h-[16px] w-[159px] gap-[15px]">
                    <span className="text-[12px] font-normal leading-[16px] tracking-[0.2px] text-[#8EC2F2]">
                        Google
                    </span>
                    <span className="text-[12px] font-normal leading-[16px] tracking-[0.2px] text-[#737373]">
                        Trending
                    </span>
                    <span className="text-[12px] font-normal leading-[16px] tracking-[0.2px] text-[#737373]">
                        New
                    </span>
                </div>

                <h4 className="w-[247px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#252B42]">
                    Loudest à la Madison #1 (L'integral)
                </h4>

                <p className="w-[280px] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                    We focus on ergonomics and meeting you where you work. It's only a
                    keystroke away.
                </p>

                <div className="flex w-[280px] justify-between py-[15px] md:w-[298px]">
                    <div className="flex items-center gap-[5px]">
                        <Calendar size={16} className="text-[#23A6F0]" />
                        <span className="text-[12px] text-[#737373]">
                            22 April 2021
                        </span>
                    </div>

                    <div className="flex items-center gap-[5px]">
                        <AiOutlineAreaChart size={16} className="text-[#23856D]" />
                        <span className="text-[12px] font-normal leading-[16px] tracking-[0.2px] text-[#737373]">
                            10 comments
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-[2px]">
                    <h6 className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                        Learn More
                    </h6>

                    <ChevronRight
                        size={28}
                        strokeWidth={1.25}
                        className="text-[#23A6F0]"
                    />
                </div>
            </div>
        </div>
    );
}

export default PostCard;