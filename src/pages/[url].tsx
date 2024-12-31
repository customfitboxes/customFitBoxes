import { DetailsBanner } from "@/components/productDetails/detailsBanner";
import { DetailsContent } from "@/components/productDetails/detailsContent";
import DetailsHeader from "@/components/productDetails/detailsHeader";
import { RelatedProducts } from "@/components/productDetails/relatedProducts";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = ({ data, product, faqs, boxProducts, shapeProducts }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!product) {
      router.push("/not-found");
    }
  }, [product, router]);
  return (
    product && (
      <div>
        <NextSeo
          title={product.metaTitle}
          description={product.metaDescription}
          canonical={"https://customfitboxes.com/" + product.slug.current }
          additionalMetaTags={[
            {
              name: "keywords",
              content: product.metaTags,
            },
          ]}
        />
        <Navbar
          data={data}
          boxProducts={boxProducts}
          shapeProducts={shapeProducts}
        />
        <DetailsHeader product={product} />
        <DetailsContent />
        <ContentSection contentData={product.content} />
        {faqs && faqs.length > 0 && <Faq faqs={faqs} />}
        <RelatedProducts product={product} />
        <DetailsBanner />
        <Footer />
      </div>
    )
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "product" && slug.current == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;
  const query3 = groq`*[_type == 'product' && _id in $p_ids]`;
  const query4 = groq`*[_type == 'faqs' && _id in $ids]`;

  const productResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  let product = { ...productResponse };
  let ids: any = [];
  if (
    productResponse &&
    productResponse.faqs &&
    productResponse.faqs.length > 0
  ) {
    productResponse.faqs.forEach((item: any) => ids.push(item._ref));
  }
  const result = await client.fetch(query4, { ids });
  if (data && data.length > 0) {
    let p_ids: any = [];
    data.forEach((item: any) => {
      if (
        item.products &&
        item.products.length > 0 &&
        item.products.find((item: any) => item._ref === product._id)
      ) {
        item.products.forEach((item: any) => {
          if (item._ref !== product._id) {
            p_ids.push(item._ref);
          }
        });
      }
    });
    const relatedProducts = await client.fetch(query3, { p_ids });
    product = { ...product, relatedProducts: relatedProducts };
  }

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
      product: product && product._id ? product : null,
      faqs: result,
      boxProducts: products1,
      shapeProducts: products2,
    },
  };
}
export default Index;
