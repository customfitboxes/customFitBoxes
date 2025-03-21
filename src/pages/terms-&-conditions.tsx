import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { Footer } from "@/components/shared/footer/footer";
import { Container } from "@mui/material";

const Index = ({ data, boxProducts, shapeProducts }: any) => {
  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <div className="py-10  px-3" style={{ background: "#EFFCF9" }}>
        <div>
          <h1 className="text-4xl fw_600 text-center">Terms & Conditions</h1>
        </div>
      </div>
      <Container maxWidth={"xl"}>
        <div className="py-10">
          <h2 className="mt-4 font-bold text-black text-xl">
            Introduction
          </h2>
          <p className="mt-3 p-0 text-black">
            Welcome to Custom Fit Boxes. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services. If you do not agree with any part of these terms, you should not use our website.
          </p>
           <h2 className="mt-4 font-bold text-black text-xl">
            Definitions
          </h2>
          
          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Company refers to Custom Fit Boxes.</li>
            <li>User/You refers to any person accessing or using our website.s</li>
            <li>Services refer to the products and solutions offered by Custom Fit Boxes.</li>
          </ul>
 <h2 className="mt-4 font-bold text-black text-xl">
            Use of Website
          </h2>
          
          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>You must be at least 18 years old to use our website.</li>
            <li>You agree not to use the website for any unlawful purposes or in a way that may harm Custom Fit Boxes or other users.</li>
            <li>We reserve the right to terminate access to our website at any time without prior notice if we find any misuse or violation of our terms.</li>
            
          </ul>

          <h2 className="mt-8 font-bold text-black text-xl">
            Orders and Payments
          </h2>

          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>All orders placed through our website are subject to acceptance and availability.</li>
            <li>Prices are listed in USD and may be subject to change without notice.</li>
            <li>Payments must be made in full at the time of order placement through our accepted payment methods.</li>
            
          </ul>

          <h2 className="mt-8 font-bold text-black text-xl">
            Shipping and Delivery
          </h2>
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Delivery times are estimates and not guaranteed.</li>
            <li>Custom Fit Boxes is not responsible for delays caused by third-party shipping carriers.</li>
            <li>Customers are responsible for providing accurate shipping details. Any errors may result in additional charges.</li>
            
          </ul>
           <h2 className="mt-8 font-bold text-black text-xl">
            Returns and Refunds
          </h2>
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Due to the custom nature of our products, all sales are final.</li>
            <li>Refunds or replacements will only be issued in cases of defects or errors caused by Custom Fit Boxes.</li>
            <li>Claims for defective or incorrect products must be reported within 7 days of delivery.</li>
            
          </ul>
           <h2 className="mt-8 font-bold text-black text-xl">
            Intellectual Property
          </h2>
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>All content on this website, including images, designs, logos, and text, is the property of Custom Fit Boxes and may not be used without permission.</li>
            <li>Unauthorized use of our intellectual property may result in legal action.</li>
            
          </ul>
          <h2 className="mt-8 font-bold text-black text-xl">
            Privacy Policy
          </h2>
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Your use of this website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.</li>
            
          </ul>
          <h2 className="mt-8 font-bold text-black text-xl">
            Limitation of Liability
          </h2>
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Custom Fit Boxes is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</li>
            <li>We do not guarantee that our website will always be error-free or uninterrupted.</li>
          </ul>
          <h2 className="mt-8 font-bold text-black text-xl">
            Changes to Terms
          </h2>
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Custom Fit Boxes reserves the right to update these terms at any time without prior notice.</li>
            <li>It is your responsibility to review these terms periodically.</li>
          </ul>
          <h2 className="mt-8 font-bold text-black text-xl">
            Contact Information
          </h2>
           <p className="mt-3 p-0 text-black">
            If you have any questions or concerns about these terms, please email us at info@customfitboxes.com, +1(332) 252 9988.
          </p>
           <p className="mt-3 p-0 text-black">
            By using our website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
