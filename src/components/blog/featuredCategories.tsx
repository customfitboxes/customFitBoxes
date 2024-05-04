import { blogCategories } from "./tabsGroup";

export const FeaturedCategories = (props: any) => {
  const getBlogsByCategory = (category: any) => {
    let res: any =
      props.blogs && props.blogs.length > 0
        ? props.blogs.filter((blog: any) => blog.blogCatetgory === category)
        : [];
    return res.length;
  };
  return (
    <div className="w-full ">
      <h1 className="fw_600 text-2xl primaryText">Featured Categories:</h1>
      <div
        style={{ background: "#EFFCF9" }}
        className="w-full flex flex-col gap-y-3 p-3 mt-3 rounded-xl"
      >
        {blogCategories.map((category: any, ind: any) => (
          <div
            key={ind + 1}
            className="flex items-center gap-x-5 justify-between bg-white rounded-xl px-6 py-5"
          >
            <p className="primaryText2 text-base fw_600">{category}</p>
            <p className="primaryText2 text-base fw_600">
              {category === "All"
                ? props.blogs.length
                : getBlogsByCategory(category)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
