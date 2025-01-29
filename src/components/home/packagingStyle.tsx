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
    items: 3,
    partialVisibilityGutter: 80,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
    partialVisibilityGutter: 120,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

export const PackagingStyle = (props: any) => {
  const router = useRouter();
  return (
    <Container maxWidth={"xl"}>
      <div className="py-10">
        <div className="flex text-center md:text-left flex-wrap sm:flex-nowrap gap-y-5 md:items-start justify-center md:justify-between gap-x-10">
          <div>
            <h2 className="text-3xl sm:text-2xl -mt-2 md:text-4xl xl:text-5xl fw_600 leading-tight primaryText pt-0">
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
          <section className="grid grid-cols-2 gap-3 sm:hidden">
            {props.list.map((data: any, ind: any) => (
              <div className="px-1 md:px-3" key={ind + 1}>
                <div
                  onClick={() =>
                    router.push(`/category/${getSlug(data.slug)}`)
                  }
                  className={`cursor-pointer rounded-3xl overflow-hidden`}
                  style={{ background: "#F5F5F5" }}
                >
                  <div
                    className="p-3 h-[197px] rounded-md flex items-center justify-center"
                    style={{ background: "#EFFCF9" }}
                  >
                    <img
                      src={getImg(data.imageWithAlt).url}
                      alt={getImg(data.imageWithAlt).alt}
                    />
                  </div>
                  <div className="px-6 xl:px-10 pt-6 py-8 flex flex-col md:gap-y-4">
                    <span className="fw_600 text-lg md:text-base lg:text-lg text-center primaryText">
                      {data.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <button
            onClick={() => router.push("/industries")}
            className="text-white rounded-md px-10 whitespace-nowrap primaryBg h-14 text-base fw_400 flex items-center justify-center gap-x-5"
          >
            View all Industries
          </button>
        </div>

        {props.list && props.list.length > 0 && (
          <div className="mt-14 hidden sm:block">
            <Carousel
              responsive={responsive}
              arrows={true}
              infinite={true}
              partialVisible={true}
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
                <div className="px-1 md:px-3 pb-20" key={ind + 1}>
                  <div
                    onClick={() =>
                      router.push(`/category/${getSlug(data.slug)}`)
                    }
                    className={`cursor-pointer rounded-3xl overflow-hidden`}
                    style={{ background: "#F5F5F5" }}
                  >
                    <div
                      className="p-3 h-72 sm:h-60 md:h-80 rounded-md flex items-center justify-center"
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
