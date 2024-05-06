import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import banner2 from "../../static/banner2.png";
import { useRouter } from "next/router";

export const DetailsBanner = () => {
  const matches = useMediaQuery("(max-width:1330px)");
  const router = useRouter();
  return (
    <div>
      <div style={{ background: "#EFFCF9" }} className="pt-10">
        <Container maxWidth={"xl"}>
          <div className="flex flex-col-reverse md:grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
            <div className="col-span-6">
              <Image src={banner2} alt="banner2" />
            </div>
            <div className="col-span-6 flex items-center">
              <div className="w-full">
                <p className={`primaryText ${matches? "text-3xl md:text-4xl" : "text-5xl"} leading-tight fw_600`}>
                  Packaging that protects
                  <br className="hidden lg:block" />
                  the environment.
                </p>
                <p className="text-base lg:text-lg text-black fw_400 mt-6">
                  Ecological properties are a set of characteristics
                  <br className="hidden sm:block" />
                  related to the sustainability of packaging.
                </p>
                <div className="flex items-center gap-x-3 sm:gap-x-4 mt-10">
                  <button
                    onClick={() => router.push("/request-quote")}
                    className="text-white rounded-md w-44 lg:w-52 whitespace-nowrap primaryBg h-12 px-4 text-base lg:text-lg fw_400 flex items-center justify-center gap-x-5"
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => router.push("/request-quote")}
                    className="text-white rounded-md w-44 lg:w-52 whitespace-nowrap primaryBg h-12 px-4 text-base lg:text-lg fw_400 flex items-center justify-center gap-x-5"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
