import React from "react";
import SectionTitle from "../HomeComponents/SectionTitle/SectionTitle";
import styles from "./MainContact.module.css";
import ContactCard from "../HomeComponents/Contect/ContactCard";
import FormCard from "../HomeComponents/Contect/FormCard";
import phone from "/images/phone-icon.png";
import email from "/images/email-icon.png";
const MainContact = () => {
  return (
    <div>
      <div className={styles.maincontact}>
        <div className={styles.section}>
          <div>
            <SectionTitle title="CONTACT US" />
            <h1>Get In Touch With Our Agents</h1>
          </div>
          <p>
            When you really need to download free CSS template,please remember
            our website TemplateMo.Also,tell your friends about our
            website.Thank you for visiting.There is a variety of Bootstrap HTML
            CSS templates on our website.If you need more information,please
            contact us.
          </p>
          <ContactCard img={phone} title="010-020-0340" des="Phone Number" />
          <ContactCard img={email} title="info@villa.co" des="Business Email" />
        </div>
        <FormCard />
      </div>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2snl!4v1723985494906!5m2!1sar!2snl"></iframe>
      </div>
    </div>
  );
};

export default MainContact;
