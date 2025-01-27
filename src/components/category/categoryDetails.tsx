import { Container } from "@mui/material";
import { GetQouteForm2 } from "./subcomponents/getQouteForm2";
import { getImg } from "@/services/descriptionService";

export const CategoryDetails = (props: any) => {
  return (
    props.category && (
      <Container maxWidth={"xl"}>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-y-10 md:gap-y-0 md:gap-x-10 xl:gap-x-20">
          {/* <h1 className="text-2xl sm:text-3xl fw_400 primaryText2 mt-3">
              {props.category.name}
            </h1>
            <p className="text-base mb-4 mt-3">{props.category.description}</p> */}
          <div
            style={{ height: "36rem" }}
            className="p-4 overflow-hidden hidden md:flex items-center rounded-2xl justify-center bg-zinc-50"
          >
            {props.category && props.category.imageWithAlt2 ? (
              <img
                src={getImg(props.category.imageWithAlt2).url}
                alt={getImg(props.category.imageWithAlt2).alt}
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            ) : (
              <img
                src={getImg(props.category.imageWithAlt).url}
                alt={getImg(props.category.imageWithAlt).alt}
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            )}
          </div>
          <div>
            <GetQouteForm2
              productName={props.category.name}
              products={props.products}
            />
          </div>
        </div>
      </Container>
    )
  );
};
