import { CardListItem } from "./subcomponents/cardListItem";

export const CardsList = (props: any) => {
  return (
    <div className="mt-10 flex flex-col gap-y-4">
      {props.cardsData.map((data: any, ind: any) => (
        <div className="w-full" key={ind + 1}>
          <CardListItem data={data} />
        </div>
      ))}
    </div>
  );
};
