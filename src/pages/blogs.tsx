import { FeaturedCategories } from "@/components/blog/featuredCategories";
import { PopularPosts } from "@/components/blog/popularPosts";
import { TabsGroup } from "@/components/blog/tabsGroup";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { SearchBox } from "@/components/shared/navbar/subComponents/searchBox";
import { getServerSideProps } from "@/services/categoriesService";
import { Container } from "@mui/material";

const Index = ({ data }: any) => {
  return (
    <div className="relative p-0 m-0 w-full h-full">
      <Navbar data={data} />
      <div style={{ background: "#EFFCF9" }}>
        <Container maxWidth="md" className="relative pt-16 pb-24">
          <h2 className="fw_600 text-center text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText leading-tight">
            Behind the Box
          </h2>
          <p className="mt-2 text-base leading-5 opacity-70">
            Unpack expert insights with a range of content from our packaging
            wizards, featuring in-depth guides, custom packaging tips and
            inspiring customer stories. Grow from beginner to pro with
            step-by-step articles on paper options, spot UV, Adobe Illustrator,
            image resolution, subscription boxes, digital proof guidelines,
            die-cutting, full color print techniques, ink coverage, corrugated
            cardboard, shipping strategy, box templates, and more from a trusted
            packaging industry leader.
          </p>
          <div className="w-5/6 mx-auto absolute -mt-6 top-full">
            <SearchBox
              placeholder="Search by product, categories..."
              onChange={() => {}}
              height="h-12"
            />
          </div>
        </Container>
      </div>
      <div className="pt-20">
        <Container maxWidth="xl">
          <TabsGroup />
          <div className="flex mt-16">
            <div className="w-full"></div>
            <div
              className="flex flex-col gap-y-8"
              style={{ width: "30rem", minWidth: "30rem" }}
            >
              <PopularPosts />
              <FeaturedCategories />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export { getServerSideProps };
export default Index;
