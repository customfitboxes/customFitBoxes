import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { PremiumFinishesData } from "@/demoData/premiumFinishesData";

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
      <div className="pb-10 pt-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center fw_600 leading-tight">
          Premium Finishes
        </h2>
        <p className="text-center mt-2 leading-5 opacity-70 text-sm">
          We know how crucial it is for your packaging to shine bright like a
          diamond! Our premium finishes guarantee that your packaging looks
          amazing and feels super fancy in your customers hands. Because when
          it comes to packaging, it's all about making a statement, and we're
          here to help you do it with style{" "}
          <span className="lowercase">
            of finishing options to ensure SPECTACULAR LOOKS AND PREMIUM
          </span>
          <br className="hidden sm:block" />
          <span className="lowercase"> FEEL OF CUSTOM BOXES</span>
        </p>
        <div className="w-full mt-14 relative z-10">
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
