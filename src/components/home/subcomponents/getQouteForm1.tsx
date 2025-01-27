import { resetForm } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GetQouteForm1 = (props: any) => {
  const [finalData, setFinalData] = useState<any>({});
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    if (props.products && props.products.length > 0)
      setFinalData({ ...finalData, productName: props.products[0].name });
  }, [props.products]);

  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const router = useRouter();

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    // Append form data
    for (let key in finalData) {
      formData.append(key, finalData[key]);
    }
    // Append file if exists
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("https://formspree.io/f/mzbnokyz", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFinalData({ ...resetForm(finalData), color: "" });
        setFile(null); // Reset file after submission
        router.push("/thank-you");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email");
    }
  };

  return (
    <div className="border border-black rounded-xl px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-16 relative w-full lg:w-11/12 mx-auto">
      <form
        onSubmit={sendEmail}
        className="grid grid-cols-12 gap-x-6 sm:gap-x-6 gap-y-6 md:gap-y-4 sm:p-3"
      >
        <div className="col-span-6 sm:col-span-3 md:col-span-4">
          <input
            type="number"
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <input
            type="number"
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-4">
          <input
            type="number"
            value={finalData.depth}
            onChange={(e) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <select
            value={finalData.unit}
            onChange={(e) => onchnage("unit", e.target.value)}
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          >
            <option>Select Unit</option>
            <option>Inches</option>
            <option>CM</option>
            <option>MM</option>
          </select>
        </div>
        {/* <div className="col-span-12 sm:col-span-6">
          <input
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={finalData.deadline}
            onChange={(e) => onchnage("deadline", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div> */}
        {props.products && props.products.length > 0 && (
          <div className="col-span-12 sm:col-span-6">
            <select
              required
              value={finalData.productName}
              onChange={(e) => onchnage("productName", e.target.value)}
              className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
            >
              {props.products.map((product: any, index: any) => (
                <option key={index + 1}>{product.name}</option>
              ))}
              <option>Other</option>
            </select>
          </div>
        )}
        <div className="col-span-12 sm:col-span-6">
          <select
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          >
            <option>Color</option>
            <option>1-Color</option>
            <option>2-Color</option>
            <option>3-Color</option>
            <option>4-Color</option>
            <option>4/1-Color</option>
            <option>4/2-Color</option>
            <option>4/3-Color</option>
            <option>4/4-Color</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="number"
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Enter your name"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="tel"
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="+1 123-123-1234"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        {/* Attachment input */}
        <div className="col-span-12 sm:col-span-6">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>

        <div className="col-span-12  sm:col-span-6">
          <textarea
            rows={1}
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
            className="h-10 w-full mx-auto border-b border-zinc-800 py-1 bg-transparent text-sm sm:text-base outline-none shadow-none"
            placeholder="Write your message"
          ></textarea>
        </div>

        <div className="absolute -bottom-4 flex justify-center left-0 w-full z-10">
          <button
            type="submit"
            className="primaryBg hover:scale-105 transition-all duration-200 fw_400 h-12 px-10 rounded-md text-base uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};
