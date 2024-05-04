import { resetForm } from "@/services/categoriesService";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import capchaIcon from "../../../static/capchaIcon.svg";
import Image from "next/image";

export const GetQouteForm2 = (props: any) => {
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
    <div
      className="overflow-hidden rounded-xl drop-shadow-xl w-full"
    >
      <div className="primaryBg flex py-4 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl lg:text-2xl">
          Get an Instant Quote
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        className={`grid grid-cols-12 ${
          matches2 ? "gap-y-6 sm:gap-3" : "gap-6"
        } pt-3 pb-5 px-3 lg:p-5`}
        style={{ background: "#F5F5F5" }}
      >
        <div className="col-span-12 sm:col-span-6">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Name"
            className="h-10 w-full border-b border-zinc-500 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="h-10 w-full border-b border-zinc-500 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="h-10 w-full border-b border-zinc-500 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="number"
            required
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity MQ(200)"
            className="h-10 w-full border-b border-zinc-500 bg-transparent text-base outline-none"
          />
        </div>
        <div className="col-span-12">
          <select
            required
            value={finalData.productName}
            onChange={(e) => onchnage("productName", e.target.value)}
            className="h-10 w-full border-b border-zinc-500 bg-transparent text-base outline-none"
          >
            {props.products &&
              props.products.length > 0 &&
              props.products.map((product: any, index: any) => (
                <option key={index + 1}>{product.name}</option>
              ))}
            <option>Other</option>
          </select>
        </div>
        <div className="col-span-12">
          <label className="text-base fw_400">Description</label>
          <textarea
            rows={6}
            required
            value={finalData.description}
            onChange={(e) => onchnage("description", e.target.value)}
            className="w-full mt-2 border border-zinc-400 bg-transparent px-2 py-1 text-xs lg:text-sm outline-none shadow-none"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="col-span-12">
          <div className="flex justify-between px-3 py-2 border border-zinc-400 w-72 sm:w-80">
            <label className="flex items-center gap-x-2 sm:gap-x-4 text-xs sm:text-sm">
              <input type="checkbox" className="w-5 sm:w-6 h-5 sm:h-6 rounded-sm" />
              I'm not a Robot
            </label>
            <div>
              <Image
                src={capchaIcon}
                alt="capchaIcon"
                width={40}
                className="ml-3"
              />
              <p className="text-xs leading-4">
                reCAPTCHA <br />
                Privacy - Terms
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex justify-center mt-4">
          <button
            type="submit"
            className="primaryBg fw_400 py-4 px-20 rounded-md text-sm lg:text-base text-white"
          >
            Get a Quote
          </button>
        </div>
      </form>
    </div>
  );
};
