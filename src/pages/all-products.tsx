import { Navbar } from "../components/shared/navbar/navbar";
import { AllProductsHeader } from '../components/allProducts/allProductsHeader';
import { AllProductCardsContent } from '../components/allProducts/allProductCardsContent';
import { Footer } from "../components/shared/footer/footer";
import React from "react";
import { client } from '../utils/sanityConfig';

const Index = ({ data, products }: any) => {
  return (
    <div>
      <Navbar data={data} />
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
  return {
    props: {
      data: data.reverse(),
      products: products.reverse(),
    },
  };
}
export default Index;
