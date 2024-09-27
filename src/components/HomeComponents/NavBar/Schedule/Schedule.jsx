import styles from "./Schedule.module.css";
import { AiFillSchedule } from "react-icons/ai";

function Schedule() {
  return (
    <div className={styles.Schedule}>
      Schedule a visit
      <div className={styles.ScheduleIcon}>
        <AiFillSchedule size={16} />
      </div>
    </div>
  );
}

export default Schedule;
