import { linksData } from "@/demoData/navLinksData";
import { useRouter } from "next/router";

export const SmallNav = (props: any) => {
  const router = useRouter();

  const isActive = (p: any) => {
    if (router.pathname.includes(p)) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`fixed h-full w-full z-50 left-0 right-0 flex flex-col gap-y-14 items-center justify-center primaryBg bg-opacity-40 ${props.show ? "top-0" : "-top-full"
        } duration-300`}
    >
      <button
        onClick={() => props.setShow(false)}
        className="absolute top-5 right-5 text-2xl"
      >
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#fff" >
          <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#fff" />
        </svg>
      </button>
      <ul className="flex flex-col items-center gap-y-10">
        {linksData.map((d: any, ind: any) => (
          <li
            onClick={() => router.push(d.path)}
            className={`cursor-pointer fw_400 text-sm whitespace-nowrap ${isActive(d.active) ? "activeLink" : "inactiveLink"
              }`}
            key={ind + 1}
          >
            {d.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2 sm:gap-x-8">
        <button
          onClick={() => router.push("/contact-us")}
          className={`text-xs fw_600 bg-white primaryText greenBorder py-2 w-36 sm:w-40 buttonBorderRadius`}
        >
          Request a Sample Pack
        </button>
        <button
          onClick={() => router.push("/request-quote")}
          className="text-xs fw_600 bg-white primaryText greenBorder py-2 w-40 buttonBorderRadius"
        >
          Request a quote
        </button>
      </div>
    </div>
  );
};
