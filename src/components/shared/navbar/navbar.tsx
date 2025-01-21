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

export const Navbar = (props: any) => {
  const [tab, setTab] = useState("Industries");
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBoxDropdown, setShowBoxDropdown] = useState(false);
  const [showShapeDropdown, setShowShapeDropdown] = useState(false);
  const [fullNav, setFullNav] = useState(true);
  const [searchVal, setSearchVal] = useState("");
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
      className={`pb-3 md:pb-0 pt-3 xl:px-5 2xl:px-10 sticky duration-300 primaryBg text-white ${
        fullNav ? "top-0" : "top-0 md:-top-14"
      } z-40`}
    >
      <Container maxWidth={"xl"}>
        <div
          className={`flex w-full justify-between gap-x-10 ${
            fullNav ? "" : "md:invisible"
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
            Menu
          </button>
          <SmallNav
            show={showNav}
            setShow={setShowNav}
            tab={tab}
            setTab={setTab}
          />
          <form
            onSubmit={handleSearch}
            className="w-80 xl:w-96 hidden md:block"
          >
            <SearchBox
              placeholder="Search by product, categories..."
              onChange={(val: any) => setSearchVal(val)}
            />
          </form>
          <div className="hidden items-start gap-x-10 md:flex lg:mb-0 lg:gap-x-24 xl:gap-x-40">
            <div className="flex flex-col items-center gap-y-2">
              <p className="whitespace-nowrap text-sm">
                Talk to our packaging expert
              </p>
              <a
                title="Click for call me"
                href={`tel:+1(332) 254 1272`}
                className="border-none text-white text-sm"
              >
                +1(332) 254 1272
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
        <form onSubmit={handleSearch} className="w-full mt-4 block md:hidden">
          <SearchBox
            placeholder="Search by product, categories..."
            onChange={(val: any) => setSearchVal(val)}
          />
        </form>
        <div
          className={` hidden ${
            fullNav ? "items-start lg:items-end  mt-3 lg:mt-2" : "items-center"
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
                <div
                  onClick={() => router.push(d.path)}
                  className={`${
                    ind === 0
                      ? "xl:border-r-2 xl:border-white xl:border-opacity-50 xl:pr-10"
                      : ""
                  } cursor-pointer text-xs xl:text-base whitespace-nowrap flex items-center gap-x-2 pb-0 mb-0 ${
                    d.name !== "Industries" &&
                    d.name !== "Box by Material" &&
                    d.name !== "Shapes & Styles"
                      ? "hover:scale-95 duration-300"
                      : ""
                  } ${
                    d.name === "Box by Material" || d.name === "Shapes & Styles"
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
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-8 md:pb-3">
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
