import styles from "./Top.module.css";
import { ImMap } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import email from "/images/email-icon.png";
const Top = () => {
  return (
    <div className={styles.contop}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={email} alt="" />
          <h6 className={styles.info}>info@company.com</h6>
          <ImMap className={styles.imMap} />
          <h6>Sunny Isles Beach, FL 33160</h6>
        </div>

        <div className={styles.right}>
          <div className={styles.icons}>
            <FaFacebook className={styles.icon} />
          </div>
          <div className={styles.icons}>
            <FaTwitter className={styles.icon} />
          </div>
          <div className={styles.icons}>
            <IoLogoLinkedin className={styles.icon} />
          </div>
          <div className={styles.icons}>
            <FaInstagram className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
