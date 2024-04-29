import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getServerSideProps, resetForm } from "@/services/categoriesService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Index = ({ data, products }: any) => {
  const [finalData, setFinalData] = useState<any>({ unit: "Inches" });
  const router = useRouter();
  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  useEffect(() => {
    if (products && products.length > 0)
      setFinalData({ ...finalData, productName: products[0].name });
  }, [products]);

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
        setFinalData({
          ...resetForm(finalData),
          color: "1-Color",
          productName: products[0].name,
        });
        router.push("/thank-you");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email");
    }
  };
  return (
    <div>
      <Navbar data={data} />
      <div className="sm:px-6 sm:pt-6 pb-14">
        <div
          className="bg-center bg-cover w-full pt-20 px-5"
          style={{ background: "#EFFCF9", height: "30rem" }}
        >
          <h1 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl primaryText">
            Request a Quote
          </h1>
          <p className="mt-2 text-center text-sm leading-5 text-black">
            Fill the form below and we reply with a custom quote for your needs.
          </p>
        </div>
        <Container maxWidth="lg" className="-mt-72">
          <form
            onSubmit={sendEmail}
            className="bg-white rounded-lg p-6 sm:p-8 grid grid-cols-12 w-full md:w-5/6 lg:w-3/4 mx-auto shadow-xl gap-x-3 gap-y-5 sm:gap-5"
          >
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Enter your Name*</label>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={finalData.name}
                onChange={(e) => onchnage("name", e.target.value)}
                className="h-10 md:h-12 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Email*</label>
              <input
                type="email"
                required
                value={finalData.email}
                onChange={(e) => onchnage("email", e.target.value)}
                placeholder="Email"
                className="h-10 md:h-12 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Phone Number</label>
              <input
                type="tel"
                value={finalData.phone}
                onChange={(e) => onchnage("phone", e.target.value)}
                placeholder="Phone number"
                className="h-10 md:h-12 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            {products && products.length > 0 && (
              <div className="col-span-12 sm:col-span-6">
                <label className="text-sm sm:text-base">Product Name*</label>
                <select
                  required
                  value={finalData.productName}
                  onChange={(e) => onchnage("productName", e.target.value)}
                  className="h-10 md:h-12 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
                >
                  {products.map((product: any, index: any) => (
                    <option key={index + 1}>{product.name}</option>
                  ))}
                  <option>Other</option>
                </select>
              </div>
            )}
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">
                Design varitations*
              </label>
              <input
                type="number"
                required
                value={finalData.varitations}
                onChange={(e) => onchnage("varitations", e.target.value)}
                placeholder="Design varitations"
                className="h-10 md:h-12 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Quantity*</label>
              <input
                type="number"
                required
                value={finalData.quantity}
                onChange={(e) => onchnage("quantity", e.target.value)}
                placeholder="Quantity"
                className="h-10 md:h-12 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <input
                type="number"
                required
                value={finalData.length}
                onChange={(e) => onchnage("length", e.target.value)}
                placeholder="Length"
                className="h-10 md:h-12 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <input
                type="number"
                required
                value={finalData.width}
                onChange={(e) => onchnage("width", e.target.value)}
                placeholder="Width"
                className="h-10 md:h-12 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <input
                type="number"
                required
                value={finalData.depth}
                onChange={(e) => onchnage("depth", e.target.value)}
                placeholder="Depth"
                className="h-10 md:h-12 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>

            <div className="col-span-6">
              <label className="hidden sm:block text-sm sm:text-base">
                Select Unit*
              </label>
              <select
                required
                value={finalData.unit}
                onChange={(e) => onchnage("unit", e.target.value)}
                className="h-10 md:h-12 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              >
                <option>Inches</option>
                <option>CM</option>
                <option>MM</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Delivery Deadline</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={finalData.deadline}
                onChange={(e) => onchnage("deadline", e.target.value)}
                placeholder="Depth"
                className="h-10 md:h-12 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12">
              <textarea
                rows={5}
                value={finalData.message}
                onChange={(e) => onchnage("message", e.target.value)}
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="primaryBg fw_400 h-12 col-span-12 rounded-md text-sm uppercase text-white"
            >
              Get Inquiry
            </button>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
