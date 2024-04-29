import { Container } from "@mui/material";
import { GetQouteForm2 } from "./subcomponents/getQouteForm2";
import { getImg } from "@/services/descriptionService";

export const CategoryDetails = (props: any) => {
  return (
    props.category && (
      <Container maxWidth={"xl"}>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-y-10 md:gap-y-0 md:gap-x-10 lg:gap-x-20">
          <div>
            <h1 className="text-2xl sm:text-3xl fw_400 primaryText2 mt-3">
              {props.category.name}
            </h1>
            <p className="text-base mb-4 mt-3">{props.category.description}</p>
            <div className="h-96 p-2 overflow-hidden flex items-center justify-center bg-zinc-50">
              <img
                src={getImg(props.category.imageWithAlt).url}
                alt={getImg(props.category.imageWithAlt).alt}
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            </div>
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
