import { getImg } from "@/services/descriptionService";

export const PopularPosts = (props: any) => {
  return (
    props.blogs &&
    props.blogs.length > 0 && (
      <div className="w-full ">
        <h1 className="fw_600 text-2xl primaryText">Most Popular Posts:</h1>
        <div
          style={{ background: "#EFFCF9" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-x-4 lg:gap-x-0 gap-y-4 p-3 mt-3 rounded-xl"
        >
          {props.blogs.map((item: any, ind: any) => (
            <div
              key={ind}
              className="flex items-center gap-x-5 bg-white rounded-xl p-4"
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
