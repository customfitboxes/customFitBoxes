/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TestimonialItem } from "./subcomponents/testimonialItem";
import Image from "next/image";
import chevLeft from "../../static/chevLeft.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

export const Testimonials = (props: any) => {
  return (
    <Container maxWidth={"xl"}>
      {props.testimonials && props.testimonials.length > 0 && (
        <div className="pb-10 pt-10">
          <div>
            <p className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl fw_600 text-center primaryText leading-tight">
              Testmonials
            </p>
            <p className="mt-4 text-center fw_400 text-xl sm:text-2xl leading-5 primaryText">
              See Why Customers Love Company Name
            </p>
            <p className="mt-3 text-center text-base leading-5">
              We're dedicated to creating remarkable and distinctive custom
              packaging boxes that make a great first impression. Our loyal
              customer base knows
              <br className="hidden xl:block" />
              we mean it when we say customer satisfaction guaranteed. But don't
              just take our word for it...see what our customers have to say.
            </p>
          </div>
          {/* <div className="block sm:hidden">
            <MobileTestimonials />
          </div> */}
          <div className="mt-14 rounded-lg">
            <Carousel
              responsive={responsive}
              customLeftArrow={
                <button className="absolute bottom-0 left-1/2 -ml-16">
                  <Image src={chevLeft} alt="chevLeft" width={16} />
                </button>
              }
              customRightArrow={
                <button className="absolute bottom-0 right-1/2 -mr-16 rotate-180">
                  <Image src={chevLeft} alt="chevLeft" width={16} />
                </button>
              }
            >
              {props.testimonials.map((dataSet: any, index: any) => (
                <div key={index + 1} className="pb-16 px-2 sm:px-3 pt-10">
                  <TestimonialItem data={dataSet} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </Container>
  );
};
