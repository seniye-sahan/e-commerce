import PostCard from "./PostCard";

import yol from "../assets/yol.jpg";
import araba from "../assets/araba.jpg";
import semsiye from "../assets/şemsiye.jpg";

import mobilePost1 from "../assets/mobilpost-1.jpg";
import mobilePost2 from "../assets/mobilpost-2.jpg";
import mobilePost3 from "../assets/mobilpost-3.jpg";

function FeaturedPosts() {
    return (
        <section className="w-full bg-[#FFFFFF]">
            <div className="mx-auto flex w-full max-w-[414px] flex-col items-center gap-[80px] py-[80px] md:max-w-[1050px] md:py-[112px]">
                <div className="mx-auto flex w-[279px] flex-col items-center gap-[10px] text-center md:w-[691px]">
                    <h6 className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#23A6F0]">
                        Practice Advice
                    </h6>

                    <h3 className="w-[239px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] md:w-auto">
                        Featured Products
                    </h3>

                    <p className="w-[261px] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373] md:w-[469px]">
                        <span className="md:hidden">
                            Problems trying to resolve the
                            <br />
                            conflict between the two major

                        </span>

                        <span className="hidden md:inline">
                            Problems trying to resolve the conflict between
                            <br />
                            the two major realms of Classical physics: Newtonian mechanics
                        </span>
                    </p>
                </div>

                <div className="mx-auto flex flex-col items-center gap-[30px] md:flex-row md:gap-[10px]">
                    <PostCard
                        desktopImage={yol}
                        mobileImage={mobilePost1}
                    />

                    <PostCard
                        desktopImage={araba}
                        mobileImage={mobilePost2}
                    />

                    <PostCard
                        desktopImage={semsiye}
                        mobileImage={mobilePost3}
                    />
                </div>
            </div>
        </section>
    );
}

export default FeaturedPosts;