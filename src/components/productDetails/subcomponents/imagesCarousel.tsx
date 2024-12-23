import { getImg } from "@/services/descriptionService";
import { useMediaQuery } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1280 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export const ImagesCarousel = (props: any) => {
  const matches = useMediaQuery("(max-width:767px)");
  const matches2 = useMediaQuery("(max-width:400px)");
  return (
    <div className="w-full h-full">
      <Carousel
        ref={props.carouselRef}
        responsive={responsive}
        arrows={true}
        infinite={true}
        focusOnSelect={true}
      >
        {props.imagesList &&
          props.imagesList.length > 0 &&
          props.imagesList.map((item: any, ind: any) => (
            <div
              key={ind + 1}
              className="flex items-center justify-center w-full bg-zinc-100 rounded-md  "
              style={{
                height: matches ? (matches2 ? "400px" : "470px") : "100%",
              }}
            >
              <img
                src={getImg(item).url}
                alt={getImg(item).alt}
                className="h-full w-full object-contain rounded-md "
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};
