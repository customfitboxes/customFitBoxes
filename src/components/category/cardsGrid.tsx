import { CardItem } from "./subcomponents/cardItem";

export const CardsGrid = (props: any) => {

  return (
    <div className="mt-10 grid grid-cols-12 gap-y-8 gap-x-6">
      {props.cardsData &&
        props.cardsData.length > 0 &&
        props.cardsData.map((data: any, ind: any) => (
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
            key={ind + 1}
          >
            <CardItem data={data} />
          </div>
        ))}
    </div>
  );
};
