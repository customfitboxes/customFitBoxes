import { PortableText } from "@portabletext/react";
import { getImg } from "@/services/descriptionService";
import { getSlug } from "@/services/categoriesService";
import { useRouter } from "next/router";
import BlogAuthor from "./blog-author";

export const BlogCard = (props: any) => {
  const router = useRouter();

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
  return (
    props.blog && (
      <div
        onClick={() => router.push("/blog/" + getSlug(props.blog.slug))}
        className="rounded-md cursor-pointer overflow-hidden w-full"
        style={{ background: "#F5F5F5" }}
      >
        <div className="h-40 sm:h-60 xl:h-80">
          <img
            src={getImg(props.blog.imageWithAlt).url}
            alt={getImg(props.blog.imageWithAlt).alt}
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </div>
        <div className="pt-3 md:pb-8 px-2 sm:px-4">
          <p className="primaryText fw_600 text-center md:text-left text-sm sm:text-lg xl:text-xl mt-3">
            {props.blog.name}
          </p>
          <BlogAuthor props={props} />
          <div className="hidden md:block">
            <p className="text-sm xl:text-base big_four_lines_elipsis">
              <PortableText
                value={props.blog.description}
                components={{ block }}
              />
            </p>
          </div>
        </div>
      </div>
    )
  );
};
