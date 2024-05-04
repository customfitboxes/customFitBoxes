import { resetForm } from "@/services/categoriesService";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const BlogQouteForm = (props: any) => {
  const matches2 = useMediaQuery("(max-width:850px)");
  const router = useRouter();
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    productName: props.productName,
  });

  useEffect(() => {
    if (props.productName) {
      setFinalData({ ...finalData, productName: props.productName });
    }
  }, []);
  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mjvnrldz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        setFinalData({ ...resetForm(finalData), color: "1-Color" });
        router.push("/thank-you");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email");
    }
  };
  return (
    <div className="overflow-hidden rounded-xl drop-shadow-xl w-full">
      <div className="primaryBg flex py-4 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl lg:text-2xl">
          Get an Instant Quote
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        className={`grid grid-cols-12 ${
          matches2 ? "gap-y-6 sm:gap-6" : "gap-6"
        } pt-3 pb-5 px-3 lg:p-5`}
        style={{ background: "#F5F5F5" }}
      >
        <div className="col-span-12 sm:col-span-6 lg:col-span-12">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Name"
            className="h-10 w-full border-b border-blue-700 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-12">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="h-10 w-full border-b border-blue-700 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-12">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="h-10 w-full border-b border-blue-700 bg-transparent text-base outline-none"
          />
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-12">
          <input
            type="text"
            required
            value={finalData.description}
            onChange={(e) => onchnage("description", e.target.value)}
            placeholder="Description"
            className="h-10 w-full border-b border-blue-700 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12">
          <input
            type="text"
            required
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
            placeholder="Enter your message"
            className="h-10 w-full border-b border-blue-700 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12 flex justify-center mt-4">
          <button
            type="submit"
            className="primaryBg fw_400 py-4 w-full rounded-md text-sm lg:text-base text-white"
          >
            Submit Quote
          </button>
        </div>
      </form>
    </div>
  );
};
