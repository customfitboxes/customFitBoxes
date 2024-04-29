import Image from "next/image";
import popular from "../../static/popular.png";
const data = [1, 2, 3, 4, 5, 6];
export const PopularPosts = () => {
  return (
    <div className="w-full ">
      <h1 className="fw_600 text-2xl primaryText">Most Popular Posts:</h1>
      <div
        style={{ background: "#EFFCF9" }}
        className="w-full flex flex-col gap-y-4 p-3 mt-3 rounded-xl"
      >
        {data.map((item) => (
          <div
            key={item}
            className="flex items-center gap-x-5 bg-white rounded-xl p-4"
          >
            <div className="rounded-lg">
              <Image src={popular} alt="popular" width={200} />
            </div>
            <p className="primaryText2 text-base fw_600">
              10 Small Business Packaging Ideas to Elevate Your Brand
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
