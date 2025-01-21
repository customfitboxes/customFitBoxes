import { linksData } from "@/demoData/navLinksData";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className={`fixed h-full w-full z-50 left-0 right-0 flex flex-col gap-y-14 items-center justify-center primaryBg bg-opacity-40 ${
        props.show ? "top-0" : "-top-full"
      } duration-300`}
    >
      <button
        onClick={() => props.setShow(false)}
        className="absolute top-5 right-5 text-2xl"
      >
        {/* <FontAwesomeIcon icon={faClose} /> */}
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className="svg-inline--fa fa-xmark " role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
      </button>
      <ul className="flex flex-col items-center gap-y-10">
        {linksData.map((d: any, ind: any) => (
          <li
            onClick={() => router.push(d.path)}
            className={`cursor-pointer fw_400 text-sm whitespace-nowrap ${
              isActive(d.active) ? "activeLink" : "inactiveLink"
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
