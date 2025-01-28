/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";

import workImg from "../../static/workImg1.svg";
import workImg2 from "../../static/workImg2.svg";
import workImg3 from "../../static/workImg3.svg";
import shippingIcon from "../../static/shippingIcon.svg";
import rightChevCircle from "../../static/rightChevCircle.svg";
import workBannerImg from "../../static/workBannerImg.png";
import { useRouter } from "next/router";

const howWorksData = [
  {
    name: "Minimum order",
    desc: "Custom boxes from 1 unit",
    img: workImg,
  },
  {
    name: "Eco- friend material",
    desc: "Sustainable products to reinforce your brand",
    img: workImg2,
  },
  {
    name: "Free Shipping",
    desc: "For standard box shipments",
    img: shippingIcon,
  },
  {
    name: "Free advice",
    desc: "Consult with our Packaging Technicians for free.",
    img: workImg3,
  },
];
export const HowItWorks = () => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches3 = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:767px)");
  const router = useRouter();
  return (
    <Container maxWidth={"xl"}>
      <div className="pb-14 pt-5">
        <h2 className="fw_600 text-center text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText leading-tight">
          How it works
        </h2>
        <p className="mt-2 text-center text-base leading-5 opacity-70">
          Discover our range of fully customizable retail boxes tailored to your
          industry - available in an array of unique shapes, custom
          <br className="hidden xl:block" />
          sizes and colors. Our packaging specialists can help you find the
          perfect
        </p>
        <div
          className={`flex flex-col-reverse gap-y-16 md:gap-y-0 md:grid grid-cols-12 mt-14 sm:mt-20 md:gap-x-8`}
        >
          <div className="col-span-12 md:col-span-6">
            <div className="text-lg text-gray-700">
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam architecto, excepturi minus iure iste ipsum pariatur vel rerum voluptatem molestias officiis aspernatur veritatis nam aperiam nihil sequi, obcaecati necessitatibus doloremque id. Quisquam a, consequuntur cupiditate necessitatibus fuga expedita recusandae!
              </p>
              <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, accusantium quidem sapiente neque maiores libero temporibus sed amet numquam nesciunt itaque, ratione, a adipisci exercitationem nemo sunt eum cupiditate repudiandae? Delectus iure tempora iusto ullam recusandae error cum alias hic, deserunt voluptates porro quasi non doloribus dolor id perspiciatis minima voluptatum cumque incidunt dignissimos voluptas vitae provident! Voluptatum, voluptates. Suscipit.</p>
              <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit libero dolorum ipsa alias ipsum hic minima perspiciatis fugit quod maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, nobis.</p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <button
                onClick={() => router.push("/about-us")}
                className="text-white rounded-md px-4 whitespace-nowrap primaryBg h-12 lg:h-14 text-base lg:text-2xl fw_400 mt-14 flex items-center justify-between gap-x-8"
              >
                About Us
                <Image
                  src={rightChevCircle}
                  alt={"rightChevCircle"}
                  width={matches3 ? 30 : 40}
                  height={matches3 ? 30 : 40}
                />
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-end h-max">
            <Image
              src={workBannerImg}
              alt="workBannerImg"
              style={{ width: matches2 ? "100%" : matches ? 400 : 600 }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
