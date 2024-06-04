import { getImg } from "@/services/descriptionService";
import { useMediaQuery } from "@mui/material";
import moment from "moment";

export const BlogDetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <div className="py-4">
      <p className="text-2xl sm:text-3xl xl:text-4xl fw_600 mt-4">{props.blog.name}</p>
      <p className="mt-2 sm:mt-0">{moment(props.blog._createdAt).format("DD MMM YYYY")}</p>
      <img
        src={getImg(props.blog.imageWithAlt).url}
        alt={getImg(props.blog.imageWithAlt).alt}
        style={{ objectFit: matches ? "contain" : "cover", height: matches? "max-content" : "30rem" }}
        className="w-full h-full rounded-md mt-5"
      />
    </div>
  );
};
