/* eslint-disable prettier/prettier */
import { Container } from "@mui/material";
import Image from "next/image";
import linkedin from "../../../static/linkedin.svg";
import facebook from "../../../static/facebook.svg";
import instagram from "../../../static/instagram.svg";
import copyright from "../../../static/copyright.svg";
import { Categories } from "./subcomponents/categories";
import logo from "../../../static/logo.png";
import paymentImg from "../../../static/paymentImg.jpg";
import { useRouter } from "next/router";

const linksData1 = [
  { link: "/", name: "Homepage" },
  { link: "/about-us", name: "About Us" },
  { link: "/blog", name: "Blogs" },
  { link: "/faq", name: "Frequently asked question" },
  { link: "/request-quote", name: "Get A Quote" },
];
const linksData2 = [
  { link: "/why-us", name: "Product Boxes" },
  { link: "/about-us", name: "Cosmetics Boxes" },
  { link: "/contact-us", name: "Food & Beverage Boxes" },
  { link: "/request-quote", name: "Corugated Boxes" },
  { link: "/request-quote", name: "Paper Boxes" },
];
const linksData3 = [
  { link: "", name: "Other Boxes" },
  { link: "", name: "Market Essentials" },
  { link: "", name: "Sticker" },
  { link: "", name: "Folding Boxes" },
  { link: "", name: "Custom Rigid  Boxes" },
];

const linksData4 = [
  { link: "/privacy-policy", name: "Privacy Policy" },
  { link: "/terms-&-conditions", name: "Terms & Conditions" },
  { link: "", name: "Return Policy" },
  { link: "", name: "Contact Us" },
];

export const Footer = () => {
  const router = useRouter();
  return (
    <div className="md:pt-5">
      <Container maxWidth="xl">
        <div className="bg-white lg:px-4 xl:px-14">
          <div className="grid grid-cols-12 gap-y-14 border-b border-zinc-200 pb-14 pt-10 md:gap-y-0 gap-x-0 md:gap-x-5 lg:gap-x-8">
            <div className="md:-mt-3 col-span-12 md:col-span-3">
              <Image
                onClick={() => router.push("/")}
                src={logo}
                alt={"logo"}
                width={160}
                height={70}
                className="cursor-pointer"
                style={{ minWidth: "160" }}
              />
              <div className="flex flex-row md:flex-col flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0 gap-x-10 md:gap-y-10 fw_400 mt-10">
                <div className="flex flex-col items-start gap-y-1 -mt-3">
                  <p className="whitespace-nowrap text-sm">Phone</p>
                  <a
                    title="Click for call me"
                    href={`tel:+1(332) 254 1272`}
                    className="border-none text-black text-sm"
                  >
                    +1(332) 254 1272
                  </a>
                </div>
                <div className="flex flex-col items-start gap-y-1 -mt-3">
                  <p className="whitespace-nowrap text-sm">Email Us</p>
                  <a
                    title="Click for mail me"
                    href={`mailto:sales@customfitboxes.com`}
                    className=" text-sm border-none text-black"
                  >
                    sales@customfitboxes.com
                  </a>
                </div>
                <div className="flex items-center gap-x-4">
                  <Image src={linkedin} alt="linkedin" width={22} />
                  <Image src={instagram} alt="instagram" width={22} />
                  <Image src={facebook} alt="facebook" width={22} />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 grid grid-cols-2 sm:flex justify-between gap-y-6 sm:gap-y-0 gap-x-8">
              <Categories list={linksData1} title="Explore" />
              <Categories list={linksData2} title="Products" />
              <Categories list={linksData3} title="Resources" />
              <Categories list={linksData4} title="Legals" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-3 py-12 md:flex-row md:gap-y-0 md:gap-x-4">
            <div className="flex items-center gap-x-2 text-black">
              <Image src={copyright} alt={copyright} />
              <span className="text-sm sm:text-base text-black fw_400 -mt-1">
                2024 Customfitboxes.All rights reserved.
              </span>
            </div>
            <Image src={paymentImg} alt="paymentImg" className="w-60" />
          </div>
        </div>
      </Container>
    </div>
  );
};
