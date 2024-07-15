import React from "react";
import { Navbar } from "../components/shared/navbar/navbar";
import { AllCategoriesHeader } from "../components/allCategories/allCategoriesHeader";
import { AllCategoriesContent } from "../components/allCategories/allCategoriesContent";
import { Footer } from "../components/shared/footer/footer";
import { getServerSideProps } from "../services/categoriesService";

const Index = ({ data, boxProducts, shapeProducts }: any) => {
  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <AllCategoriesHeader />
      <AllCategoriesContent data={data} />
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
