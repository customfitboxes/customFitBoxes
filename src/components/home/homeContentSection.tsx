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

              </p>
              <p className="text-sm mt-3">
                By buying custom boxes wholesale, you can save money and invest in other parts of your business. Attractive packaging catches customers' attention in stores, leading to more loyal customers and higher sales.
              </p>
              <h2 className="text-xl primaryText fw_600 mt-4">
                Our Seamless Custom Packaging Process
              </h2>
              <p className="text-sm mt-3">
                The packaging process at Custom-Fit Boxes allows customers to create fully customized retail boxes that specifically suit their industry requirements in four easy steps.
              </p>
              <ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
                <li>
                  <span className="fw_600">Consultation:</span>{" "}
                  Share your packaging vision and requirements.
                </li>
                <li>
                  <span className="fw_600">Design:</span> Our experts craft unique, high-quality designs tailored to your brand.
                </li>
                <li>
                  <span className="fw_600">Production:</span> We manufacture your custom boxes with precision and quality.
                </li>
                <li>
                  <span className="fw_600">Delivery:</span> Fast and secure shipping, ensuring your packaging arrives on time.
                </li>
              </ul>
              <h2 className="text-xl primaryText fw_600 mb-3">
  Industry-Specific Custom Packaging Solutions
</h2>
<p className="text-sm">
  Custom boxes are created for a wide range of industries. Customized packaging solutions to meet the specific needs of each sector are offered. This flexibility extends across industries, enabling businesses to choose from various packaging types:
</p>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li>Custom CBD Packaging</li>
  <li>Cosmetic Packaging Boxes</li>
  <li>Mailer Boxes</li>
  <li>Food and Beverage Packaging</li>
  <li>Soap Boxes</li>
  <li>Bakery Boxes</li>
  <li>Apparel Boxes</li>
  <li>Gift Boxes</li>
  <li>Rigid Boxes</li>
  <li>Candle Boxes</li>
</ul>

<h2 className="text-lg fw_600 mt-3">
  Advanced Printing Methods for High-Impact Packaging
</h2>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li><span className="fw_600">Digital Printing:</span> Delivers impressive quality output for minor—to medium-scale manufacturing demands.</li>
  <li><span className="fw_600">Flexographic Printing:</span> Economical printing approach for large quantities of custom boxes.</li>
  <li><span className="fw_600">Offset Printing:</span> Ensures accurate color output and crisp line quality for large print runs.</li>
  <li><span className="fw_600">Screen Printing:</span> Ideal for dynamic colors in custom boxes with logos.</li>
</ul>

<h2 className="text-xl primaryText fw_600 mt-4">
  Printing Color Models for Custom Boxes
</h2>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li><span className="fw_600">CMYK Printing:</span> Generates various colors by combining cyan, magenta, yellow, and black inks.</li>
  <li><span className="fw_600">PMS (Pantone Matching System):</span> Standardized system ensuring consistent reproduction across media.</li>
</ul>

<h2 className="text-lg fw_600 mt-3">
  Premium Finishing Techniques for Custom Boxes
</h2>
<p className="text-sm mt-3">
  Premium finishes serve aesthetic and protective purposes, enhancing branding and functionality.
</p>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li><span className="fw_600">UV Printing:</span> High-quality, durable finishes like gloss or matte.</li>
  <li><span className="fw_600">Embossing & Debossing:</span> Adds depth and luxury to packaging.</li>
  <li><span className="fw_600">Foil Stamping:</span> Metallic reflective finishes for enhanced appeal.</li>
  <li><span className="fw_600">Litho Lamination:</span> Premium quality printing for luxury packaging.</li>
</ul>

<h2 className="text-xl primaryText fw_600 mt-4">
  Popular Custom Packaging Styles
</h2>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li>Gable Boxes</li>
  <li>Window Die-Cut Boxes</li>
  <li>Sleeve Boxes</li>
  <li>Seal End Auto Bottom</li>
  <li>Double Wall Tuck Top</li>
  <li>Roll End Tuck Top</li>
</ul>

<h2 className="text-lg fw_600 mt-3">
  Luxury Add-Ons to Elevate Your Packaging
</h2>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li>Silver Foiling</li>
  <li>Gold Foiling</li>
  <li>Embossing</li>
  <li>Die-cut Windows</li>
  <li>Ribbons Pasting</li>
</ul>

<h2 className="text-xl primaryText fw_600 mt-4">
  About Custom Fit Boxes – Your Trusted Packaging Partner
</h2>
<p className="text-sm mt-3">
  Custom Fit Boxes designs distinctive packaging that showcases products and brand values. We provide complete customization tools and advanced printing methods to help your products dominate competitive markets.
</p>

<h2 className="text-lg fw_600 mt-3">
  Why Choose Custom Fit Boxes?
</h2>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
  <li>Tailored Packaging Solutions</li>
  <li>Eco-Friendly and Sustainable Packaging</li>
  <li>High-Quality Logo Printing</li>
  <li>Endless Customization</li>
  <li>Wholesale Pricing</li>
  <li>Free Design Support</li>
  <li>Fast & Free Delivery</li>
  <li>24/7 Customer Support</li>
</ul>

<h2 className="text-xl primaryText fw_600 mt-4">
  Request a Quote Today!
</h2>
<p className="text-sm mt-3">
  Check out our wide range of products and request a quote tailored to your needs. Our experts will help you create the perfect custom boxes for your brand.
</p>
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
