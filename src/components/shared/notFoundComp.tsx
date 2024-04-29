import { Container, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const NotFoundComp = (props: any) => {
  const matches = useMediaQuery("(max-width:640px)");
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <div className="py-20">
        <h1
          className="fw_700 text-center"
          style={{ fontSize: matches ? "1.5rem" : "3rem" }}
        >
          {props.heading}
        </h1>
        <p className="text-base leading-5 mt-5 text-center">{props.desc}</p>
        <div className="flex justify-center w-full mt-8">
          <button
            onClick={() => router.push("/")}
            className="uppercase text-sm w-52 py-2 hover:scale-95 duration-300 primaryBg text-white fw_400 rounded-md shadow-xl mx-auto"
          >
            Got to HomePage
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundComp;
