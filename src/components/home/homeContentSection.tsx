/* eslint-disable no-nested-ternary */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import homeContentImg from "../../static/homeContentImg.png";

export const HomeContentSection = () => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:767px)");
  return (
    <Container maxWidth={"xl"}>
      <div className="pt-14">
        
        <div className="flex flex-col-reverse gap-y-6 gap-x-0 rounded-lg py-5 sm:py-10 md:flex-row md:gap-y-0 md:gap-x-10 md:py-14">
          <div
            className="scrollDiv overflow-y-auto pl-3 md:pl-5"
            style={{ height: "30rem" }}
          >
            <div className="scrollItem">
              <h2 className="text-xl primaryText fw_600 mb-3">
                Create Custom Boxes That Elevate Your Brand
              </h2>
              <p className="text-sm">
                Looking for the perfect packaging to showcase your brand? At Custom Fit Boxes, we provide tailor-made packaging solutions designed to meet your unique product needs. We offer the ideal packaging solutions regardless of whether you need minimalistic or premium designs.
              </p>
              <h2 className="text-lg fw_600 mt-3">
                Why Are Custom Boxes Essential for Product Marketing?
              </h2>
              <p className="text-sm mt-3">
                Using custom packaging designs helps your business stand out and gives your products a unique edge in the market. Custom-printed boxes attract shoppers because they look appealing, making people more likely to buy your products. When customers like what they see, they share their positive experiences with others, helping spread the word about your brand. This natural promotion can boost your brand's reputation and value in the market. There is a wide range of custom printing services to make your packaging look great. Advanced printing machines are used to turn your ideas into reality and ensure your orders are delivered quickly. With high-quality machines, your custom boxes will look exactly how you envision them.
By buying custom boxes wholesale, you can save money and invest in other parts of your business. Attractive packaging catches customers' attention in stores, leading to more loyal customers and higher sales.

              </p>
              <p className="text-sm mt-3">
                Her customers couldn't help but fall in love with the delightful
                unboxing experiences she created for them. She also made sure to
                use eco-friendly materials, which helped her attract more
                customers.
              </p>
              <p className="text-sm mt-3">
                And so, Lily's brand flourished. In the end, Lily realized that
                packaging wasn't just about wrapping products; it was about
                weaving stories. And as she looked at her brand shining bright,
                she knew that her packaging tale was just the beginning of many
                more adventures to come.
              </p>
              <h2 className="text-xl primaryText fw_600 mt-4">
                What Are The Key Considerations When Selecting Packaging
                materials?
              </h2>
              <p className="text-sm mt-3">
                Hey there, packaging pros! Let's talk about picking the perfect
                packaging materials. Here are the top things to think about:
              </p>
              <ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
                <li>
                  <span className="fw_600">Strength and Durability:</span>{" "}
                  Corrugated card stock are tough as nails, making it awesome
                  for shipping and keeping your goodies secure on their journey.
                </li>
                <li>
                  <span className="fw_600">Environmental Vibes:</span> Kraft
                  card stock is eco-friendly, so you can reduce your carbon
                  footprint.
                </li>
                <li>
                  <span className="fw_600">Looks That Wow:</span> Want your
                  packaging to turn heads? Foil card stock is all about the
                  glitz and glam.
                </li>
                <li>
                  <span className="fw_600">Printing Magic:</span> White card
                  stock is ready for your wildest printing dreams.
                </li>
                <li>
                  <span className="fw_600">Texture For Days:</span> Ever felt
                  packaging that just feels awesome? That's the power of
                  textured card stock! It makes your customers go "Ooh!".
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`mx-auto flex rounded-md overflow-hidden md:mx-0`}
            style={{
              height: matches2 ? "100%" : "30rem",
              width: matches ? (matches2 ? "100%" : "26rem") : "30rem",
              minWidth: matches ? (matches2 ? "100%" : "26rem") : "30rem",
            }}
          >
            <Image
              src={homeContentImg}
              alt="homeContentImg"
              style={{
                height: matches2 ? "100%" : "30rem",
                width: matches ? (matches2 ? "100%" : "26rem") : "30rem",
                minWidth: matches ? (matches2 ? "100%" : "26rem") : "30rem",
              }}
              className="object-cover scale-105"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
