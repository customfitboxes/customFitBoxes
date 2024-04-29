// import { Container } from "@mui/material";
// import { GetQouteForm2 } from "./subcomponents/getQouteForm2";
// import { useRouter } from "next/router";
// import { getImg } from "@/services/descriptionService";

// export const CategoryHeader = (props: any) => {
//   const router = useRouter();
//   return (
//     props.category && (
//       <Container maxWidth={"lg"}>
//         <div className="flex flex-col md:flex-row gap-y-10 md:items-end justify-between py-10 md:gap-x-10">
//           <div style={{ maxWidth: "680px" }}>
//             <span className="text-xs greenText">
//               <button
//                 className="outline-none shadow-none"
//                 onClick={() => router.push("/")}
//               >
//                 Home
//               </button>{" "}
//               /<span className="text-zinc-600"> {router.query.url}</span>
//             </span>
//             <h1 className="text-4xl fw_600 mt-3">{props.category.name}</h1>
//             <p className="text-sm mb-4 mt-3">{props.category.description}</p>
//             <div className="grayBg roundede-md p-4 h-80 overflow-hidden flex items-center justify-center">
//               <img
//                 src={getImg(props.category.imageWithAlt).url}
//                 alt={getImg(props.category.imageWithAlt).alt}
//                 style={{ objectFit: "contain" }}
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//           <div>
//             <GetQouteForm2 productName={props.category.name} />
//           </div>
//         </div>
//       </Container>
//     )
//   );
// };

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
              <h1 className="fw_600 text-4xl leading-tight md:text-5xl mt-8">
                {props.category.name}
              </h1>
              <p className="text-base mb-4 mt-8">{props.category.description}</p>
              <div className="mt-14 flex items-center flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0 sm:gap-x-5">
                <button
                  onClick={() => router.push("/request-quote")}
                  className="text-white rounded-md w-60 whitespace-nowrap primaryBg py-3 text-base fw_400"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => router.push("/request-quote")}
                  className="text-white rounded-md w-60 whitespace-nowrap primaryBg py-3 text-base fw_400"
                >
                  Chosoe Packaging Style
                </button>
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
