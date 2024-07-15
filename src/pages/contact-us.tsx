import { ContactDetails } from "@/components/contactUs/contactDetails";
import { ContactFormSection } from "@/components/contactUs/contactFormSection";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";

const Index = ({ data, boxProducts, shapeProducts }: any) => {
  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <ContactFormSection />
      <ContactDetails />
      <div className="border-t border-zinc-300">
        <Footer />
      </div>
    </div>
  );
};

export { getServerSideProps };
export default Index;
