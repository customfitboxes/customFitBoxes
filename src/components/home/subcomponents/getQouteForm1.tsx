import { resetForm } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GetQouteForm1 = (props: any) => {
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    unit: "Inches",
  });

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
    try {
      const response = await fetch("https://formspree.io/f/mzbnokyz", {
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
    <div className="border border-black px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-16 relative w-full lg:w-11/12 mx-auto">
      <form
        onSubmit={sendEmail}
        className="grid grid-cols-12 gap-x-6 sm:gap-x-6 gap-y-6 md:gap-y-4 sm:p-3"
      >
        <div className="col-span-6 sm:col-span-3 md:col-span-4">
          <input
            type="number"
            required
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <input
            type="number"
            required
            value={finalData.depth}
            onChange={(e) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-4">
          <input
            type="number"
            required
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <select
            required
            value={finalData.unit}
            onChange={(e) => onchnage("unit", e.target.value)}
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          >
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
            required
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
          >
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
            required
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
            required
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
        <div className="col-span-12 mt-5 flex justify-center">
          <textarea
            rows={1}
            required
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
            className="w-full lg:w-1/2 mx-auto border-b border-zinc-800 py-1 bg-transparent text-sm sm:text-base outline-none shadow-none"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="absolute -bottom-4 flex justify-center left-0 w-full z-10">
          <button
            type="submit"
            className="primaryBg fw_400 h-12 px-10 rounded-md text-base uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};
