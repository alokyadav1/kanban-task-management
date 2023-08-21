/* eslint-disable no-unused-vars */
import { GrFormAdd } from "react-icons/gr";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { BsCircle } from "react-icons/bs";
import styles from "./StatusTemplate.module.css";
import Card from "../../Card/Card";
function StatusTemplate({
  name,
  tickets,
  icon,
  groupingType = "Status",
  ordering,
}) {
  if (ordering === "Priority") {
    tickets.sort((a, b) => b.priority - a.priority);
  } else {
    tickets.sort((a, b) => {
      const firstTitle = a.title.toUpperCase();
      const secondTitle = b.title.toUpperCase();

      if (firstTitle < secondTitle) {
        return -1;
      }
      if (firstTitle > secondTitle) {
        return 1;
      }
      return 0;
    });
  }
  return (
    <div className={styles.statusContainer}>
      {/* {ordering} */}
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={name === "done" ? styles.done : ""}>{icon}</div>
          <span>{name}</span>
          <span className={styles.itemLength}>{tickets.length}</span>
        </div>
        <div className={styles.right}>
          <div className="add">
            <GrFormAdd size={20} color="gray" />
          </div>
          <div className="more">
            <IoEllipsisHorizontal size={20} color="gray" />
          </div>
        </div>
      </div>
      <div className="body">
        {tickets.map((ticket, index) => {
          return (
            <Card
              key={index}
              tickets={ticket}
              showAvatar={true}
              groupingType={groupingType}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StatusTemplate;
