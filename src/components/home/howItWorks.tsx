/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";

import rightChevCircle from "../../static/rightChevCircle.svg";
import workBannerImg from "../../static/workBannerImg.png";
import { useRouter } from "next/router";


export const HowItWorks = () => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches3 = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:767px)");
  const router = useRouter();
  return (
    <Container maxWidth={"xl"}>
      <div className="pb-14 pt-5">
        <h2 className="fw_600 text-center text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText leading-tight">
          Who We Are
        </h2>
        <p className="mt-2 text-center text-base leading-5 opacity-70">
          At Custom Fit Boxes, we specialize in crafting innovative, high-quality custom packaging solutions that enhance brand identity. Our focus on sustainability, precision, and creativity ensures your packaging leaves a lasting impact in the competitive market.
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
                Custom Fit Boxes is a USA-based company dedicated to providing high-quality custom packaging solutions to businesses across the USA and worldwide. We specialize in crafting unique, durable, and visually appealing packaging that enhances your brand’s identity. Our expertise spans across various industries, ensuring that each packaging solution meets the highest standards of quality and design.
              </p>
              <p className="mt-3">We offer a wide range of custom packaging options, including retail boxes, mailer boxes, food packaging, luxury rigid boxes, and more. Our solutions are tailored to fit your specific needs, with premium printing, eco-friendly materials, and endless customization possibilities. Whether you're looking for eye-catching designs or sustainable packaging, we have the perfect fit for you.</p>
              <p className="mt-3">At Custom Fit Boxes, customer satisfaction is our top priority. We combine creativity, precision, and innovation to help businesses create a strong market presence. With our cost-effective and high-end packaging solutions, we ensure that your brand stands out and leaves a lasting impression.</p>
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
