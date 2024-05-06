import { resetForm } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const QouteForm3 = (props: any) => {
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    productName: props.productName,
  });
  const router = useRouter();
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
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      className="overflow-hidden mt-5"
    >
      <form
        onSubmit={sendEmail}
        className={`grid grid-cols-12 gap-y-6 gap-x-4 lg:gap-6 bg-white`}
      >
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Name"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm lg:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm lg:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm lg:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="number"
            required
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm lg:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <select
            required
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm lg:text-base outline-none"
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
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.shortDescription}
            onChange={(e) => onchnage("shortDescription", e.target.value)}
            placeholder="Description"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm lg:text-base outline-none"
          />
        </div>
        <div className="col-span-12">
          <label className="text-sm lg:text-base fw_400 text-zinc-500">Description</label>
          <textarea
            rows={4}
            required
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
            className="w-full border border-zinc-400 px-2 py-1 text-sm lg:text-base outline-none shadow-none"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="col-span-12 flex items-center gap-x-3 -mt-2">
          <button
            type="submit"
            className="fw_400 h-12 w-full primaryBg rounded-md text-sm lg:text-base text-white"
          >
            Get Inquiry
          </button>
          <button
            type="submit"
            className="fw_400 h-12 w-full primaryBg rounded-md text-sm lg:text-base text-white"
          >
            Call Now
          </button>
        </div>
      </form>
    </div>
  );
};
