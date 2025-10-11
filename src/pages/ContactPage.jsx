import React from "react";
import PageHero from "../components/PageHero";
import ContactInfo from "../conteactcompo/ContactInfo";
import CommentForm from "../conteactcompo/CommentForm";
import SimpleError from "../conteactcompo/SimpleError";

const ContactPage = () => {
  return (
    <div className="page">
      <PageHero title="Get in Touch" subtitle="Contact Us" />
      <ContactInfo />
      <CommentForm />
      <SimpleError />
    </div>
  );
};

export default ContactPage;
