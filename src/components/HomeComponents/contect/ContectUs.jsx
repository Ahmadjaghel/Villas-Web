import styles from "./ContectUs.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ContactCard from "./ContactCard";
import FormCard from "./FormCard";
import phone from "/images/phone-icon.png";
import email from "/images/email-icon.png";
const ContectUs = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.backimg}>
        <img src="/images/contact-bg.jpg" />
      </div>
      <div className={styles.head}>
        <SectionTitle title="CONTACT US" />
        <h1>Get In Touch With Our Agents</h1>
      </div>
      <div className={styles.maincontact}>
        <div className={styles.section}>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2snl!4v1723985494906!5m2!1sar!2snl"></iframe>
          </div>
          <div className={styles.phonecards}>
            <ContactCard img={phone} title="010-020-0340" des="Phone Number" />
            <ContactCard
              img={email}
              title="info@villa.co"
              des="Business Email"
            />
          </div>
        </div>
        <FormCard />
      </div>
    </div>
  );
};
export default ContectUs;
