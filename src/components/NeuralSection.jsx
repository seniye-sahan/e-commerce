import neuralImg from "../assets/neural-cover.png";

function NeuralSection() {
    return (
        <section className="w-full bg-[#FFFFFF]">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#FFFFFF] md:h-[682px] md:flex-row md:justify-center md:gap-[30px]">

                <div className="relative order-2 h-[407px] w-full overflow-hidden md:left-[70px] md:order-1 md:h-[682px] md:w-[774px]">
                    <img
                        src={neuralImg}
                        alt="Part of the Neural Universe"
                        className="
      absolute
      bottom-0
      left-[-45px]
      h-[407px]
      w-[453px]
      object-cover

      md:left-[-90px]
      md:top-[-90px]
      md:bottom-auto
      md:h-[774px]
      md:w-[725px]
    "
                    />
                </div>

                {/* Sağ İçerik */}
                <div className="order-1 flex flex-col items-center gap-[28px] px-6 pt-[120px] pb-[20px] text-center md:order-2 md:h-[326px] md:w-[573px] md:items-start md:px-0 md:py-0 md:text-left">

                    <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
                        SUMMER 2020
                    </h5>

                    <h2
                        className="
    w-[303px]
    text-center
    text-[40px]
    font-bold
    leading-[50px]
    tracking-[0.2px]
    text-[#252B42]

    md:w-[385px]
    md:h-[100px]
    md:text-left
  "
                    >
                        Part of the Neural Universe
                    </h2>

                    <h4
                        className="
    w-[262px]
    text-center
    text-[20px]
    font-normal
    leading-[30px]
    tracking-[0.2px]
    text-[#737373]

    md:w-[376px]
    md:text-left
  "
                    >
                        We know how large objects will act, but things on a small scale.
                    </h4>

                    <div
                        className="
    flex flex-col items-center gap-[25px]

    md:h-[52px]
    md:w-[339px]
    md:flex-row
    md:gap-[10px]
  "
                    >
                        <button
                            className="
      h-[52px] w-[156px]
      rounded-[5px]
      bg-[#23A6F0]

      md:bg-[#2DC071]

      font-[Montserrat]
      text-[14px]
      font-bold
      leading-[22px]
      tracking-[0.2px]
      text-white
    "
                        >
                            BUY NOW
                        </button>

                        <button
                            className="
      h-[52px] w-[162px]

      md:w-[173px]

      rounded-[5px]
      border border-[#23A6F0]

      md:border-[#2DC071]

      font-[Montserrat]
      text-[14px]
      font-bold
      leading-[22px]
      tracking-[0.2px]

      text-[#23A6F0]
      md:text-[#2DC071]
    "
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default NeuralSection;