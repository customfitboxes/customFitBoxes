import { Container, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QouteForm3 } from "./subcomponents/qouteForm3";
import { ImagesCarousel } from "./subcomponents/imagesCarousel";
import { getImg } from "@/services/descriptionService";

const DetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:1100px)");
  const matches2 = useMediaQuery("(max-width:400px)");
  const [myImg, setMyImg] = useState({});
  const [images, setImages] = useState<any>([]);
  useEffect(() => {
    if (props.product && props.product.images) {
      let res: any = props.product.images.filter(
        (_d: any, ind: any) => ind < 4
      );
      setMyImg(res[0]);
      setImages(res);
    }
  }, [props.product]);
  return (
    <Container maxWidth={"xl"}>
      <div
        className={`flex flex-col-reverse md:grid ${
          matches ? "grid-cols-11" : "grid-cols-12"
        } gap-y-5 pb-10 pt-6 sm:py-10 md:gap-x-10`}
      >
        <div className="col-span-6">
          {props.product &&
            props.product.images &&
            props.product.images.length > 0 && <ImagesCarousel myImg={myImg} />}
        </div>
        <div
          className={`${matches ? "col-span-5" : "col-span-6"} flex items-end`}
        >
          <div className="w-full">
            <div>
              <h1 className="text-3xl lg:text-4xl fw_600 mb-3 primaryText2">
                {props.product.name}
              </h1>
              <p className="text-sm big_three_lines_elipsis">
                {props.product.shortDescription}
              </p>
            </div>
            <div className="hidden md:block">
              <QouteForm3 productName={props.product.name} />
            </div>
            <div className="mt-3">
              <h1 className="fw_600 text-base primaryText">Related Images</h1>
              <div className="flex flex-row gap-x-2 lg:h-full mt-3">
                {images.map((img: any, index: any) => (
                  <div
                    key={index + 1}
                    className={`${
                      matches2 ? "h-20" : "h-24 xl:h-32 2xl:h-40"
                    } w-1/4 p-2 flex items-center justify-center cursor-pointer rounded-md overflow-hidden border-2 ${
                      img === myImg
                        ? "border-blue-700"
                        : "border-zinc-200 border-opacity-0"
                    }`}
                    onClick={() => setMyImg(img)}
                  >
                    <img src={getImg(img).url} alt={getImg(img).alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <h2 className="text-xl fw_600 mt-0 text-center md:text-left">
          Get Custom Quote
        </h2>
        <QouteForm3 productName={props.product.name} />
      </div>
    </Container>
  );
};

export default DetailsHeader;
