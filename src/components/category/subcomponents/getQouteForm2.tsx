import { resetForm } from "@/services/categoriesService";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import capchaIcon from "../../../static/capchaIcon.svg";
// import Image from "next/image";

export const GetQouteForm2 = (props: any) => {
  const matches2 = useMediaQuery("(max-width:850px)");
  const router = useRouter();
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    productName: props.productName,
    attachment: null, // New state for the attachment
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

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFinalData({ ...finalData, attachment: file });
    }
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form fields to FormData
    Object.keys(finalData).forEach((key) => {
      if (finalData[key] !== null) {
        formData.append(key, finalData[key]);
      }
    });

    try {
      const response = await fetch("https://formspree.io/f/mzbnokyz", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
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
        <p className="fw_600 m-0 p-0 text-xl lg:text-2xl">Get an Instant Quote</p>
      </div>
      <form
        onSubmit={sendEmail}
        className={`grid grid-cols-12 gap-x-4 ${matches2 ? "gap-y-6 sm:gap-3" : "gap-6"} pt-3 pb-5 px-3 lg:p-5`}
        style={{ background: "#F5F5F5" }}
      >
        {/* Form Fields */}
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
        <div className="col-span-12">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="h-10 w-full border-b border-zinc-500 bg-transparent text-base outline-none"
          />
        </div>

        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-4">
          <input
            type="number"
            value={finalData.depth}
            onChange={(e: any) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>

        <div className="col-span-12">
          <label className="text-base fw_400">Description</label>
          <textarea
            rows={6}
            required
            value={finalData.description}
            onChange={(e) => onchnage("description", e.target.value)}
            className="w-full mt-1 border border-zinc-400 bg-transparent px-2 py-1 text-xs lg:text-sm outline-none shadow-none"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Attachment Field */}
        <div className="col-span-6">
          {/* <label className="text-base fw_400">Attachment (Optional)</label> */}
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full  border-b pb-2 border-zinc-500 bg-transparent text-xs lg:text-sm outline-none"
          />
        </div>

        <div className="col-span-6 flex justify-end">
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
