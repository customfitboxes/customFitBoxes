import { Container } from "@mui/material";
import contactImg from "../../static/contactImg.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { resetForm } from "@/services/categoriesService";
import { toast } from "react-toastify";
import Image from "next/image";
import longArrowIcon from "../../static/longArrowIcon.svg";

export const ContactFormSection = () => {
  const [finalData, setFinalData] = useState<any>({});
  const router = useRouter();

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
                  onSubmit={sendEmail}
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
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.answer}
                      onChange={(e) => onchnage("answer", e.target.value)}
                      className="w-full border-b border-zinc-400 bg-transparent py-2 text-base"
                      placeholder="Answer"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6 flex items-center justify-center gap-x-8">
                    <button
                      type="submit"
                      className="primaryBg fw_400 py-3 px-10 rounded-md text-base text-white whitespace-nowrap"
                    >
                      Get Your Quote
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
