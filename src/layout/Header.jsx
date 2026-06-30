import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import dropHero from "../assets/drop-hero.jpg";

function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  return (
    <header className="w-full bg-white">
      {/* Navbar Dark - sadece desktop */}
      <div className="hidden h-[58px] w-full items-center bg-[#252B42] md:flex text-[#FFFFFF]">
        <div className="mx-auto flex h-full w-full max-w-[1439px] items-center justify-between px-[38px]">


          {/* Sol taraf */}
          <div className="ml-[2px] flex items-center gap-[15px]">
            <div className="flex items-center gap-[5px] rounded-[5px] p-[10px] text-[#FFFFFF]">
              <Phone size={16} />
              <span className="text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                (225) 555-0118
              </span>
            </div>

            <div className="flex items-center gap-[5px] rounded-[5px] p-[10px] text-[#FFFFFF]">
              <Mail size={16} />
              <span className="text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          {/* Orta yazı */}
          <div className="p-[10px] text-[#FFFFFF]">
            <span className="text-[14px] font-bold leading-[24px] tracking-[0.2px]">
              Follow Us and get a chance to win 80% off
            </span>
          </div>

          {/* Sağ sosyal medya */}
          <div className="flex items-center gap-[10px] text-[#FFFFFF]">
            <span className="text-[14px] font-bold leading-[24px] tracking-[0.2px]">
              Follow Us :
            </span>

            <div className="flex items-center">
              <a href="#" className="p-[5px]">
                <AiOutlineInstagram size={18} />
              </a>

              <a href="#" className="p-[5px]">
                <AiFillYoutube size={18} />
              </a>

              <a href="#" className="p-[5px]">
                <FaFacebook size={18} />
              </a>

              <a href="#" className="p-[5px]">
                <AiOutlineTwitter size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>


      <nav className="mx-auto w-full h-[532px] md:pt-[5px] md:h-[78px]">

        {/* Mobile Top */}
        <div className="relative h-[104px] w-full md:hidden">
          <Link
            to="/"
            className="absolute left-[35px] top-[35px] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42]"
          >
            Bandage
          </Link>

          <AiOutlineSearch className="absolute left-[248px] top-[40px] h-[24px] w-[24px] text-[#252B42]" />

          <AiOutlineShoppingCart className="absolute left-[296px] top-[41px] h-[24px] w-[24px] text-[#252B42]" />

          <HiMenuAlt3
            className="absolute left-[352px] top-[41px] text-[#252B42]"
            size={26}
          />
        </div>


        {/* Mobile Menu */}
        <div className="mx-auto flex w-[123px] flex-col items-center gap-[30px] pt-[60px] md:hidden">
          <Link to="/" className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-[#737373]">
            Home
          </Link>
          <Link to="/product" className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-[#737373]">
            Product
          </Link>
          <Link to="/pricing" className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-[#737373]">
            Pricing
          </Link>
          <Link to="/contact" className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-[#737373]">
            Contact
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden h-[78px] w-full items-center px-[38px] md:flex">
          {/* Sol taraf: Bandage + Menü */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42]"
            >
              Bandage
            </Link>
            <div className="ml-[150px] flex items-center gap-[15px]">
              <Link to="/" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Home
              </Link>

              <div className="group relative">
                <button
                  type="button"
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="flex items-center gap-[6px] text-[14px] font-medium leading-[28px] tracking-[0.2px] text-[#252B42]"
                >
                  Shop <ChevronDown size={18} />
                </button>

                {/* Mega Menu */}
                <div
                  className={`${isShopOpen ? "block" : "hidden"} absolute left-[-10px]  top-[42px] z-50 w-[1050px] bg-[#FAFAFA] shadow-[0px_13px_19px_0px_#00000012]`}
                >
                  <div className="mx-auto flex h-[368px] w-[1050px] items-start gap-[10px] pl-[40px]">
                    <MenuColumn
                      width="153px"
                      title="Shop Layout"
                      links={["Full Width", "Sidebar Right", "Sidebar Left", "List View", "Checkout", "Card", "Wishlist"]}
                    />

                    <MenuColumn
                      width="146px"
                      title="Product Layout"
                      links={["Big Image Scrolling", "Simple Product", "Vertical Right", "Vertical Left", "Vertical Left", "Vertical Horizontal", "Collection"]}
                    />

                    <MenuColumn
                      width="152px"
                      title="Product Type"
                      links={["Simple Product", "Vertical Product", "Left Product", "Right Product", "Special Products", "Outshout store"]}
                    />

                    <MenuColumn
                      width="190px"
                      title="Product Categories"
                      links={["Bedroom", "Outdoor", "Decoration", "Kitchen"]}
                    />

                    <img
                      src={dropHero}
                      alt="Dropdown"
                      className="h-[368px] w-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <Link to="/about" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                About
              </Link>
              <Link to="/blog" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Blog
              </Link>
              <Link to="/contact" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Contact
              </Link>
              <Link to="/pages" className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]">
                Pages
              </Link>
            </div>

            <div className="ml-[400px] flex items-center">
              <Link
                to="/login"
                className="flex h-[54px] items-center gap-[5px] rounded-[37px] px-[15px] text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#23A6F0]"
              >
                <AiOutlineUser size={18} />
                Login / Register
              </Link>

              <button className="flex h-[46px] w-[46px] items-center justify-center rounded-[37px] text-[#23A6F0]">
                <AiOutlineSearch size={20} />
              </button>

              <button className="flex h-[46px] w-[56px] items-center justify-center gap-[5px] rounded-[37px] text-[#23A6F0]">
                <AiOutlineShoppingCart size={20} />
                <span className="ml-[2px] text-[12px] font-normal leading-[16px]">
                  1
                </span>
              </button>

              <button className="flex h-[46px] w-[56px] items-center justify-center gap-[5px] rounded-[37px] text-[#23A6F0]">
                <AiOutlineHeart size={20} />
                <span className="ml-[2px] text-[12px] font-normal leading-[16px]">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
function MenuColumn({ title, links, width }) {
  return (
    <div
      className="flex flex-col gap-[20px] py-[48px]"
      style={{ width }}
    >
      <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
        {title}
      </h5>

      <div className="flex flex-col gap-[10px]">
        {links.map((link) => (
          <Link
            key={link}
            to="#"
            className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-[#737373]"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;