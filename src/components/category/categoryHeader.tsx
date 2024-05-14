import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { getImg } from "@/services/descriptionService";

export const CategoryHeader = (props: any) => {
  const router = useRouter();
  return (
    <div className="pb-8 pt-5 md:py-10" style={{ background: "#EFFCF9" }}>
      <Container maxWidth={"xl"}>
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-6 flex items-center">
            <div>
              <span className="text-xs greenText">
                <button
                  className="outline-none shadow-none text-blue-600 fw_400"
                  onClick={() => router.push("/")}
                >
                  Home
                </button>{" "}
                /<span className="text-zinc-600 fw_400"> {props.category.name}</span>
              </span>
              <h1 className="fw_600 text-4xl leading-tight md:text-5xl mt-8">
                {props.category.name}
              </h1>
              <p className="text-base mb-4 mt-8">
                {props.category.description}
              </p>
              <div className="mt-14 flex items-center flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0 sm:gap-x-5">
                <button
                  onClick={() => router.push("/request-quote")}
                  className="text-white rounded-md w-60 whitespace-nowrap primaryBg py-3 text-base fw_400"
                >
                  Request a Quote
                </button>
                <a
                  href="#catProducts"
                  className="text-white rounded-md w-60 whitespace-nowrap primaryBg py-3 text-base fw_400 text-center decoration-none border-none outline-none"
                >
                  Chosoe Packaging Style
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-span-12 lg:col-span-6 p-0 flex items-center justify-center"
            style={{ maxHeight: "32rem" }}
          >
            <img
              src={getImg(props.category.imageWithAlt).url}
              alt={getImg(props.category.imageWithAlt).alt}
              style={{ objectFit: "contain" }}
              className="w-full h-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
