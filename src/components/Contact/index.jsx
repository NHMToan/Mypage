/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
Contact.propTypes = {};

function Contact(props) {
  const { t, i18n } = useTranslation();
  const InfoItem = ({ title, icon, content }) => {
    return (
      <div>
        <Title text={title} type="underline" icon={icon} />
        <p className="contact-info-content">{t(content)}</p>
      </div>
    );
  };
  return (
    <div className="contact-tab">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.695069871541!2d106.68559562607402!3d10.746231510070121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f082746201f%3A0x5b7f62ca5ec46ae0!2sPh%C6%B0%E1%BB%9Dng%201%2C%20District%208%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1586079170626!5m2!1sen!2s"
          style={{ border: 0, width: "100%", height: "400px" }}
          allowFullScreen
        ></iframe>
      </div>
      <InfoItem
        title="info_contact_title_address"
        icon="fa-map-marked"
        content="info_contact_address_content"
      />
      <InfoItem
        title="info_contact_title_phone"
        icon="fa-phone"
        content="info_contact_phone_content"
      />
      <InfoItem
        title="info_contact_title_mail"
        icon="fa-envelope"
        content="info_contact_mail_content"
      />
      <Title
        text="info_contact_title_send_mail"
        type="underline"
        icon="fa-paper-plane"
      />
      <ContactForm />
    </div>
  );
}

export default Contact;
