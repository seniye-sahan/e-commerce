import {
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF]">
      {/* Üst Bölüm */}
      <div className="w-full bg-[#FAFAFA] h-[173px] md:bg-[#FAFAFA]">
        <div className="mx-auto flex w-[325px] h-[93.5px] flex-col items-start gap-[15px] pt-[40px]  md:w-full md:max-w-[1050px] md:flex-row md:items-center md:justify-between md:gap-0">
          <h3 className="text-[24px] mt-4 font-bold leading-[32px] tracking-[0.1px] text-[#252B42]">
            Bandage
          </h3>

          <div className="flex gap-[20px] pt-2">
            <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#23A6F0]">
              <span className="pt-1 text-[23px] font-bold text-white">f</span>
            </div>

            <AiOutlineInstagram size={27} className="text-[#23A6F0]" />
            <AiOutlineTwitter size={27} className="text-[#23A6F0]" />
          </div>
        </div>
      </div>

      {/* Çizgi */}
      <hr className="mx-auto w-full border-[#E6E6E6] md:max-w-[1057px]" />

      {/* Orta Bölüm */}
      <div className="mx-auto w-[321px] py-[70px] md:w-full md:max-w-[1050px] md:py-[50px]">
        <div className="flex flex-col gap-[30px] md:flex-row">
          {/* Company Info */}
          <div className="flex w-[148px] flex-col gap-[20px]">
            <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Company Info
            </h5>

            <div className="flex flex-col gap-[10px]">
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                About Us
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Carrier
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                We are hiring
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Blog
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex w-[152px] flex-col gap-[20px]">
            <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Legal
            </h5>

            <div className="flex flex-col gap-[10px]">
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                About Us
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Carrier
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                We are hiring
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Blog
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="flex w-[149px] flex-col gap-[20px]">
            <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Features
            </h5>

            <div className="flex flex-col gap-[10px]">
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Business Marketing
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                User Analytic
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Live Chat
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Unlimited Support
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex w-[152px] flex-col gap-[20px]">
            <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Resources
            </h5>

            <div className="flex flex-col gap-[10px]">
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                IOS & Android
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Watch a Demo
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Customers
              </a>
              <a href="#" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                API
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="flex w-[321px] flex-col gap-[20px]">
            <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h5>

            <div>
              <div className="flex h-[58px] w-[321px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-[204px] border border-[#E6E6E6] bg-[#F9F9F9] px-[20px] text-[14px] text-[#737373] outline-none"
                />

                <button className="h-[58px] w-[117px] rounded-r-[5px] border border-[#E6E6E6] bg-[#23A6F0] text-[14px] font-normal text-white">
                  Subscribe
                </button>
              </div>

              <p className="mt-0 text-[12px] font-normal leading-[28px] tracking-[0.2px] text-[#737373]">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bölüm */}
      <div className="bg-[#FAFAFA]">
        <div className="mx-auto flex h-[98px] w-full max-w-[414px] items-center justify-center py-[25px] md:h-auto md:max-w-[1050px] md:justify-start">
          <p className="w-[203px] h-[48px] text-center text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373] md:w-auto md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;