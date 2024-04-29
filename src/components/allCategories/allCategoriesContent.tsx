import { getSlug } from "@/services/categoriesService";
import { getIcon } from "@/services/descriptionService";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

export const AllCategoriesContent = (props: any) => {
  const router = useRouter();
  return (
    <Container maxWidth="xl">
      {props.data && props.data.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 pb-14">
          {props.data.map((category: any, index: any) => (
            <div
              onClick={() => router.push(`/category/${getSlug(category.slug)}`)}
              key={index + 1}
              className="flex flex-col items-center justify-center gap-x-3 cursor-pointer hover:font-bold hover:text-black rounded-lg shadow-md hover:shadow-lg px-3 h-40 border"
            >
              <div>
                <img
                  src={getIcon(category.iconWithAlt).url}
                  width={60}
                  height={60}
                  alt={getIcon(category.iconWithAlt).alt}
                />
              </div>
              <h2 className="text-sm md:text-base fw_400 text-center">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-60">
          <h1 className="text-2xl sm:text-4xl text-center">
            No category found!
          </h1>
        </div>
      )}
    </Container>
  );
};
