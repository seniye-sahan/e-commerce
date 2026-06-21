import shopMen from "../assets/shop-men.jpg";
import shopWomen from "../assets/shop-women.jpg";
import shopAccessories from "../assets/shop-accessories.jpg";
import shopKids from "../assets/shop-kids.jpg";

function ShopCards() {
    return (
        <section className="py-8 bg-[#FAFAFA]">
            <div className="mx-auto max-w-5xl px-4">
                <div className="mb-6 text-center">
                    <h2 className="text-center font-[Montserrat] text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42]">
                        EDITOR'S PICK
                    </h2>

                    <p className="mx-auto mt-2 w-[196px] text-center text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:gap-[30px]">
                    <div className="relative flex h-[500px] w-full items-end overflow-hidden p-4 md:w-1/2">
                        <img
                            src={shopMen}
                            alt="men"
                            className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black opacity-10"></div>
                        <span className="absolute bottom-6 left-[130px] flex h-12 w-[170px] -translate-x-1/2 items-center justify-center bg-white px-12 text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                            MEN
                        </span>
                    </div>

                    <div className="relative flex h-[500px] w-full items-end overflow-hidden p-4 md:w-1/4">
                        <img
                            src={shopWomen}
                            alt="women"
                            className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black opacity-10"></div>
                        <span className="absolute bottom-6 sm:eft-[85px] flex h-12 w-[136px] items-center justify-center bg-white text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                            WOMEN
                        </span>
                    </div>

                    <div className="flex w-full flex-col gap-4 md:w-1/4 md:gap-[30px]">
                        <div className="relative flex h-[242px] items-end overflow-hidden p-4 md:h-[235px]">
                            <img
                                src={shopAccessories}
                                alt="accessories"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-black opacity-10"></div>
                            <span className="absolute bottom-6 left-4 flex h-12 w-[170px] items-center justify-center bg-white text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                                ACCESSORIES
                            </span>
                        </div>

                        <div className="relative flex h-[242px] items-end overflow-hidden p-4 md:h-[235px]">
                            <img
                                src={shopKids}
                                alt="kids"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-black opacity-10"></div>
                            <span className="absolute bottom-6 left-4 flex h-12 w-[120px] items-center justify-center bg-white text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                                KIDS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopCards;