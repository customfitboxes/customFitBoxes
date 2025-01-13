import { getImg } from "@/services/descriptionService";
import { Container, useMediaQuery } from "@mui/material";
import BlogAuthor from "../blog/blog-author";
import Breadcrumb from "./bredcrumb";

export const BlogDetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <main className="py-4 bg-[#effcf9] w-full pb-20">
      <Container maxWidth="xl">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
        <div className="flex-1">
          <Breadcrumb name={props.blog.name}/>
          <p className="text-2xl sm:text-3xl xl:text-4xl fw_600 mt-4">{props.blog.name}</p>
          <BlogAuthor props={props} newLine/>
        </div>
        <div className="flex-1 xl:max-w-[550px] w-full relative">
          <img
            src={getImg(props.blog.imageWithAlt).url}
            alt={getImg(props.blog.imageWithAlt).alt}
            style={{ objectFit: matches ? "contain" : "cover", height: matches ? "max-content" : "30rem" }}
            className="w-full md:max-w-[530px] max-h-[350px] z-[2] relative h-full rounded-md mt-5"
          />
          <img src="/assets/images/single_blog_shape.svg" alt="" className="absolute -bottom-24 z-[1] -left-32"/>
        </div>
      </div>
      </Container>
    </main>
  );
};
