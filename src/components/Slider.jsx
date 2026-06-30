import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderImg from "../assets/slider.jpg";

function Slider() {
  return (
    <section className="relative w-full overflow-hidden border border-[#DEDEDE] bg-white md:h-[716px] md:rounded-[5px]">
      <div className="relative mx-auto h-[753px] w-[414px] overflow-hidden md:h-[716px] md:w-full">
        <img
          src={sliderImg}
          alt="New Collection"
          className="absolute left-[1px] top-0 h-[753px] w-[412px] object-cover md:left-0 md:h-[716px] md:w-full"
        />

        <div className="relative z-10 mx-auto flex h-full flex-col items-center justify-center gap-[35px] px-[40px] text-center md:max-w-[1044px] md:items-start md:gap-[35px] md:px-0 md:text-left">
          <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#FFFFFF]">
            SUMMER 2020
          </h5>

          <h1 className="w-[268px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#FFFFFF] md:w-[599px] md:text-[58px] md:leading-[80px]">
            NEW COLLECTION
          </h1>

          <h4 className="w-[291px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#FFFFFF] md:w-[376px]">
            We know how large objects will act, but things on a small scale.
          </h4>

          <button className="h-[62px] w-[221px] rounded-[5px] bg-[#2DC071] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#FFFFFF]">
            SHOP NOW
          </button>
        </div>
      </div>
      <button className="absolute left-[25px] top-[48%] z-20 -translate-y-1/2 text-[#FFFFFF] md:left-[40px] md:top-[283px] md:translate-y-0">
        <ChevronLeft size={80} strokeWidth={1} />
      </button>

      <button className="absolute right-[5px] top-[48%] z-20 -translate-y-1/2 text-[#FFFFFF] md:right-[34px] md:top-[283px] md:translate-y-0">
        <ChevronRight size={80} strokeWidth={1} />
      </button>

      <div className="absolute bottom-[49px] left-1/2 hidden -translate-x-1/2 md:flex">
        <span className="h-[10px] w-[62px] bg-white"></span>
        <span className="h-[10px] w-[63px] bg-white opacity-50"></span>
      </div>
    </section>
  );
}

export default Slider;