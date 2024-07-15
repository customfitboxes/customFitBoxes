import { CategoryCards } from "@/components/category/CategoryCards";
import { CategoryDetails } from "@/components/category/categoryDetails";
import { CategoryHeader } from "@/components/category/categoryHeader";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = ({
  data,
  category,
  products,
  faqs,
  boxProducts,
  shapeProducts,
}: any) => {
  const router = useRouter();
  useEffect(() => {
    // Check if data is empty, and if so, redirect to 404 page
    if (!category) {
      router.push("/not-found");
    }
  }, [category, router]);
  return (
    category && (
      <div>
        <NextSeo
          title={category.metaTitle}
          description={category.metaDescription}
          additionalMetaTags={[
            {
              name: "keywords",
              content: category.metaTags,
            },
          ]}
          canonical={
            "https://customfitboxes.com/category/" + category.slug.current
          }
        />
        <Navbar
          data={data}
          boxProducts={boxProducts}
          shapeProducts={shapeProducts}
        />
        <CategoryHeader category={category} />
        <CategoryDetails category={category} products={products} />
        <CategoryCards products={products} />
        <ContentSection contentData={category.content} />
        <Faq faqs={faqs} />
        <div className="border-t border-zinc-300">
          <Footer />
        </div>
      </div>
    )
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "category" && slug.current  == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;
  const query3 = groq`*[_type == 'product' && _id in $p_ids]`;
  const query4 = groq`*[_type == 'faqs' && _id in $ids]`;

  const categoryResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  let ids: any = [];
  let p_ids: any = [];
  if (
    categoryResponse &&
    categoryResponse.products &&
    categoryResponse.products.length > 0
  ) {
    categoryResponse.products.forEach((item: any) => p_ids.push(item._ref));
  }
  const productsRelatedToCategory = await client.fetch(query3, { p_ids });

  if (
    categoryResponse &&
    categoryResponse.faqs &&
    categoryResponse.faqs.length > 0
  ) {
    categoryResponse.faqs.forEach((item: any) => ids.push(item._ref));
  }
  const result = await client.fetch(query4, { ids });

  const cat1Name = "Box by Material";
  const cat2Name = "Shapes & Styles";
  const query5 = `*[ _type == "category" && name  == "${cat1Name}"][0]`;
  const query6 = groq`*[_type == 'product' && _id in $p_ids1]`;

  const query7 = `*[ _type == "category" && name  == "${cat2Name}"][0]`;
  const query8 = groq`*[_type == 'product' && _id in $p_ids2]`;

  const cat1 = await client.fetch(query5, { cat1Name });
  const cat2 = await client.fetch(query7, { cat2Name });

  let p_ids1: any = [];
  if (cat1 && cat1.products && cat1.products.length > 0) {
    cat1.products.forEach((item: any) => p_ids1.push(item._ref));
  }

  let p_ids2: any = [];
  if (cat2 && cat2.products && cat2.products.length > 0) {
    cat2.products.forEach((item: any) => p_ids2.push(item._ref));
  }

  const products1 = await client.fetch(query6, { p_ids1 });
  const products2 = await client.fetch(query8, { p_ids2 });
  return {
    props: {
      data: data.reverse(),
      category: categoryResponse,
      products: productsRelatedToCategory,
      faqs: result,
      boxProducts: products1,
      shapeProducts: products2,
    },
  };
}
export default Index;
