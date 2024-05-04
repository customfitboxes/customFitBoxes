import { BlogMain } from "@/components/blog/blogMain";
import { BlogQouteForm } from "@/components/blog/blogQouteForm";
import { FeaturedCategories } from "@/components/blog/featuredCategories";
import { FollowUS } from "@/components/blog/followUS";
import { PopularPosts } from "@/components/blog/popularPosts";
import { TabsGroup } from "@/components/blog/tabsGroup";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { SearchBox } from "@/components/shared/navbar/subComponents/searchBox";
import { client } from "@/utils/sanityConfig";
import { Container, useMediaQuery } from "@mui/material";
import { useState } from "react";

const Index = ({ data, blogs }: any) => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:1024px)");
  const [blogsData, setBlogsData] = useState(blogs);

  const handleSearch = (val: any) => {
    if (val) {
      let res: any = blogs.filter((blog: any) =>
        blog.name.toLowerCase().includes(val.toLowerCase())
      );
      setBlogsData(res);
    } else {
      setBlogsData(blogs);
    }
  };
  return (
    <div className="relative p-0 m-0 w-full h-full">
      <Navbar data={data} />
      <div style={{ background: "#EFFCF9" }}>
        <Container maxWidth="md" className="relative pt-16 pb-24">
          <h2 className="fw_600 text-center text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText leading-tight">
            Behind the Box
          </h2>
          <p className="mt-5 xl:mt-3 text-base leading-5 opacity-70">
            Unpack expert insights with a range of content from our packaging
            wizards, featuring in-depth guides, custom packaging tips and
            inspiring customer stories. Grow from beginner to pro with
            step-by-step articles on paper options, spot UV, Adobe Illustrator,
            image resolution, subscription boxes, digital proof guidelines,
            die-cutting, full color print techniques, ink coverage, corrugated
            cardboard, shipping strategy, box templates, and more from a trusted
            packaging industry leader.
          </p>
          <div className="absolute -mt-6 left-1/2 transform -translate-x-1/2 w-5/6 top-full">
            <SearchBox
              placeholder="Search by title..."
              onChange={(e: any) => handleSearch(e)}
              height="h-12"
            />
          </div>
        </Container>
      </div>
      <div className="pt-20">
        <Container maxWidth="xl">
          <TabsGroup setBlogsData={setBlogsData} blogs={blogs} />
          <div className="flex flex-col lg:flex-row mt-16 gap-y-8 lg:gap-y-0 lg:gap-x-8">
            <div className="w-full">
              <BlogMain blogs={blogsData} />
            </div>
            <div
              className="flex flex-col gap-y-8"
              style={{
                width: matches ? (matches2 ? "100%" : "25rem") : "30rem",
                minWidth: matches ? (matches2 ? "100%" : "25rem") : "30rem",
              }}
            >
              <PopularPosts
                blogs={
                  blogs.length > 0
                    ? blogs.filter((d: any) => d.popular === true)
                    : []
                }
              />
              <FeaturedCategories blogs={blogs} />
              <FollowUS />
              <BlogQouteForm />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps() {
  const query1 = `*[_type == "category"]`;
  const query2 = `*[_type == "blogs"]`;

  const data = await client.fetch(query1);
  const data2 = await client.fetch(query2);

  return {
    props: {
      data: data.reverse(),
      blogs: data2,
    },
  };
}
export default Index;
