import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { getImg } from "@/services/descriptionService";
import { getSlug } from "@/services/categoriesService";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import chevLeft from "../../static/chevLeft.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export const PackagingStyle = (props: any) => {
  const router = useRouter();
  return (
    <Container maxWidth={"xl"}>
      <div className="py-10">
        <div className="flex flex-wrap sm:flex-nowrap gap-y-5 items-start justify-between gap-x-10">
          <div>
            <h2 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl fw_600 leading-tight primaryText mt-0 pt-0">
              Find Custom Boxes for Your Industry
            </h2>
            <p className="mt-1 leading-5 text-base">
              Discover our range of fully customizable retail boxes tailored to
              your industry - available in an array of unique shapes, custom
              <br className="hidden xl:block" />
              sizes and colors. Our packaging specialists can help you find the
              perfect
            </p>
          </div>
          <button
            onClick={() => router.push("/request-quote")}
            className="text-white rounded-md px-10 whitespace-nowrap primaryBg h-14 text-base fw_400 flex items-center justify-center gap-x-5"
          >
            View all Industries
          </button>
        </div>
        {props.list && props.list.length > 0 && (
          <div className="mt-14">
            <Carousel
              responsive={responsive}
              arrows={true}
              infinite={true}
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
              {props.list.map((data: any, ind: any) => (
                <div className="px-1 sm:px-3 pb-20" key={ind + 1}>
                  <div
                    onClick={() =>
                      router.push(`/category/${getSlug(data.slug)}`)
                    }
                    className={`cursor-pointer rounded-3xl overflow-hidden`}
                    style={{ background: "#F5F5F5" }}
                  >
                    <div
                      className="p-3 h-max lg:h-80 rounded-md flex items-center justify-center"
                      style={{ background: "#EFFCF9" }}
                    >
                      <img
                        src={getImg(data.imageWithAlt).url}
                        alt={getImg(data.imageWithAlt).alt}
                      />
                    </div>
                    <div className="px-6 xl:px-10 py-8 flex flex-col gap-y-4">
                      <p className="fw_600 text-lg md:text-base lg:text-lg text-center primaryText">
                        {data.name}
                      </p>
                      <p className="text-sm  big_three_lines_elipsis text-center">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </Container>
  );
};
