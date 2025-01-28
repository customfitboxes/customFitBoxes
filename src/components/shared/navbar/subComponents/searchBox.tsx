
export const SearchBox = (props: any) => {
  return (
    <div
      className={`rounded-md border bg-white flex items-center gap-x-3 pr-3 pl-4 ${props.height ? props.height : "h-10"
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
      <div className={props.blog && 'bg-[#1a4885] p-2 rounded-full'}>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" >
          <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke={props.blog ? '#fff' : '#a7a7b2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <input type="submit" style={{ display: "none" }} />
    </div>
  );
};
