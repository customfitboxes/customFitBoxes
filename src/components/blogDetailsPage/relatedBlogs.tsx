import { getSlug } from "@/services/categoriesService";
import { getImg } from "@/services/descriptionService";
import { useRouter } from "next/router";

export const RelatedBlogs = (props: any) => {
  const router = useRouter();
  return (
    props.blogs &&
    props.blogs.length > 0 && (
      <div className="w-full mt-10">
        <h1 className="fw_600 text-2xl primaryText">Related Posts:</h1>
        <div
          style={{ background: "#EFFCF9" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-x-4 xl:gap-x-0 gap-y-4 p-2 sm:p-3 mt-3 rounded-xl"
        >
          {props.blogs.map((item: any, ind: any) => (
            <div
              key={ind}
              onClick={() => router.push("/blog/" + getSlug(item.slug))}
              className="flex items-center gap-x-2 sm:gap-x-5 bg-white rounded-xl p-2 sm:p-4 cursor-pointer"
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  src={getImg(item.imageWithAlt).url}
                  alt={getImg(item.imageWithAlt).alt}
                  style={{ objectFit: "cover" }}
                  className="w-40 h-20"
                />
              </div>
              <p className="primaryText2 text-sm md:text-base fw_600">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  );
};
