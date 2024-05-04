import { BlogCard } from "./blogCard";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import { getImg } from "@/services/descriptionService";

export const BlogMain = (props: any) => {
  const block = {
    h1: ({ children }: any) => (
      <h1 className="text-3xl fw_600 mb-2 mt-4 primaryText2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl fw_600 mb-2 mt-4 primaryText2">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl fw_600 mb-2 mt-4 primaryText2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg fw_600 mb-2 mt-4 primaryText2">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base fw_600 mb-2 mt-4 primaryText2">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-sm fw_600 mb-2 mt-4 primaryText2">{children}</h6>
    ),
  };
  return props.blogs && props.blogs.length > 0 ? (
    <div>
      <img
        src={getImg(props.blogs[0].imageWithAlt).url}
        alt={getImg(props.blogs[0].imageWithAlt).alt}
        style={{ objectFit: "cover" }}
        className="w-full h-full"
      />
      <p className="primaryText fw_600 text-2xl mt-3">{props.blogs[0].name}</p>
      <div className="flex items-center gap-x-3 mt-5">
        <img
          src={getImg(props.blogs[0].userImage).url}
          alt={getImg(props.blogs[0].userImage).alt}
          className="h-8 w-8 rounded-full object-cover"
        />
        <p className="text-xs">
          {props.blogs[0].username}, Last Updated:{" "}
          {moment(props.blogs[0].date).format("MMM DD, YYYY")}
        </p>
      </div>
      <p className="text-base mt-5">
        <PortableText
          value={props.blogs[0].description}
          components={{ block }}
        />
      </p>
      {props.blogs && props.blogs.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-8">
          {props.blogs.map(
            (blog: any, index: number) =>
              index !== 0 && <BlogCard key={index + 1} blog={blog} />
          )}
        </div>
      )}
    </div>
  ) : (
    <div className="h-60">
      <h1 className="text-2xl sm:text-4xl text-center">No Blog found!</h1>
    </div>
  );
};
