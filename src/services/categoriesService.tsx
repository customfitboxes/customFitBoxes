import { client } from "@/utils/sanityConfig";
import { groq } from "next-sanity";

export async function getServerSideProps() {
  const cat1Name = "Box by Material";
  const cat2Name = "Shapes & Styles";
  const query = `*[_type == "category"]`;
  const query2 = `*[_type == "category" && featured == true]`;
  const query3 = `*[_type == "testimonial"]`;
  const query4 = `*[_type == 'product']`;
  const query5 = `*[ _type == "category" && name  == "${cat1Name}"][0]`;
  const query6 = groq`*[_type == 'product' && _id in $p_ids]`;

  const query7 = `*[ _type == "category" && name  == "${cat2Name}"][0]`;
  const query8 = groq`*[_type == 'product' && _id in $p_ids2]`;

  const data = await client.fetch(query);
  const data2 = await client.fetch(query2);
  const data3 = await client.fetch(query3);
  const products = await client.fetch(query4);

  const cat1 = await client.fetch(query5, { cat1Name });
  const cat2 = await client.fetch(query7, { cat2Name });

  let p_ids: any = [];
  if (cat1 && cat1.products && cat1.products.length > 0) {
    cat1.products.forEach((item: any) => p_ids.push(item._ref));
  }

  let p_ids2: any = [];
  if (cat2 && cat2.products && cat2.products.length > 0) {
    cat2.products.forEach((item: any) => p_ids2.push(item._ref));
  }

  const products1 = await client.fetch(query6, { p_ids });
  const products2 = await client.fetch(query8, { p_ids2 });

  return {
    props: {
      data: data.reverse(),
      featuredCategories: data2,
      testimonials: data3,
      products,
      boxProducts: products1,
      shapeProducts: products2,
    },
  };
}

export const getSlug = (slug: any) => {
  if (slug && slug.current) {
    return slug.current;
  }
  return "";
};

export const resetForm = (finalData: any) => {
  let obj = {};
  Object.keys(finalData).forEach((key) => {
    obj = { ...obj, [key]: "" };
  });
  return obj;
};

export const setFormData = (formData: any, finalData: any) => {
  Object.keys(finalData).forEach((key) => {
    formData.append(key, finalData[key]);
  });
};
