import React from "react";

export const blogCategories = [
  "All",
  "Featured",
  "Step-By-Step Guides",
  "Retail Packaging",
  "Box Customization",
  "Packaging Glossary",
  "Inspiration",
];
export const TabsGroup = (props: any) => {
  const [selected, setSelected] = React.useState("All");
  const handleClicked = (category: any) => {
    if (category === "All") return props.setBlogsData(props.blogs);
    let res: any =
      props.blogs && props.blogs.length > 0
        ? props.blogs.filter((blog: any) => blog.blogCatetgory === category)
        : [];
    setSelected(category);
    props.setBlogsData(res);
  };
  return (
    <div className="flex items-center justify-center md:justify-start gap-x-3 gap-y-3 flex-wrap fw_400">
      {blogCategories.map((category, ind: any) => (
        <button
          key={ind + 1}
          onClick={() => handleClicked(category)}
          className={`${
            selected === category ? "primaryBg text-white" : "bg-zinc-200"
          } rounded-lg py-2 px-4 text-sm sm:text-base`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
