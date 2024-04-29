import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { Footer } from "@/components/shared/footer/footer";
import { useRouter } from "next/router";

const ThankYou = ({ data }: any) => {
  const router = useRouter();
  return (
    <div>
      <Navbar data={data} />
      <div
        className="bg-center bg-cover flex flex-col items-center justify-center w-fullpx-5"
        style={{ background: "#EFFCF9", height: "30rem" }}
      >
        <h1
          className="text-center primaryText fw_600"
          style={{ fontSize: "8rem" }}
        >
          Thank you
        </h1>
        <p className="text-center text-black fw_400">
          We really appereciate your submission, We'll get back to you very
          soon!
        </p>
        <div className="flex justify-center w-full mt-8">
          <button
            onClick={() => router.push("/")}
            className="uppercase text-sm w-52 py-2 hover:scale-95 duration-300 primaryBg text-white fw_400 rounded-md shadow-xl mx-auto"
          >
            Explore More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default ThankYou;
