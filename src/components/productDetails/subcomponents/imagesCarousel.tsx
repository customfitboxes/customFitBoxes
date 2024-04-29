import { getImg } from "@/services/descriptionService";
import { useMediaQuery } from "@mui/material";
export const ImagesCarousel = (props: any) => {
  const matches = useMediaQuery("(max-width:767px)");
  const matches2 = useMediaQuery("(max-width:400px)");

  return (
    <div
      className="w-full p-1 bg-zinc-100"
      style={{ height: matches ? matches2?  "400px" : "470px" : "100%" }}
    >
      <div
        className="h-full w-full rounded-md bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${getImg(props.myImg).url})` }}
      ></div>
    </div>
  );
};
