import { Container } from "@mui/material";
import Image from "next/image";
import callBackBanner from "../../static/callBackBanner.svg";
import { useState } from "react";
import whiteChev from "../../static/whiteChev.svg";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const CallBackComp = () => {
  const [finalData, setFinalData] = useState<any>({});
  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e:any) => {
    e.preventDefault(); // Prevent page refresh

    // Validate the required fields
    if (!finalData.name || !finalData.email || !finalData.phone) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch("/api/call-you-back", {
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
        router.push('/thank-you')
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
    <div className="pb-0 md:pb-14">
      <div style={{ background: "#EFFCF9" }} className="py-10">
        <Container maxWidth={"xl"}>
          <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8 xl:gap-x-16">
            <div className="col-span-6">
              <Image src={callBackBanner} alt="callBackBanner" />
            </div>
            <div className="col-span-6 flex items-center">
              <form onSubmit={onSubmit} className="w-full">
                <p className="text-center text-base sm:text-lg fw_600">
                  Just drop your contact number
                </p>
                <h2 className="text-center primaryText fw_600 text-4xl sm:text-5xl 2xl:text-6xl mt-2">
                  We’ll Call You Back
                </h2>
                <div className="grid grid-cols-12 gap-y-3 sm:gap-y-0 gap-x-4 mt-10">
                  <div className="col-span-6 sm:col-span-4">
                    <input
                      type="text"
                      required
                      value={finalData.name}
                      onChange={(e) => onchnage("name", e.target.value)}
                      placeholder="Enter your name"
                      className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <input
                      type="number"
                      required
                      value={finalData.phone}
                      onChange={(e) => onchnage("phone", e.target.value)}
                      placeholder="+1 123-123-1234"
                      className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none num_input"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <input
                      type="email"
                      required
                      value={finalData.email}
                      onChange={(e) => onchnage("email", e.target.value)}
                      placeholder="Email"
                      className="h-10 w-full border-b border-zinc-800 bg-transparent text-sm sm:text-base outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white rounded-md mx-auto whitespace-nowrap primaryBg h-12 px-5 text-base fw_400 mt-10 lg:mt-20 flex items-center justify-between gap-x-8"
                >
                  { loading ? "Sending..." : "Send Now"}
                  <Image
                    src={whiteChev}
                    alt={"whiteChev"}
                    width={14}
                    height={14}
                  />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
