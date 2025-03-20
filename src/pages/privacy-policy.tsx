import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { Footer } from "@/components/shared/footer/footer";
import { Container } from "@mui/material";

const Index = ({ data, boxProducts, shapeProducts }: any) => {
  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <div className="py-10  px-3" style={{ background: "#EFFCF9" }}>
        <div>
          <h1 className="text-4xl fw_600 text-center">Privacy Policy</h1>
        </div>
      </div>
      <Container maxWidth={"xl"}>
        <div className="py-10">
          <p className="mt-4 p-0 text-black">
            At Custom Fit Boxes, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with our website and services.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
           Information We Collect
          </h2>
          <p className="mt-3 p-0 text-black">
            We may collect the following types of information:
            <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Contact Details: Name, email address, shipping address, and phone number.
</li>
            <li>Financial Information: Payment details such as bank or credit account information.
</li>
            <li>Account Information: Username, password, and other credentials.
</li>
            <li>Usage Data: IP address, browser type, device identification, and browsing behavior.
</li>
            <li>User Preferences: Purchase history, communication preferences, and feedback.
</li>
          </ul>
          </p>
          
          <h2 className="mt-8 font-bold text-black text-xl">
            How We Use Your Information
          </h2>
          <p className="mt-4 p-0 text-black">
            The information collected is used for:
          </p>

          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Order Processing: To fulfill and ship your orders accurately.
</li>
            <li>Account Management: To manage your user account and provide customer support.
</li>
            <li>Payment Processing: To verify and process payments securely.
</li>
            <li>Communication: To inform you about order status, new products, services, or promotions.
</li>
            <li>Website Improvement: To analyze usage and enhance website functionality.
</li>
          </ul>

          <h2 className="mt-8 font-bold text-black text-xl">
           Information Sharing and Disclosure
          </h2>
          <p className="mt-4 p-0 text-black">
            We do not sell or rent your personal information to third parties. However, we may share your information with:
          </p>
           <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Service Providers: Trusted third parties who assist in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
</li>
            <li>Legal Requirements: When required by law to comply with legal processes or protect our rights, property, or safety.
</li>
             <h2 className="mt-8 font-bold text-black text-xl">
           Data Security
          </h2>
          <p className="mt-4 p-0 text-black">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Despite our efforts, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
           <h2 className="mt-8 font-bold text-black text-xl">
           Your Choices
          </h2>
          <p className="mt-4 p-0 text-black">
           You have the right to:
          </p>
           <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Access and Update: Review and update your personal information.
</li>
            <li>Opt-Out: Unsubscribe from marketing communications.
</li>
              <li>Delete: Request deletion of your personal data, subject to legal obligations.
</li>
              <h2 className="mt-8 font-bold text-black text-xl">
           Children's Privacy
          </h2>
            
          <p className="mt-4 p-0 text-black">
            Our services are not directed to individuals under 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information.
          </p>

               <h2 className="mt-8 font-bold text-black text-xl">
           Changes to This Privacy Policy
          </h2>
            
          <p className="mt-4 p-0 text-black">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly to stay informed about how we are protecting your information.
          </p>

             <h2 className="mt-8 font-bold text-black text-xl">
           Contact Us
          </h2>
            
          <p className="mt-4 p-0 text-black">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
             <p className="mt-4 p-0 text-black">
           Custom Fit Boxes
            </p>
             <li>+1(332) 252 9988
</li>
            <li>info@customfitboxes.com
</li>
              
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
