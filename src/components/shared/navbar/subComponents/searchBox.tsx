import Image from "next/image";
import searchIcon from "../../../../static/searchIcon.svg";
export const SearchBox = (props: any) => {
  return (
    <div
      className={`rounded-md border bg-white flex items-center gap-x-3 pr-3 pl-4 ${
        props.height ? props.height : "h-10"
      }`}
      style={{ boxShadow: "0 0 10px -3px lightGrey" }}
    >
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e: any) => {
          props.onChange(e.target.value);
        }}
        className="w-full traking-wider font-thin text-xs sm:text-sm h-full text-black"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
      />
      <Image src={searchIcon} alt="searchIcon" width={20} height={20} />
      <input type="submit" style={{ display: "none" }} />
    </div>
  );
};
