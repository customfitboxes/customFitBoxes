import { AllProductCardsContent } from "@/components/allProducts/allProductCardsContent";
import { SearchPageHeader } from "@/components/search/searchPageHeader";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { SearchBox } from "@/components/shared/navbar/subComponents/searchBox";
import NotFoundComp from "@/components/shared/notFoundComp";
import { client } from "@/utils/sanityConfig";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index = ({ data, products, boxProducts, shapeProducts }: any) => {
  const [list, setList] = useState([]);
  const router: any = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (products) {
      if (router.query.name) {
        let res = products.filter((product: any) =>
          product.name.toLowerCase().includes(router.query.name.toLowerCase())
        );
        setList(res);
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [products, router.query.name]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchVal) {
      router.push(`/search?name=${searchVal}`);
      setSearchVal("");
    }
  };

  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <div
        className="h-32 sm:h-60 flex items-center justify-center px-4"
        style={{ background: "#EFFCF9" }}
      >
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center gap-x-2 sm:gap-x-4 w-full sm:w-max"
        >
          <div className="w-full sm:w-96">
            <SearchBox
              placeholder="Search"
              height="h-10 sm:h-12"
              value={searchVal}
              onChange={(val: any) => setSearchVal(val)}
            />
          </div>
          <button
            type="submit"
            className="sm:uppercase text-xs sm:text-sm w-32 h-10 sm:h-12 hover:scale-95 duration-300 primaryBg text-white fw_400 rounded-md shadow-xl mx-auto"
          >
            Search
          </button>
        </form>
      </div>
      {list && list.length > 0 ? (
        <div>
          <SearchPageHeader length={list && list.length} />
          <AllProductCardsContent products={list} />
        </div>
      ) : show ? (
        <NotFoundComp
          heading={"Data Not Found!"}
          desc={[
            "Sorry, The Data you are looking for is not found.",
            <br className="hidden sm:block" />,
            "Please try to search another products.",
          ]}
        />
      ) : (
        <NotFoundComp
          heading={"Search your interest!"}
          desc={[
            "Search products according to your interest,",
            <br className="hidden sm:block" />,
            "You'll be 100% satisfy with our products.",
          ]}
        />
      )}
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const query = `*[_type == 'product']`;
  const query2 = `*[_type == "category"]`;
  const data = await client.fetch(query2);
  const products = await client.fetch(query);
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
      products: products,
      boxProducts: products1,
      shapeProducts: products2,
    },
  };
}
export default Index;
