import React from "react";
import { CardItem } from "./subcomponents/cardItem";

export const CardsGrid = (props: any) => {
  // const [visibleItems, setVisibleItems] = useState(16);
  // const loadMoreItems = () => {
  //   setVisibleItems((prev) => prev + 8);
  // };
  // const itemsToDisplay = props.cardsData.slice(0, visibleItems);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-12 gap-y-8 gap-x-6">
        {props.cardsData &&
          props.cardsData.length > 0 &&
          props.cardsData.map((data: any, ind: any) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
              key={ind}
            >
              <CardItem data={data} />
            </div>
          ))}
      </div>

      {/* {visibleItems < props.cardsData.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreItems}
            className="px-8 py-3 bg-blue-500 text-white rounded-md"
          >
            Load More Products
          </button>
        </div>
      )} */}
    </div>
  );
};
