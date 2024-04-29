import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import headerImg1 from "../../static/headerImg1.png";
import { useRouter } from "next/router";
import arrowIcon from "../../static/arrowIcon.svg";
import shippingIcon from "../../static/shippingIcon.svg";
import brushIcon from "../../static/brushIcon.svg";
import dollarIcon from "../../static/dollarIcon.svg";

export const Header = () => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:640px)");
  const router = useRouter();
  return (
    <div
      className="pb-8 pt-5 md:py-10 lg:py-16"
      style={{ background: "#EFFCF9" }}
    >
      <Container maxWidth={"xl"}>
        <div className="flex flex-col-reverse gap-y-6 sm:flex-row sm:gap-x-5 md:gap-x-10 items-center">
          <div className="w-full">
            <button
              onClick={() => router.push("/request-quote")}
              className="primaryBorder primaryText rounded-md px-4 whitespace-nowrap bg-transparent h-12 text-base fw_600"
            >
              Customer Packaging Boxes
            </button>
            <h1 className="fw_600 text-3xl sm:text-2xl leading-tight md:text-4xl xl:text-5xl mt-8">
              Elevate Your Brand With{" "}
              <br className={matches ? "hidden" : "block"} />
              Tailor-Made Packaging{" "}
              <br className={matches ? "hidden" : "block"} />
              Solutions
            </h1>
            <button
              onClick={() => router.push("/request-quote")}
              className="text-white rounded-md px-5 whitespace-nowrap primaryBg h-14 text-base fw_600 mt-14 flex items-center justify-center gap-x-5"
            >
              Customize Products
              <Image src={arrowIcon} alt={"arrowIcon"} width={30} height={30} />
            </button>
            <div className="mt-14 flex flex-wrap gap-8 items-center xl:gap-x-5 2xl:justify-between">
              <div className="flex items-center gap-x-2">
                <Image src={shippingIcon} alt={shippingIcon} width={30} />
                <div className="whitespace-nowrap leading-4">
                  <h2 className="fw_600 text-sm 2xl:text-base pb-0 mb-0">
                    FREE SHIPPING & RETURN
                  </h2>
                  <p className="text-xs 2xl:text-sm p-0 m-0">
                    Free shipping on all orders over $99.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src={brushIcon} alt={brushIcon} width={30} />
                <div className="whitespace-nowrap leading-4">
                  <h2 className="fw_600 text-sm 2xl:text-base pb-0 mb-0">
                    FREE DESIGN SUPPORT
                  </h2>
                  <p className="text-xs 2xl:text-sm p-0 m-0">
                    Get advice from our expert designers.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Image src={dollarIcon} alt={dollarIcon} width={30} />
                <div className="whitespace-nowrap leading-4">
                  <h2 className="fw_600 text-sm 2xl:text-base pb-0 mb-0">
                    NO HIDDEN CHARGES
                  </h2>
                  <p className="text-xs 2xl:text-sm p-0 m-0">
                    100% secure payment & no extra penny.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: matches2 ? "100%" : matches ? "21rem" : "30rem",
              minWidth: matches2 ? "100%" : matches ? "21rem" : "30rem",
            }}
          >
            <Image src={headerImg1} alt="headerImg1" />
          </div>
        </div>
      </Container>
    </div>
  );
};
