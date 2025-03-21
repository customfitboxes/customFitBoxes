import { Container, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { QouteForm3 } from "./subcomponents/qouteForm3";
import { ImagesCarousel } from "./subcomponents/imagesCarousel";
import { getImg } from "@/services/descriptionService";
import { useRouter } from "next/router";
import limitWords from "@/utils/content-limit";

const DetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:1100px)");
  const matches2 = useMediaQuery("(max-width:400px)");
  const [myImg, setMyImg] = useState({});
  const [images, setImages] = useState<any>([]);
  const carouselRef: any = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (props.product && props.product.images) {
      let res: any = props.product.images.filter(
        (_d: any, ind: any) => ind < 4
      );
      setMyImg(res[0]);
      setImages(res);
    }
  }, [props.product]);

  const handleImageClick = (index: any) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
  };

  return (
    <Container maxWidth={"xl"}>
      <div
        className={`flex flex-col-reverse lg:grid ${matches ? "grid-cols-11" : "grid-cols-12"
          } gap-y-5 pb-10 pt-6 sm:py-10 lg:gap-x-10`}
      >
        <div className="col-span-6 flex md:flex-row flex-col-reverse gap-3">
          <div className="md:w-1/5">
            <div className="flex md:flex-col gap-x-2 lg:h-full ">
              {images.map((img: any, index: any) => (
                <div
                  key={index + 1}
                  className={`${matches2 ? "h-full" : "h-full"
                    } w-full flex items-center justify-center cursor-pointer rounded-md overflow-hidden border-2 ${img === myImg
                      ? "border-blue-700"
                      : "border-zinc-200 border-opacity-0"
                    }`}
                  onClick={() => {
                    handleImageClick(index + 2);
                    setMyImg(img);
                  }}
                >
                  <img
                    src={getImg(img).url}
                    alt={getImg(img).alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-4/5">
            {props.product &&
              props.product.images &&
              props.product.images.length > 0 && (
                <ImagesCarousel
                  carouselRef={carouselRef}
                  imagesList={props.product.images}
                />
              )}
          </div>
        </div>

        <div
          className={`${matches ? "col-span-5" : "col-span-6"} flex`}
        >
          <div className="w-full flex flex-col justify-between ">
            <div>
              <span className="text-xs greenText -mt-3">
                <button
                  className="outline-none shadow-none text-blue-600 fw_400"
                  onClick={() => router.push("/")}
                >
                  Home
                </button>{" "}
                /
                <span className="text-zinc-600 fw_400">
                  {" "}
                  {props.product.name}
                </span>
              </span>
              <div>
                <h1 className="text-3xl lg:text-4xl fw_600 my-3 primaryText2">
                  {props.product.name}
                </h1>
                <p className="big_three_lines_elipsis">
                  {limitWords(props.product.shortDescription, 60)}
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <QouteForm3 productName={props.product.name} />
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsHeader;
