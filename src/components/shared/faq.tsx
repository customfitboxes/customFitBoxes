import { Container } from "@mui/material";
import { FaqItem } from "./subcomponents/faqItem";
import faqBannerImg from "../../static/faqBannerImg.png";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export const Faq = (props: any) => {
  const [message, setMessage] = useState("");

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mzbnokyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        setMessage("");
        toast.success("Query submitted successfully!");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email");
    }
  };

  return props.faqs && props.faqs.length > 0 ? (
    <Container maxWidth={"xl"}>
      <div className="py-10">
        <h2 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl fw_600 text-center leading-tight primaryText">
          Frequently Asked Question
        </h2>
        <p className="mt-2 text-center text-base leading-5 opacity-70">
          Have questions about our packaging solutions? Find answers to the most common queries about our custom boxes, materials, printing options, and more. If you don’t see what you're looking for, our team is always here to help!
          <br className="hidden xl:block" />
          sizes and colors. Our packaging specialists can help you find the
          perfect
        </p>
        <div className="mt-14 flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 sm:gap-x-10 lg:gap-x-20 h-full">
          <div className="w-full sm:w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2 flex flex-col gap-y-4">
            {props.faqs.map((item: any, ind: any) => (
              <div className="h-max">
                <FaqItem key={ind + 1} item={item} />
              </div>
            ))}
          </div>
          <div className="sm:sticky sm:top-36 md:top-16 w-full sm:w-max h-max">
            <Image src={faqBannerImg} alt="faqBannerImg" />
            <form
              onSubmit={sendEmail}
              className="primaryBorder rounded-md flex items-center gap-x-3 p-2 mt-5"
            >
              <input
                type="text"
                required
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                className="bg-transparent p-0 outline-none border-none w-full text-sm sm:text-base px-3"
                placeholder="What else would you like to know?"
              />
              <button
                type="submit"
                className="primaryBg text-white w-24 py-2 sm:text-base text-sm rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  ) : (
    <div className="pt-10"></div>
  );
};
