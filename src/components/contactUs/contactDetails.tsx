import { Container } from "@mui/material";
import Image from "next/image";
import call from "../../static/call.svg";
import email from "../../static/email.svg";
import address from "../../static/address.svg";
import socialMedia from "../../static/socialMedia.svg";
export const ContactDetails = () => {
  return (
    <div className="py-14">
      <Container maxWidth="xl">
        <div>
          <div>
            <p className="fw_400 text-2xl sm:text-3xl">Our Contact Details</p>
            <p className="primaryText2 text-3xl sm:text-4xl fw_600">
              CONTACT US
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 sm:gap-x-4 xl:gap-x-6 mt-16">
            <div className="primaryBorder2 rounded-lg px-5 pb-3 pt-12 2xl:pt-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md h-20 2xl:h-24 w-20 2xl:w-24 rounded-full -top-12 p-3 flex items-center justify-center">
                <Image src={call} alt={"call"} />
              </div>
              <p className="text-center text-base 2xl:text-lg fw_400">
                Our Contact Details
              </p>
              <p className="text-center text-base 2xl:text-lg mb-0 pb-0">
                +1(332) 254 1272
              </p>
            </div>
            <div className="primaryBorder2 rounded-lg px-5 pb-3 pt-12 2xl:pt-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md h-20 2xl:h-24 w-20 2xl:w-24 rounded-full -top-12 p-3 flex items-center justify-center">
                <Image src={email} alt={"email"} />
              </div>
              <p className="text-center text-base 2xl:text-lg fw_400">
                Our Email Address
              </p>
              <p className="text-center text-base 2xl:text-lg mb-0 pb-0">
                sales@customfitboxes.com
              </p>
            </div>
            <div className="primaryBorder2 rounded-lg px-5 pb-3 pt-12 2xl:pt-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md h-20 2xl:h-24 w-20 2xl:w-24 rounded-full -top-12 p-3 flex items-center justify-center">
                <Image src={address} alt={"address"} />
              </div>
              <p className="text-center text-base 2xl:text-lg fw_400">
                Our Office Address
              </p>
              <p className="text-center text-base 2xl:text-lg mb-0 pb-0">
                401 North Michigan Avenue, Suite 1200, Chicago, Illinois, 60611
              </p>
            </div>
            <div className="primaryBorder2 rounded-lg px-5 pb-3 pt-12 2xl:pt-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md h-20 2xl:h-24 w-20 2xl:w-24 rounded-full -top-12 p-3 flex items-center justify-center">
                <Image src={socialMedia} alt={"socialMedia"} />
              </div>
              <p className="text-center text-base 2xl:text-lg fw_400">
                Our Social Media
              </p>
              <p className="text-center text-sm fw_400 2xl:text-base mb-0 pb-0 flex items-center justify-center gap-x-1">
                <a
                  href="https://www.facebook.com/customfitboxes/"
                  target="_blank"
                  className="border-none"
                >
                  Fb
                </a>
                ,{" "}
                <a
                  href="https://www.instagram.com/customfitboxes_usa/"
                  target="_blank"
                  className="border-none"
                >
                  Insta
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/company/custom-fit-boxes/"
                  target="_blank"
                  className="border-none"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
