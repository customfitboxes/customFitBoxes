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
          <h1 className="text-4xl fw_600 text-center">About Us</h1>
          <p className="mt-4 text-center fw_400">
            Choose a packaging style for your custom boxes, start designing with
            us, and get your
            <br className="hidden md:block" /> boxes with the most advanced
            printing techniques.
          </p>
        </div>
      </div>
      <Container maxWidth={"xl"}>
        <div className="py-10">
        
        <h2 className="mt-4 font-bold text-black text-xl">
            Who We Are
          </h2>
          <p className="mt-3 p-0 text-black">
            At Custom Fit Boxes, we are more than just a packaging company—we are your partners in branding and presentation. With a keen focus on innovation, sustainability, and top-notch quality, we provide businesses with custom packaging solutions that elevate their products and enhance their market presence. Whether you're a startup or an established brand, our tailor-made packaging ensures that your products stand out.
        
          <h1 className="mt-8 font-bold text-black text-xl">
            Our Mission
          </h1>
          <p className="mt-4 p-0 text-black">
            Our mission is simple: To redefine the packaging experience with high-quality, customized solutions that drive brand recognition and customer satisfaction. We believe that packaging is not just about protection—it’s an opportunity to create lasting impressions and build strong brand connections.
          </p>

          <h1 className="mt-8 font-bold text-black text-xl">
            Why Choose Us?
          </h1>
          <p className="mt-4 p-0 text-black">
            ✔ Free Design Support – Our expert designers work with you to bring your vision to life, ensuring a seamless and visually appealing packaging solution.
            ✔ Fast Turnaround & Free Shipping – Enjoy swift production and delivery within the USA at no extra cost.
            ✔ Eco-Friendly Materials – Sustainability is at the heart of what we do, offering biodegradable and recyclable packaging options to reduce environmental impact.
            ✔ Custom Sizes & Styles – We cater to businesses across industries, providing a wide range of custom box designs tailored to specific needs.
            ✔ Premium Printing & Finishing – With advanced printing techniques and luxury finishes, we enhance your brand’s appeal and customer engagement.
          </p>

            <h2 className="mt-4 font-bold text-black text-xl">
        Our Commitment to Quality and Innovation         
            </h2>
          <p className="mt-3 p-0 text-black">
            At Custom Fit Boxes, we go beyond just packaging—we create experiences. Our commitment to quality and innovation ensures that every box we design enhances your brand’s appeal and protects your products.

<li>Bespoke Packaging Solutions – Tailored to fit your brand identity and product requirements.</li>

<li>Advanced Printing Techniques – High-quality printing with vibrant colors and premium finishes.</li>

<li>Sustainability Focus – Eco-friendly materials and responsible manufacturing practices.</li>

<li>Customer-Centric Approach – Dedicated support to bring your packaging vision to life.</li>

            <h2 className="mt-4 font-bold text-black text-xl">
            Let’s Create Something Amazing Together!
          </h2>
          <p className="mt-3 p-0 text-black">
            Partner with Custom Fit Boxes for packaging that speaks volumes about your brand. Whether you need a unique design, sustainable solutions, or cost-effective options, we’ve got you covered.

📞 Get in Touch Today!Contact us to discuss your packaging needs, request a quote, or explore our custom design options. Our team is here to assist you in every step of your packaging journey!

At Custom Fit Boxes, we believe that the right packaging can make all the difference. Let us help you make that difference!
        
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
