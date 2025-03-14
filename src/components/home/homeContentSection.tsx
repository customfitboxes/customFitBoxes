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
              <h2 className="text-xl primaryText fw_600 mb-4">
                Create Custom Boxes That Elevate Your Brand
              </h2>
              <p className="text-sm">
                Looking for the perfect packaging to showcase your brand? At Custom Fit Boxes, we provide tailor-made packaging solutions designed to meet your unique product needs. We offer the ideal packaging solutions regardless of whether you need minimalistic or premium designs.
              </p>
              <h2 className="text-xl primaryText fw_600 mb-4">
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
  <li><a href="https://customfitboxes.com/category/cbd-boxes" className="text-blue-600 hover:underline">Custom CBD Packaging</a></li>
  <li><a href="https://customfitboxes.com/category/cosmetics-boxes" className="text-blue-600 hover:underline">Cosmetic Packaging Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/mailer-boxes" className="text-blue-600 hover:underline">Mailer Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/food-boxes" className="text-blue-600 hover:underline">Food Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/soap-boxes" className="text-blue-600 hover:underline">Soap Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/bakery-boxes" className="text-blue-600 hover:underline">Bakery Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/apparel-boxes" className="text-blue-600 hover:underline">Apparel Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/gift-boxes" className="text-blue-600 hover:underline">Gift Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/rigid-boxes" className="text-blue-600 hover:underline">Rigid Boxes</a></li>
  <li><a href="https://customfitboxes.com/category/candle-boxes" className="text-blue-600 hover:underline">Candle Boxes</a></li>
</ul>

<h2 className="text-xl primaryText fw_600 mt-4">
  Advanced Printing Methods for High-Impact Packaging
</h2>
<h3 className="text-lg fw_600 mt-3">
  Digital Printing
</h3>
  <p className="text-sm mt-3">
  Digital printing delivers impressive quality output for products with minor—to medium-scale manufacturing demands, resulting in detailed and intensely colored finished prints.
</p>
  <h3 className="text-lg fw_600 mt-3">
  Flexographic Printing
</h3>
  <p className="text-sm mt-3">
  Customers who need large quantities of custom boxes should choose this economical printing approach. Businesses seeking mass production of custom packaging boxes featuring solid colors and simple designs should use this method.
</p>
  <h3 className="text-lg fw_600 mt-3">
  Offset Printing
</h3>
  <p className="text-sm mt-3">
  Large printing sets can rely on offset printing to produce precise and uniform results throughout their total quantity. This printing method ensures accurate color output and crisp line quality, which is essential for maintaining high design standards for custom-printed boxes.
</p>
<h3 className="text-lg fw_600 mt-3">
  Screen Printing
</h3>
  <p className="text-sm mt-3">
  The process's main application is showing off dynamic colors in custom boxes with logos while offering top visibility on both cardboard structures and solid boxes.
</p>

<h2 className="text-xl primaryText fw_600 mt-4">
  Printing Color Models for Custom Boxes
</h2>
<h3 className="text-lg fw_600 mt-3">
  CMYK Printing
</h3>
  <p className="text-sm mt-3">
  The CMYK printing model generates various colors by combining four printing inks: cyan, Magenta, Yellow, and Black. The technique is extensively utilized for complete color output and achieves color mixing through subtraction.
</p>
<h3 className="text-lg fw_600 mt-3">
  PMS (Pantone Matching System)
</h3>
  <p className="text-sm mt-3">
  PMS is a standardized color-matching system that distributes unique codes to particular colors to achieve consistent reproduction between different media. Its primary application is branding, where it helps businesses maintain color consistency across multiple platforms.
</p>

<h2 className="text-xl fw_600 mt-3">
  Premium Finishing Techniques for Custom Boxes
</h2>
<p className="text-sm mt-3">
  Standout packaging plays an essential role for clients. The company maintains manufacturing and design capabilities, consistently creating innovative custom packages that build strong brand identities. Sustainability is achieved by implementing environmentally friendly materials and eco-friendly production methods while maintaining excellent performance. Premium finishes serve aesthetic and protective purposes, combining art with functionality so that each box performs efficiently based on form and function.
</p>
<h3 className="text-lg fw_600 mt-3">
  UV Printing
</h3>
  <p className="text-sm mt-3">
  This method suits the production of logo-bearing custom boxes and custom print boxes when high-quality, durable finishes like gloss or matte surfaces are desired.
</p>
<h3 className="text-lg fw_600 mt-3">
  Embossing & Debossing
</h3>
  <p className="text-sm mt-3">
  Embossing and debossing techniques acquire a luxurious appearance by adding raised or recessed designs. The texture adds depth, making your branding approachable through touch and more visually appealing.
</p>
<h3 className="text-lg fw_600 mt-3">
  Foil Stamping
</h3>
  <p className="text-sm mt-3">
  Custom boxes acquire an elegant and sophisticated appearance when you incorporate foil stamping as an enhancement. The foil stamping process creates metallic reflective finishes, making custom boxes, logos, and accents more noticeable.
</p>
<h3 className="text-lg fw_600 mt-3">
  Litho Lamination
</h3>
  <p className="text-sm mt-3">
  Premium quality printing through lamination offers luxury packaging, which helps preserve vibrant print designs, especially when you want to package high-end products.
</p>
<h3 className="text-lg fw_600 mt-3">
  Varnishing
</h3>
  <p className="text-sm mt-3">
  Varnishing applied to custom boxes improves both appearance and operational capabilities. This finishing process also creates glossy, matte, or satin finishes by applying protective coatings to printed surfaces.
    </p>
  <h3 className="text-lg fw_600 mt-3">
  Glossy Lamination
</h3>
  <p className="text-sm mt-3">
  Gloss is the best choice if you want to see a shiny, reflective finish that enhances colors and details.
</p>
  <h3 className="text-lg fw_600 mt-3">
  Soft-touch Lamination
</h3>
  <p className="text-sm mt-3">
  Soft touch lamination offers a velvety, tactile feel while maintaining a matte look.
</p>
<h3 className="text-lg fw_600 mt-3">
  Spot UV Finish
</h3>
  <p className="text-sm mt-3">
  A glossy coating is applied to specific areas for contrast and emphasis.
</p>
<h3 className="text-lg fw_600 mt-3">
  AQ Coating
</h3>
  <p className="text-sm mt-3">
  An aqueous coating for a smooth, satin-like finish that is eco-friendly.
</p>
<h3 className="text-lg fw_600 mt-3">
  Matte Lamination
</h3>
  <p className="text-sm mt-3">
  Provides a smooth, non-reflective finish with a soft touch.
</p>
<h2 className="text-xl primaryText fw_600 mt-4">
  Popular Custom Packaging Styles
</h2>
  <p className="text-sm mt-3">
  Custom packaging boxes allow businesses to select from various possible dimensions and designs for product packaging into aesthetic representations that match their brand identity.
</p>
<ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
                <li>
                  <span className="fw_600">Gable Boxes:</span>{" "}
                  Easy-to-carry boxes with a handle, ideal for gift packaging or food products.
                </li>
                <li>
                  <span className="fw_600">Window Die-Cut Boxes:</span> Feature a transparent window to showcase the product inside.
                </li>
                <li>
                  <span className="fw_600">Sleeve Boxes:</span> A box with a sliding sleeve offering a premium unboxing experience.
                </li>
                <li>
                  <span className="fw_600">Seal End Auto Bottom:</span> Automatically secured at the base, providing easy assembly.
                </li>
                <li>
                  <span className="fw_600">Entire Flap Auto Bottom:</span> Similar to the Seal End Auto Bottom, with added stability.
                </li>
                <li>
                  <span className="fw_600">Auto Bottom with Display Lid:</span> Features a secure bottom with an easy-to-open lid for display.
                </li>
                <li>
                  <span className="fw_600">Double Wall Tuck Top:</span> Provides extra protection and a secure tuck flap closure.
                </li>
                <li>
                  <span className="fw_600">Roll End Tuck Top:</span> Features a tuck top and roll end for secure, compact packaging.
                </li>
                <li>
                  <span className="fw_600">Tuck End Auto Bottom:</span> Combines a tuck end and auto bottom for secure closure and quick assembly.
                </li>
                <li>
                  <span className="fw_600">Straight Tuck Boxes:</span> Simple design with straight tuck flaps for easy closure and packaging.
                </li>
              </ul>

<h2 className="text-xl primaryText fw_600 mt-4">
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

<h2 className="text-xl primaryText fw_600 mt-4">
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
