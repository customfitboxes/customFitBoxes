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

const Index = ({ data, product, faqs }: any) => {
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
          canonical={"https://packagingheight.com/" + product.slug.current}
          additionalMetaTags={[
            {
              name: "keywords",
              content: product.metaTags,
            },
          ]}
        />
        <Navbar data={data} />
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

  return {
    props: {
      data: data.reverse(),
      product: product && product._id ? product : null,
      faqs: result,
    },
  };
}
export default Index;
