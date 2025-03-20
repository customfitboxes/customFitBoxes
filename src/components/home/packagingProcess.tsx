import { Container } from "@mui/material";
import p1 from "../../static/p1.svg";
import p2 from "../../static/p2.svg";
import p3 from "../../static/p3.svg";
import p4 from "../../static/p4.svg";
import Image from "next/image";

export const tabsData = [
  {
    img: p1,
    name: "Choose Box Style",
    description:
      "Select from a variety of custom box styles that suit your brand and product requirements. Whether you need retail boxes, mailers, or luxury rigid boxes, we’ve got the perfect fit for you.",
  },
  {
    img: p2,
    name: "Get Quote",
    description:
      "Receive a competitive quote instantly! Share your packaging specifications, and our team will provide you with the best pricing based on your needs and order volume.",
  },
  {
    img: p3,
    name: "Finilize Art Work",
    description:
      "Work with our expert designers to refine your packaging artwork. We ensure high-quality printing and premium finishing options to make your packaging stand out.",
  },
  {
    img: p4,
    name: "Ready for Shipment",
    description:
      "Once your design is approved, we move to production with precision and efficiency. Your custom packaging is then carefully packed and shipped to your doorstep, ready for use.",
  },
];

export const PackagingProcess = () => {
  return (
    <div className="pt-4">
      <Container maxWidth={"xl"}>
        <div>
          <h2 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText text-center fw_600 leading-tight">
            Our Packaging Process
          </h2>
          <p className="text-center mt-2 leading-5 opacity-70 text-base">
            We follow a streamlined process to ensure you get the perfect custom packaging for your products. From selecting the right box style to finalizing artwork 
            <br className="hidden sm:block" />
            and shipping, we make the journey simple and hassle-free.
          </p>
          <div className="mt-14 rounded-md">
            <div className="mt-10 grid grid-cols-12 gap-3">
              {tabsData.map((item: any, ind: any) => (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-3xl secondaryBg px-4 pt-12 pb-8"
                  key={ind + 1}
                >
                  <div className="h-20 flex justify-center">
                    <Image src={item.img} alt="workImg1" />
                  </div>
                  <div
                    style={{ minHeight: "9rem" }}
                    className="mt-6 overflow-hidden xl:px-2"
                  >
                    <span className="fw_600 text-xl h-10 flex items-center text-center justify-center">
                      {item.name}
                    </span>
                    <p className="mt-4 text-base lg:text-sm xl:text-base leading-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
