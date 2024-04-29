import { Container } from "@mui/material";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
// import { PremiumFinishesData } from "@/demoData/premiumFinishesData";
import gallery from "../../static/gallery.svg";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

export const PremiumFinishes = () => {
  return (
    <Container maxWidth={"xl"}>
      <div className="py-14">
        <h2 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText text-center fw_600 leading-tight">
          Premium Finishes
        </h2>
        <p className="text-center mt-2 leading-5 opacity-70 text-base">
          Donac vtea odio quis dapture misturedre. aiquet velit.aliquium
          valpuriate vate saqvin barndk impred dolor tempo
        </p>
        <div className="w-full flex justify-center mt-14">
          <Image src={gallery} alt="contentImg" style={{ width: "100%" }} />
        </div>
        {/* <div className="w-full mt-14 relative z-10">
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
        </div> */}
      </div>
    </Container>
  );
};
