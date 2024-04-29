import { getImg } from "@/services/descriptionService";
import { useRouter } from "next/router";
import { getSlug } from "@/services/categoriesService";

export const CardItem = (props: any) => {
  const router = useRouter();
  return (
    <div
      className="overflow-hidden cursor-pointer bg-white"
      onClick={() => router.push("/" + getSlug(props.data.slug))}
    >
      <div
        className="w-full h-72 lg:h-96 p-4 flex items-center justify-center overflow-hidden hover:drop-shadow-md duration-300"
        style={{ background: "#eaf0f5" }}
      >
        {props.data.images &&
          props.data.images.length > 0 &&
          props.data.images[0] && (
            <img
              src={getImg(props.data.images[0]).url}
              alt={getImg(props.data.images[0]).alt}
            />
          )}
      </div>
      <div className="pt-3 px-4">
        <h3 className="text-base text-center fw_600">{props.data.name}</h3>
      </div>
    </div>
  );
};
