/* eslint-disable no-nested-ternary */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Container, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { getImg } from "@/services/descriptionService";
import { PortableText } from "@portabletext/react";

export const ContentSection = (props: any) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:767px)");
  const [details, setDetails] = useState<any>([]);
  useEffect(() => {
    if (
      props.contentData &&
      props.contentData.contentDetails &&
      props.contentData.contentDetails.length > 0
    ) {
      setDetails(props.contentData.contentDetails);
    }
  }, [props.contentData]);

  const block = {
    h1: ({ children }: any) => (
      <h1 className="text-3xl fw_600 mb-2 mt-4 primaryText2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl fw_600 mb-2 mt-4 primaryText2">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl fw_600 mb-2 mt-4 primaryText2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg fw_600 mb-2 mt-4 primaryText2">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base fw_600 mb-2 mt-4 primaryText2">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-sm fw_600 mb-2 mt-4 primaryText2">{children}</h6>
    ),
  };

  return (
    <Container maxWidth={"xl"}>
      <div className="">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl fw_600 leading-tight primaryText2 mt-0 pt-0">
            Content Section
          </h2>
          <p className="mt-1 leading-5 text-sm">
            Discover our range of fully customizable retail boxes tailored to
            your industry - available in an array of unique shapes, custom
            <br /> sizes and colors. Our packaging specialists can help you find
            the perfect
          </p>
        </div>
        <div className="flex flex-col-reverse gap-y-6 gap-x-0 rounded-lg py-5 sm:py-10 md:flex-row md:gap-y-0 md:gap-x-10 md:py-14">
          <div
            className="scrollDiv overflow-y-auto pl-3 md:pl-5"
            style={{ maxHeight: "30rem" }}
          >
            <div className="scrollItem">
              <PortableText value={details} components={{ block }} />
            </div>
          </div>
          <div
            className={`mx-auto flex rounded-md overflow-hidden md:mx-0`}
            style={{
              maxHeight: matches2 ? "100%" : "30rem",
              width: matches ? (matches2 ? "100%" : "26rem") : "30rem",
              minWidth: matches ? (matches2 ? "100%" : "26rem") : "30rem",
            }}
          >
            {props.contentData && props.contentData.contentImage && (
              <img
                src={getImg(props.contentData.contentImage).url}
                alt={getImg(props.contentData.contentImage).alt}
                className="w-full h-full object-contain object-center"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
