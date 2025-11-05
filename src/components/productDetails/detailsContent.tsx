import { Container } from "@mui/material";
import Image from "next/image";
import msgIcon from "../../static/msgIcon.svg";
import touchIcon from "../../static/touchIcon.svg";
import lifeCycle from "../../static/lifeCycle.svg";

export const DetailsContent = (props: any) => {
  console.log("DetailsContent props:", props);
  return (
    <Container maxWidth="xl">
      <div className="pt-16 lg:pt-6 pb-10 lg:pb-16">
        <h2 className="fw_600 text-center leading-tight text-3xl primaryText lg:text-4xl">
         {props.product?.productFeatureHeading || "Product Features"}
        </h2>
        <p className="mt-4 lg:mt-2 text-center text-sm lg:text-base leading-5 opacity-70">
            {props.product?.productFeatureDetails }
        </p>

        <div className="grid grid-cols-12 lg:gap-x-3 xl:gap-x-16 mt-6 lg:mt-14">
          <div className="col-span-12 md:col-span-4 rounded-2xl pt-6 px-6 pb-10">
            <Image width={60} src={msgIcon} alt={"msgIcon"} />
            <p className="primaryText2 fw_600 text-2xl lg:text-3xl mt-4">Instant quote</p>
            <p className="text-sm lg:text-base mt-3">
              Buy more than 2’500 units and see the
              <br className="hidden lg:block" />
              order price directly on the screen.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 rounded-2xl primaryBg pt-6 px-6 pb-10">
            <Image width={60} src={touchIcon} alt={"touchIcon"} />
            <p className="text-white fw_600 text-2xl lg:text-3xl mt-4">An original touch</p>
            <p className="text-sm lg:text-base mt-3 text-white">
              The multicolored sash brings security
              <br className="hidden lg:block" />
              and a alot of style to your postal box.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 rounded-2xl pt-6 px-6 pb-10">
            <Image width={60} src={lifeCycle} alt={"lifeCycle"} />
            <p className="primaryText2 fw_600 text-2xl lg:text-3xl mt-4">
              Encological option
            </p>
            <p className="text-sm lg:text-base mt-3">
              This box is reusable and made with
              <br className="hidden lg:block" />
              recycled content.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
