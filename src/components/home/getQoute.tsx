import { Container } from "@mui/material";
import { GetQouteForm1 } from "./subcomponents/getQouteForm1";

export const GetQoute = (props: any) => {
  return (
    <div className="py-14" style={{ background: "#EFFCF9" }}>
      <Container maxWidth={"xl"}>
        <p className="fw_600 text-center leading-tight text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText">
          Request Quote
        </p>
        <p className="mt-2 text-center text-base leading-5 opacity-70">
          Discover our range of fully customizable retail boxes tailored to your
          industry - available in an array of unique
          <br className="hidden xl:block" />
          shapes, custom sizes and colors. Our packaging specialists can help
          you find the perfect
        </p>
        <div className="mt-12">
          <GetQouteForm1 products={props.products} />
        </div>
      </Container>
    </div>
  );
};
