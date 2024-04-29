import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

export const Categories = (props: any) => {
  const matches = useMediaQuery("(max-width:767px)");
  const router = useRouter();
  return (
    <div>
      <p className="fw_600 text-xl text-black sm:text-2xl">{props.title}</p>
      <ul className="mt-8 flex flex-col gap-y-5">
        {props.list.map((data: any, ind: any) => (
          <li
            onClick={() => router.push(data.link)}
            key={ind + 1}
            style={{ fontSize: matches ? "14px" : "15px" }}
            className="fw_400 cursor-pointer text-black hover:underline"
          >
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
