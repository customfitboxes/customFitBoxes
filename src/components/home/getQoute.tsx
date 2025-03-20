import { Container } from "@mui/material";
import { GetQouteForm1 } from "./subcomponents/getQouteForm1";

export const GetQoute = (props: any) => {
  return (
    <div className="py-14" style={{ background: "#EFFCF9" }}>
      <Container maxWidth={"xl"}>
        <p className="fw_600 text-center leading-tight text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText">
          Request a Quote
        </p>
        <p className="text-center mt-1 leading-5 text-base">
          Get a custom packaging quote tailored to your needs. Share your specifications, and our experts will provide <br className="hidden xl:block" />a fast, competitive estimate. Let’s create something amazing!
        </p>
        <div className="mt-12">
          <GetQouteForm1 products={props.products} />
        </div>
      </Container>
    </div>
  );
};
