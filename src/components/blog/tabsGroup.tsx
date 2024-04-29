export const blogCategories = [
  "All",
  "Featured",
  "Step-By-Step Guides",
  "Retail Packaging",
  "Box Customization",
  "Packaging Glossary",
  "Inspiration",
];
export const TabsGroup = () => {
  return (
    <div className="flex items-cewnter gap-x-3 gap-y-3 flex-wrap fw_400">
      {blogCategories.map((category, ind: any) => (
        <button
          key={ind + 1}
          className={`bg-zinc-200 rounded-lg py-2 px-4 text-base`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
