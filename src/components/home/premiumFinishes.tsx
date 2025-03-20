import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { PremiumFinishesData } from "../../demoData/premiumFinishesData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const PremiumFinishes = () => {
  return (
    <Container maxWidth={"xl"}>
      <div className="pb-10 pt-14">
        <h2 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText text-center fw_600 leading-tight">
          Luxury Finishing Options
        </h2>
        <p className="text-center mt-2 leading-5 opacity-70 text-base">
          Elevate your packaging with stunning premium finishes that enhance appeal and sophistication. From gold and silver foils to holographic effects,
{" "}
      
          <br className="hidden sm:block" />
          <span className="lowercase"> our high-quality finishing options ensure a luxurious, eye-catching presentation that leaves a lasting impression.</span>
        </p>
        <div className="w-full mt-10 relative z-10">
          <Carousel responsive={responsive}>
            {PremiumFinishesData.map((item: any, index: any) => (
              <div className="sm:p-3" key={index + 1}>
                <div className="h-80 w-full overflow-hidden rounded-md">
                  <Image
                    src={item.img}
                    alt="contentImg"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <p className="fw_400 mt-2 text-lg">{item.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};
