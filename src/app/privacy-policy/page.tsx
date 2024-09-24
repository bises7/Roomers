"use client";

import { Container } from "react-bootstrap";
import Footer from "../components/Common/Footer";
import NavbarComponent from "../components/Common/Navbar";

const Page = ({}) => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> August 20, 2023
        </p>

        <h2>Introduction</h2>
        <p>
          At Roomers, we take the privacy of our users very seriously. In this
          policy, we outline the information we collect and how it is used. We
          also detail the steps we take to keep your data safe.
        </p>

        <h2>Information Collection</h2>
        <p>We may collect the following information from users:</p>
        <ul>
          <li> Contact details</li>
          <li> Payment details</li>
          <li> Profile information</li>
          <li> Reviews and ratings</li>
        </ul>

        <h2>Use of Information</h2>
        <p>
          We use the information we collect to provide you with a personalized
          experience on our platform. This includes showing you relevant
          listings, helping you complete your booking, and providing customer
          service.
        </p>

        <h2>Information Sharing</h2>
        <p>We may share your information with the following parties:</p>
        <ul>
          <li> Hosts when you book a property</li>
          <li>
            Service providers that help us run our platform, such as payment
            processors
          </li>
          <li> Law enforcement or government agencies if required by law</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We take steps to protect your data from unauthorized access,
          alteration, or disclosure. This includes using encryption and other
          security measures.
        </p>

        <h2>User Rights</h2>
        <p>
          You have the right to access, correct, delete, or restrict the
          processing of your personal data. You can exercise these rights by
          contacting us.
        </p>

        <h2>International Transfers</h2>
        <p>
          We may transfer your information to countries outside of your home
          country. We will only do so if there are adequate safeguards in place
          to protect your data.
        </p>

        <h2>Data Retention</h2>
        <p>
          We will retain your information for as long as necessary to fulfill
          the purposes outlined in this policy. We may also retain your
          information to comply with legal obligations, resolve disputes, or
          enforce our agreements.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our platform is not intended for children under the age of 18. We do
          not knowingly collect personal information from children.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. If we make significant
          changes, we will notify you through our platform or other means.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have questions about this policy, you can contact us at
          privacy@roomers.space.
        </p>

        <Footer className="" />
      </Container>
    </>
  );
};

export default Page;
