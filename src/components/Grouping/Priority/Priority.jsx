import React, { useContext } from "react";
import StatusTemplate from "../Status/StatusTemplate";
import GroupingContext from "../../../context/grouping";
import { FiBarChart2 } from "react-icons/fi";
import styles from "./Priority.module.css";
function Priority() {
  const { ticketState } = useContext(GroupingContext);
  const priority = [
    {
      name: "No priority",
      tickets: ticketState.filter((ticket) => ticket.priority === 0),
      icon: <FiBarChart2 size={10} color="gray" />,
    },
    {
      name: "Urgent",
      tickets: ticketState.filter((ticket) => ticket.priority === 4),
      icon: <FiBarChart2 size={10} color="gray" />,
    },
    {
      name: "High",
      tickets: ticketState.filter((ticket) => ticket.priority === 3),
      icon: <FiBarChart2 size={10} color="gray" />,
    },
    {
      name: "Medium",
      tickets: ticketState.filter((ticket) => ticket.priority === 2),
      icon: <FiBarChart2 size={10} color="gray" />,
    },
    {
      name: "Low",
      tickets: ticketState.filter((ticket) => ticket.priority === 1),
      icon: <FiBarChart2 size={10} color="gray" />,
    },
  ];
  // console.log("Users ",users);
  return (
    <div className={styles.PriorityContainer}>
      {/* <UserTemplate /> */}
      {priority.map((p, index) => {
        return (
          <StatusTemplate
            key={index}
            name={p.name}
            tickets={p.tickets}
            icon={p.icon}
            groupingType="Priority"
          />
        );
      })}
    </div>
  );
}

export default Priority;
