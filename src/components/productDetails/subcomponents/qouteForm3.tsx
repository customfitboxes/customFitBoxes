import { resetForm } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const QouteForm3 = (props: any) => {
  const [finalData, setFinalData] = useState<any>({
    productName: props.productName,
    attachment: null, // State to store the uploaded file
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);


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
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFinalData({ ...finalData, attachment: file });
    }
  };

  const sendEmail = async (e:any) => {
    e.preventDefault(); // Prevent page refresh

    // Validate the required fields
    if (!finalData.name || !finalData.email || !finalData.productName || !finalData.quantity) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch("/api/request-qoute", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (response.status === 200) {
        toast.success("Quote request submitted successfully!");
        setFinalData({ unit: "Inches" }); 
      } else {
        toast.error("Failed to submit the quote request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="number"
            required
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            required
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            required
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            required
            value={finalData.depth}
            onChange={(e) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <select
            required
            value={finalData.unit}
            onChange={(e) => onchnage("unit", e.target.value)}
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          >
            <option>Select Unit</option>
            <option>Inches</option>
            <option>CM</option>
            <option>MM</option>
          </select>
        </div>

        <div className="col-span-6 sm:col-span-4">
          <select
            required
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
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
        <div className="col-span-6 sm:col-span-4">
          <select
            value={finalData.stock}
            onChange={(e) => onchnage("stock", e.target.value)}
            className="pb-1 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          >
            <option>Select Stock</option>
            <option>12 PT</option>
            <option>14 PT</option>
            <option>16 PT</option>
            <option>18 PT</option>
            <option>20 PT</option>
            <option>Kraft Stock</option>
            <option>Corrugated Stock</option>
            <option>Rigid Stock</option>
          </select>
        </div>

        <div className="col-span-12">
          <textarea
            rows={1}
            required
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
            className="w-full border-b border-zinc-400 px-0 py-1 text-sm sm:text-0base lg:text-sm xl:text-base outline-none shadow-none"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Attachment field */}
        <div className="col-span-6">
          <input
            type="file"
            onChange={handleFileChange}
            className="pb-2 w-full border-b border-zinc-400 px-0 text-sm sm:text-0base lg:text-sm xl:text-base outline-none"
          />
        </div>

        <div className="col-span-6 flex items-center gap-x-3 -mt-2">
          <button
            type="submit"
            className="fw_400 h-12 w-full primaryBg rounded-md text-sm sm:text-base lg:text-sm xl:text-base text-white"
          >
            {
              loading ? "Sending..." : "Get a Quote"
            }
           
          </button>
        </div>
      </form>
    </div>
  );
};
