import { Container } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import whiteChev from "../../../static/whiteChev.svg";
import logo from "../../../static/logo1.png";
import { SmallNav } from "./subComponents/smallNav";
import { useRouter } from "next/router";
import { linksData } from "@/demoData/navLinksData";
import IndustriesDropdown from "./subComponents/industriesDropdown";
import { SearchBox } from "./subComponents/searchBox";
import BoxDropdown from "./subComponents/boxDropdown";
import Link from "next/link";

export const Navbar = (props: any) => {
  const [tab, setTab] = useState("Industries");
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBoxDropdown, setShowBoxDropdown] = useState(false);
  const [showShapeDropdown, setShowShapeDropdown] = useState(false);
  const [fullNav, setFullNav] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const [openStickySearch, setOpenStickySearch] = useState(false)

  const isActive = (p: any) => {
    if (router.asPath.includes(p)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setFullNav(false);
      } else {
        setFullNav(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?name=${searchVal}`);
  };

  useEffect(() => {
    console.log("xxxxxxxxxxxxxx", props.boxProducts);
  }, [props.boxProducts]);


  return (
    <div
      className={`pb-3 md:pb-0 pt-3 xl:px-5 2xl:px-10 sticky duration-300 primaryBg text-white ${fullNav ? "top-0" : "top-0 md:-top-[72px]"
        } z-40`}
    >
      <Container maxWidth={"xl"}>
        <div
          className={`flex w-full justify-between gap-x-10 ${fullNav ? "" : "md:invisible"
            }`}
        >
          <div className="flex items-center gap-x-10 xl:gap-x-20">
            <Image
              onClick={() => router.push("/")}
              src={logo}
              alt={"logo"}
              width={170}
              height={90}
              className="cursor-pointer"
              style={{ minWidth: "130" }}
            />
          </div>
          <button
            onClick={() => setShowNav(true)}
            className="block text-lg md:hidden"
          >
            {/* <FontAwesomeIcon icon={faBars} /> */}
            <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <SmallNav
            show={showNav}
            setShow={setShowNav}
            tab={tab}
            setTab={setTab}
          />

          <SearchForm
            handleSearch={handleSearch}
            setSearchVal={setSearchVal}
            className="md:block hidden w-80 xl:w-96"
          />

          <div className="hidden items-start gap-x-10 md:flex lg:mb-0 lg:gap-x-24 xl:gap-x-40">
            <div className="flex flex-col items-center gap-y-2">
              <p className="whitespace-nowrap text-sm">
                Talk to our packaging expert
              </p>
              <a
                title="Click for call me"
                href={`tel:+1(332) 252 9988`}
                className="border-none text-white text-sm"
              >
                +1(332) 252 9988
              </a>
            </div>
            <div className="hidden lg:flex flex-col items-center gap-y-2">
              <p className="whitespace-nowrap text-sm">Email Us</p>
              <a
                title="Click for mail me"
                href={`mailto:sales@customfitboxes.com`}
                className=" text-sm border-none text-white"
              >
                sales@customfitboxes.com
              </a>
            </div>
          </div>
        </div>
        <SearchForm
          handleSearch={handleSearch}
          setSearchVal={setSearchVal}
          className="block md:hidden"
        />
        <div
          className={` hidden ${fullNav ? "items-start lg:items-center  mt-3 lg:mt-2" : "items-center"
            } duration-300 justify-between gap-x-5 md:flex relative`}
        >
          <ul className="flex items-center gap-x-6 lg:gap-x-10">
            {linksData.map((d: any, ind: any) => (
              <li
                key={ind + 1}
                className={`h-max md:pb-2 mb-0`}
                onMouseEnter={() =>
                  d.name === "Industries"
                    ? setShowDropdown(true)
                    : d.name === "Box by Material"
                      ? setShowBoxDropdown(true)
                      : d.name === "Shapes & Styles" && setShowShapeDropdown(true)
                }
                onMouseLeave={() => {
                  setShowDropdown(false);
                  setShowBoxDropdown(false);
                  setShowShapeDropdown(false);
                }}
              >
                <div className="flex items-center gap-3">
                  {ind === 0 && !fullNav && <HomeIcon />}
                  <div
                    onClick={() => router.push(d.path)}
                    className={`${ind === 0
                      ? "xl:border-r-2 xl:border-white xl:border-opacity-50 xl:pr-10"
                      : ""
                      } cursor-pointer text-xs xl:text-base whitespace-nowrap flex items-center gap-x-2 pb-0 mb-0 ${d.name !== "Industries" &&
                        d.name !== "Box by Material" &&
                        d.name !== "Shapes & Styles"
                        ? "hover:scale-95 duration-300"
                        : ""
                      } ${d.name === "Box by Material" || d.name === "Shapes & Styles"
                        ? "relative"
                        : ""
                      } ${isActive(d.active) ? "fw_600" : ""}`}
                  >
                    {d.name}
                    {(d.name === "Industries" ||
                      d.name === "Shapes & Styles" ||
                      d.name === "Box by Material") && (
                        <Image
                          src={whiteChev}
                          alt=""
                          width={8}
                          height={8}
                          className="rotate-90"
                        />
                      )}
                    {showDropdown && d.name === "Industries" && (
                      <IndustriesDropdown
                        list={props.data}
                        setShowDropdown={setShowDropdown}
                      />
                    )}
                    {showBoxDropdown && d.name === "Box by Material" && (
                      <BoxDropdown
                        list={props.boxProducts}
                        setShowDropdown={setShowBoxDropdown}
                      />
                    )}
                    {showShapeDropdown && d.name === "Shapes & Styles" && (
                      <BoxDropdown
                        list={props.shapeProducts}
                        setShowDropdown={setShowShapeDropdown}
                      />
                    )}
                  </div>
                </div>
              </li>
            ))}
            {
              !fullNav && <li className="md:block hidden">
                <button onClick={() => { setOpenStickySearch(!openStickySearch) }}>
                  <SerchIcon />
                </button>
                {
                  openStickySearch && <SearchForm
                    handleSearch={handleSearch}
                    setSearchVal={setSearchVal}
                    className="absolute w-80 rounded-lg shadow-2xl xl:w-96"
                  />
                }
              </li>
            }

          </ul>

          <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-4 md:pb-3">
            <button
              onClick={() => router.push("/request-sample-pack")}
              className={`text-xs bg-transparent border border-white rounded-md py-2 w-36 lg:w-40`}
            >
              Request a Sample Pack
            </button>
            <button
              onClick={() => router.push("/request-quote")}
              className="border border-white rounded-md w-36 bg-transparent py-2 text-xs lg:w-40"
            >
              Request a quote
            </button>
          </div>
          <a
            title="Click for mail me"
            href={`mailto:sales@customfitboxes.com`}
            className="block text-sm lg:hidden text-white"
          >
            sales@customfitboxes.com
          </a>
        </div>
      </Container>
    </div>
  );
};



const HomeIcon = () => {
  return (
    <Link href="/" className="-mt-1">
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z" fill="#fff" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z" fill="#fff" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z" fill="#fff" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z" fill="#fff" />
      </svg>
    </Link>
  )
}


const SerchIcon = () => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" >
      <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12C21 4.5885 19.4115 3 12 3ZM11.5 7.75C9.42893 7.75 7.75 9.42893 7.75 11.5C7.75 13.5711 9.42893 15.25 11.5 15.25C13.5711 15.25 15.25 13.5711 15.25 11.5C15.25 9.42893 13.5711 7.75 11.5 7.75Z" fill="#fff" />
      <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#fff" stroke-width="2" />
      <path d="M14 14L16 16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z" stroke="#fff" stroke-width="2" />
    </svg>
  )
}


const SearchForm = ({ handleSearch, setSearchVal, className }: any) => {
  return (
    <form onSubmit={handleSearch} className={`w-full mt-4 ${className}`}>
      <SearchBox
        placeholder="Search by product, categories..."
        onChange={(val: any) => setSearchVal(val)}
      />
    </form>
  )
}