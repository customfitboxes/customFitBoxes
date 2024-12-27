import { Container } from "@mui/material";
import { getImg } from "@/services/descriptionService";
import { useRouter } from "next/router";
import { getSlug } from "@/services/categoriesService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

export const RelatedProducts = (props: any) => {
  const router = useRouter();
  return (
    props.product &&
    props.product.relatedProducts &&
    props.product.relatedProducts.length > 0 && (
      <Container maxWidth="xl">
        <div className="pb-16 pt-10 lg:pt-0">
          <h1 className="fw_600 text-2xl leading-tight md:text-3xl lg:text-4xl primaryText">
            Related Products
          </h1>
          <div className="mt-5">
            <Carousel responsive={responsive}>
              {props.product.relatedProducts.map((data: any, index: any) => (
                <div className="px-2" key={index + 1}>
                <div
                  
                  onClick={() => router.push("/" + getSlug(data.slug))}
                  className="col-span-12 sm:col-span-6 lg:col-span-3   rounded-3xl cursor-pointer bg-[#f5f5f5] hover:drop-shadow-md duration-300"
                >
                  <div
                    className="w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden rounded-t-3xl  "
                    style={{ background: "#eaf0f5" }}
                  >
                    {data.images &&
                      data.images.length > 0 &&
                      data.images[0] && (
                        <img
                          src={getImg(data.images[0]).url}
                          alt={getImg(data.images[0]).alt}
                          className="h-full w-full object-cover"
                        />
                      )}
                  </div>
                  <p className="text-base text-center fw_400 mt-1 px-10 py-8">
                    {data.name}
                  </p>
                </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    )
  );
};
