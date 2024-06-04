import { BlogDetails } from "@/components/blogDetailsPage/blogDetails";
import { BlogDetailsHeader } from "@/components/blogDetailsPage/blogDetailsHeader";
import { RelatedBlogs } from "@/components/blogDetailsPage/relatedBlogs";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";
import { Container, useMediaQuery } from "@mui/material";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = ({ data, blog, relatedBlogs }: any) => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:1024px)");
  const router = useRouter();
  useEffect(() => {
    if (!blog) {
      router.push("/not-found");
    }
  }, [blog, router]);
  return (
    blog && (
      <div>
        <NextSeo
          title={blog.metaTitle}
          description={blog.metaDescription}
          additionalMetaTags={[
            {
              name: "keywords",
              content: blog.metaTags,
            },
          ]}
          canonical={"https://customfitboxes.com/blog/" + blog.slug.current}
        />
        <Navbar data={data} />

        <Container maxWidth="xl">
          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 pb-10">
            <div className="w-full">
              <BlogDetailsHeader blog={blog} />
              <BlogDetails blog={blog} />
            </div>
            <div
              className="flex flex-col gap-y-8 sticky top-20 h-max"
              style={{
                width: matches ? (matches2 ? "100%" : "25rem") : "26rem",
                minWidth: matches ? (matches2 ? "100%" : "25rem") : "26rem",
              }}
            >
              <RelatedBlogs blogs={relatedBlogs} />
            </div>
          </div>
        </Container>

        <div className="border-t border-zinc-300">
          <Footer />
        </div>
      </div>
    )
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "blogs" && slug.current  == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;

  const blogResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  let relatedBlogs: any = [];
  if (blogResponse && blogResponse.blogCatetgory) {
    const query3 = `*[ _type == "blogs" && blogCatetgory  == "${blogResponse.blogCatetgory}"]`;
    let res: any = await client.fetch(query3);
    relatedBlogs = res.filter((d: any) => d.slug.current !== myUrl);
  }

  return {
    props: {
      data: data.reverse(),
      blog: blogResponse,
      relatedBlogs: relatedBlogs,
    },
  };
}
export default Index;
