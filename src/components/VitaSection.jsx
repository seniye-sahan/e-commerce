import vitaMan from "../assets/vita-man.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
function VitaSection() {
    return (
        <section className="relative w-full overflow-hidden border border-[#DEDEDE] bg-[#23856D] md:h-[709px] md:rounded-[5px]">
            <div className="mx-auto flex w-full max-w-[414px] flex-col items-center gap-[30px] px-0 py-[112px] md:h-full md:max-w-[1049px] md:flex-row md:items-center md:gap-[30px] md:py-0">
                <div className="flex w-full max-w-[599px] flex-col items-center gap-[35px] pt-[120px] text-center md:w-[509px] md:items-start md:gap-[30px] md:pt-0 md:text-left">
                    <h5 className="font-[Montserrat] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#FFFFFF]">
                        SUMMER 2020
                    </h5>

                    <h1 className="font-[Montserrat] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#FFFFFF] md:text-[58px] md:leading-[80px]">
                        Vita Classic Product
                    </h1>

                    <p className="w-[291px] font-[Montserrat] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#FFFFFF] md:w-[341px] md:text-sm md:leading-5">
                        <span className="md:hidden">
                            We know how large objects <br />
                            will act, but things on a <br />
                            small scale.
                        </span>

                        <span className="hidden md:block">
                            We know how large objects will act, We know how are objects will act, We know
                        </span>
                    </p>

                    <div className="flex flex-col items-center gap-[20px] md:flex-row md:gap-[34px]">
                        <h5 className="font-[Montserrat] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#FFFFFF]">
                            $16.48
                        </h5>

                        <button className="h-[52px] gap-[10px] rounded-[5px] bg-[#2DC071] px-[40px] py-0 font-[Montserrat] text-sm font-bold leading-[22px] tracking-[0.2px] text-[#FFFFFF]">
                            ADD TO CART
                        </button>
                    </div>
                </div>

                <div className="relative h-[460px] w-screen overflow-visible md:h-[685px] md:w-[510px] md:self-end md:overflow-hidden">
                    <img
                        src={vitaMan}
                        alt="Vita Classic Product"
                        className="absolute bottom-[-500px] left-[-2px] block h-[1250px] w-auto object-contain md:hidden"
                    />

                    <img
                        src={vitaMan}
                        alt="Vita Classic Product"
                        className="absolute hidden object-contain md:block md:bottom-[-70px] md:left-auto md:h-[685px] md:w-auto"
                    />
                </div>
            </div>

            <button className="absolute left-[38px] top-[600px] text-white md:left-[40px] md:top-1/2 md:-translate-y-1/2">
                <ChevronLeft size={60} strokeWidth={1} />
            </button>

            <button className="absolute right-[38px] top-[600px] text-white md:right-[40px] md:top-1/2 md:-translate-y-1/2">
                <ChevronRight size={60} strokeWidth={1} />
            </button>

            <div className="absolute bottom-[35px] left-1/2 hidden -translate-x-1/2 md:flex">
                <span className="h-[10px] w-[62px] bg-[#FFFFFF]"></span>
                <span className="h-[10px] w-[63px] bg-[#FFFFFF] opacity-50"></span>
            </div>
        </section>
    );
}

export default VitaSection;