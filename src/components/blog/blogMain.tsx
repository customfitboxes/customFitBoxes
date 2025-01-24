import React, { useState } from "react";
import { BlogCard } from "./blogCard";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import { getImg } from "@/services/descriptionService";
import { getSlug } from "@/services/categoriesService";
import { useRouter } from "next/router";

export const BlogMain = (props: any) => {
  const router = useRouter();
  const [visibleBlogs, setVisibleBlogs] = useState(8); // Track how many blogs are displayed

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 8); // Show 8 more blogs when clicked
  };

  const blogsToDisplay = props.blogs.slice(0, visibleBlogs);

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
        onClick={() => router.push("/blog/" + getSlug(props.blogs[0].slug))}
        src={getImg(props.blogs[0].imageWithAlt).url}
        alt={getImg(props.blogs[0].imageWithAlt).alt}
        style={{ objectFit: "cover" }}
        className="w-full h-full cursor-pointer"
      />
      <div className="bg-[#f5f5f5] p-5 rounded-b">


        <p
          className="primaryText fw_600 text-2xl mt-3 cursor-pointer"
          onClick={() => router.push("/blog/" + getSlug(props.blogs[0].slug))}
        >
          {props.blogs[0].name}
        </p>
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
        <p className="text-base mt-5 line-clamp-4">
          <PortableText value={props.blogs[0].description} components={{ block }} />
        </p>
      </div>

      {/* Display the remaining blogs */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-8">
        {blogsToDisplay.map((blog: any, index: number) => (
          index !== 0 && (
            <BlogCard key={blog.slug} blog={blog} />
          )
        ))}
      </div>

      {/* Load more button */}
      {visibleBlogs < props.blogs.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreBlogs}
            className="px-8 py-3 bg-blue-500 text-white rounded-md"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className="h-60">
      <h1 className="text-2xl sm:text-4xl text-center">No Blog found!</h1>
    </div>
  );
};
