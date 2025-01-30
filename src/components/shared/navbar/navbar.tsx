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
          <div className="flex items-center gap-5">
            <Link href="tel:+1(332) 252 9988" className="md:hidden">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                <path d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z" fill="#fff" />
              </svg>
            </Link>
            <button
              onClick={() => setShowNav(true)}
              className="block text-lg md:hidden"
            >
              <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
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
                  <Link
                    href={d.path}
                    className={`hover:border-none text-white cursor-pointer text-xs xl:text-base whitespace-nowrap flex items-center gap-x-2 pb-0 mb-0 ${d.name !== "Industries" &&
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
                  </Link>
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
    <div className="xl:border-r-2 xl:border-white -mt-1 xl:border-opacity-50 xl:pr-5 xl:mr-2">
      <Link href="/">
        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clip-rule="evenodd" d="M16.25 3.75V5.43953L18.25 7.03953V3.75H16.25ZM19.75 8.23953V3.5C19.75 2.80964 19.1904 2.25 18.5 2.25H16C15.3097 2.25 14.75 2.80964 14.75 3.5V4.23953L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L19.75 8.23953ZM19.25 9.76047L13.4056 5.08492C12.5838 4.42753 11.4162 4.42753 10.5945 5.08492L4.75003 9.76047V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7501 15.7129 15.7501 16.2858 15.75 16.9506L15.75 21.25H19.25V9.76047ZM14.25 21.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H14.25ZM12 8.25C11.3097 8.25 10.75 8.80964 10.75 9.5C10.75 10.1904 11.3097 10.75 12 10.75C12.6904 10.75 13.25 10.1904 13.25 9.5C13.25 8.80964 12.6904 8.25 12 8.25ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5Z" fill="#fff" />
        </svg>
      </Link>
    </div>
  )
}


const SerchIcon = () => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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