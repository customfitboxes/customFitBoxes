import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { Footer } from "@/components/shared/footer/footer";
import { Container } from "@mui/material";

const Index = ({ data }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <div className="py-10  px-3" style={{ background: "#EFFCF9" }}>
        <div>
          <h1 className="text-4xl fw_600 text-center">Why Us</h1>
          <p className="mt-4 text-center fw_400">
            Choose a packaging style for your custom boxes, start designing with
            us, and get your
            <br className="hidden md:block" /> boxes with the most advanced
            printing techniques.
          </p>
        </div>
      </div>
      <Container maxWidth={"lg"}>
        <div className="py-10">
          <p className="mt-4 p-0 text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <h1 className="mt-4 font-bold text-black text-xl">
            What Is a Terms of Service Agreement?
          </h1>
          <p className="mt-3 p-0 text-black">
            A terms of service sets all user rules, restrictions, and prohibited
            behaviors, and outlines your company’s liability limitations,
            property rights, and dispute resolutions.
          </p>
          <p className="mt-3 p-0 text-black">
            You’ve probably seen some alternative titles for a terms of service
            agreement, like:
          </p>
          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Terms of Use</li>
            <li>Terms and Conditions</li>
            <li>ToS Agreement</li>
            <li>General Terms</li>
            <li>Terms</li>
          </ul>

          <p className="mt-8 p-0 text-black">
            Despite the different names, these agreements are all the same.
          </p>
          <p className="mt-4 p-0 text-black">
            No matter what you choose to call it, a generic terms of service
            policy can help protect your business from users who might break the
            law or cause harm to your website, app, or other users.
          </p>

          <p className="mt-4 p-0 text-black">
            You can customize our free terms of service template below,
            including the title, so it works for you no matter if your own a:
          </p>

          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Dropshipping businesses</li>
            <li>Marketplace shop</li>
            <li>Retail store</li>
            <li>Ecommerce website or app</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Subscription-based platform</li>
          </ul>

          <h1 className="mt-8 font-bold text-black text-xl">
            Why You Need a Terms of Service for Your Website or App
          </h1>
          <p className="mt-4 p-0 text-black">
            While a ToS agreement is not required by law, you need to post one
            on your website or app to help:
          </p>

          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Set your users’ expectations</li>
            <li>Protect your business from legal liabilities</li>
            <li>Maintain rights over your intellectual property</li>
            <li>Minimizes Disputes</li>
            <li>Establish trust and transparency with your users</li>
          </ul>

          <h1 className="mt-8 font-bold text-black text-xl">
            Terms of Service Set Your Users’ Expectations
          </h1>
          <p className="mt-4 p-0 text-black">
            One of the purposes of a terms of service policy is to explain the
            rules and guidelines your users must follow while accessing your
            services, which helps set their expectations.
          </p>
          <p className="mt-4 p-0 text-black">
            By clearly communicating what’s allowed and prohibited on your
            website or app and explaining to your users the consequences of
            breaking those rules, you make it easier for your business to
            prevent users from abusing your services or causing harm to others.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
