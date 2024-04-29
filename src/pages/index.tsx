import { GetQoute } from "@/components/home/getQoute";
import { Header } from "@/components/home/header";
import { HowItWorks } from "@/components/home/howItWorks";
import { PackagingStyle } from "@/components/home/packagingStyle";
import { PremiumFinishes } from "@/components/home/premiumFinishes";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { faqsData } from "@/demoData/faqsData";
import { HomeContentSection } from "@/components/home/homeContentSection";
import { PackagingProcess } from "@/components/home/packagingProcess";
import { CallBackComp } from "@/components/home/callBackComp";

const Index = ({ data, featuredCategories, testimonials, products }: any) => {
  return (
    <div className="relative p-0 m-0 w-full h-full">
      <Navbar data={data} />
      <Header />
      <PackagingStyle list={featuredCategories} />
      <PackagingProcess />
      <PremiumFinishes />
      <HowItWorks />
      <GetQoute products={products} />
      <HomeContentSection />
      <Faq faqs={faqsData} />
      <Testimonials testimonials={testimonials} />
      <CallBackComp />
      <Footer />
    </div>
  );
};
export { getServerSideProps };
export default Index;
