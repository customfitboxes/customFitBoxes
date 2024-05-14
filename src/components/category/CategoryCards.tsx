import gridActiveImg from "../../static/gridActiveImg.svg";
import GridBlack from "../../static/2GridBlack.png";
import GreenList from "../../static/GreenList.png";
import blackList from "../../static/blackList.svg";
import search from "../../static/search.svg";
import Image from "next/image";
import { Container, useMediaQuery } from "@mui/material";
import { CardsGrid } from "./cardsGrid";
import { useState } from "react";
import { CardsList } from "./cardsList";

export const CategoryCards = (props: any) => {
  const matches = useMediaQuery("(max-width:640px)");
  const [tab, setTab] = useState(0);
  return (
    <Container maxWidth={"xl"} id="catProducts">
      <div className="pt-10 pb-14">
        <h1 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl primaryText text-center fw_600 leading-tight">
          Explor Packaging Solutions
        </h1>
        <p className="text-center mt-2 leading-5 opacity-70 text-base">
          Discover our range of fully customizable retail boxes tailored to your
          industry - available in an array of unique shapes, custom
          <br className="hidden xl:block" />
          sizes and colors. Our packaging specialists can help you find the
          perfect
        </p>
        <div className="flex items-center justify-between mt-14 gap-y-5 gap-x-10 flex-wrap">
          <div
            className="h-12 w-80 items-center gap-x-3 rounded-md px-3 flex"
            style={{ background: "#F2F2F2" }}
          >
            <Image src={search} alt="" width={20} height={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none bg-transparent text-base shadow-none outline-none"
            />
          </div>
          <div className="hidden sm:flex items-center gap-x-3 ml-auto">
            <button onClick={() => setTab(1)}>
              <Image
                src={tab === 1 ? GreenList : blackList}
                alt="4Grid"
                width={20}
                height={20}
                style={{ minWidth: "20" }}
              />
            </button>
            <button
              onClick={() => setTab(0)}
              style={{ width: "20px", minWidth: "20px" }}
            >
              <Image
                src={tab === 0 ? gridActiveImg : GridBlack}
                alt="gridActiveImg"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        {tab === 0 && <CardsGrid cardsData={props.products} />}
        {tab === 1 && (
          <>
            {matches ? (
              <CardsGrid cardsData={props.products} />
            ) : (
              <CardsList cardsData={props.products} />
            )}
          </>
        )}
      </div>
    </Container>
  );
};
