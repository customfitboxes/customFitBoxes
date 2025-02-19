import { Container } from "@mui/material";
import contactImg from "../../static/contactImg.png";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import longArrowIcon from "../../static/longArrowIcon.svg";
import useRandomNumbers from "../../hooks/useRandomNumbers"

export const ContactFormSection = () => {
  const [finalData, setFinalData] = useState<any>({});
  const { num1, num2, sum }: any = useRandomNumbers();
  const [loading, setLoading] = useState(false);

  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const onSubmit = async (e:any) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);

    if(sum !== +finalData?.answer){
      toast.error("Answer is not correct!");
      setLoading(false);
      return
    }

    try {
      const response = await fetch("/api/contact-us-email", {
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
    <div className="py-14" style={{ background: "#EFFCF9" }}>
      <Container maxWidth="xl">
        <div className="lg:px-10 xl:px-20">
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-6 lg:gap-x-16 xl:gap-x-24">
            <div className="col-span-12 md:col-span-6">
              <Image src={contactImg} alt={contactImg.toString()} />
            </div>
            <div className="col-span-12 md:col-span-6 w-full flex items-center">
              <div className="w-full">
                <p className="fw_400 text-lg sm:text-xl md:text-2xl xl:text-3xl">
                  Feel Free to Drop up a Line Below
                </p>
                <p className="primaryText2 text-3xl sm:text-2xl md:text-4xl xl:text-5xl fw_600">GET IN TOUCH</p>
                <form
                  onSubmit={onSubmit}
                  className="mt-8 grid grid-cols-12 w-full mx-auto gap-x-3 gap-y-5 sm:gap-y-10 sm:gap-x-5"
                >
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.firstName}
                      onChange={(e) => onchnage("firstName", e.target.value)}
                      placeholder="First Name"
                      className="h-10 w-full border-b border-zinc-400 bg-transparent text-base outline-none"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.lastName}
                      onChange={(e) => onchnage("lastName", e.target.value)}
                      placeholder="Last Name"
                      className="h-10 w-full border-b border-zinc-400 bg-transparent text-base outline-none"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="email"
                      required
                      value={finalData.email}
                      onChange={(e) => onchnage("email", e.target.value)}
                      placeholder="Email"
                      className="h-10 w-full border-b border-zinc-400 bg-transparent text-base outline-none"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.phone}
                      onChange={(e) => onchnage("phone", e.target.value)}
                      placeholder="Phone Number"
                      className="h-10 w-full border-b border-zinc-400 bg-transparent text-base outline-none"
                    />
                  </div>
                  <div className="col-span-12">
                    <input
                      type="text"
                      required
                      value={finalData.message}
                      onChange={(e) => onchnage("message", e.target.value)}
                      className="w-full border-b border-zinc-400 bg-transparent py-2 text-base"
                      placeholder="Write your message"
                    />
                  </div>
                  <div className="col-span-12 flex items-center gap-4 sm:col-span-6">
                    <div className="flex items-center font-semibold gap-2">
                      <span>{num1}</span>
                      <span>+</span>
                      <span>{num2}</span>
                      <span>=</span>
                    </div>
                    <input
                      type="number"
                      required
                      value={finalData.answer}
                      onChange={(e) => onchnage("answer", e.target.value)}
                      className="w-full border-b px-2 outline-none border-zinc-400 bg-transparent py-2 text-base"
                      placeholder="Answer"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6 flex items-center justify-center gap-x-8">
                    <button
                      type="submit"
                      disabled= {loading ? true : false}
                      className="primaryBg fw_400 py-3 px-10 rounded-md text-base text-white whitespace-nowrap"
                    >
                      {loading ? "Sending..." : "Get Your Quote"}
                    </button>
                    <Image src={longArrowIcon} alt={longArrowIcon} width={30} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
