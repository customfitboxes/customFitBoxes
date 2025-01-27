import React, { useState } from "react";
import { CardListItem } from "./subcomponents/cardListItem";

export const CardsList = (props: any) => {
  const [visibleItems, setVisibleItems] = useState(16); // State to track the number of items shown

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 8); // Show 8 more items on click
  };

  const itemsToDisplay = props.cardsData.slice(0, visibleItems);

  return (
    <div className="mt-10 flex flex-col gap-y-4">
      {props.cardsData &&
        props.cardsData.length > 0 &&
        itemsToDisplay.map((data: any, ind: any) => (
          <div className="w-full" key={ind}>
            <CardListItem data={data} />
          </div>
        ))}

      {visibleItems < props.cardsData.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMoreItems}
           className="px-8 py-3 bg-blue-500 text-white rounded-md"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};
