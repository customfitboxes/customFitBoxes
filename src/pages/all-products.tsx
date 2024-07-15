import { Navbar } from "../components/shared/navbar/navbar";
import { AllProductsHeader } from "../components/allProducts/allProductsHeader";
import { AllProductCardsContent } from "../components/allProducts/allProductCardsContent";
import { Footer } from "../components/shared/footer/footer";
import React from "react";
import { client } from "../utils/sanityConfig";
import { groq } from "next-sanity";

const Index = ({ data, products, boxProducts, shapeProducts }: any) => {
  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <AllProductsHeader />
      <AllProductCardsContent products={products} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const query2 = `*[_type == "category"]`;
  const query3 = `*[_type == 'product']`;
  const data = await client.fetch(query2);
  const products = await client.fetch(query3);
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
      products: products.reverse(),
      boxProducts: products1,
      shapeProducts: products2,
    },
  };
}
export default Index;
