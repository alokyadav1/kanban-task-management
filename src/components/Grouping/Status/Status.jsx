/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import StatusTemplate from "./StatusTemplate";
import GroupingContext from "../../../context/grouping";
import { BsCircle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import styles from "./Status.module.css";
function Status() {
  const { ticketState } = useContext(GroupingContext);
  console.log("ticketState", ticketState);
  const [todo, setTodo] = useState(
    ticketState.filter((ticket) => ticket.status === "Todo")
  );
  const [inProgress, setInProgress] = useState(
    ticketState.filter((ticket) => ticket.status === "In progress")
  );
  const [done, setDone] = useState(
    ticketState.filter((ticket) => ticket.status === "Done")
  );
  const [backLog, setBackLog] = useState(
    ticketState.filter((ticket) => ticket.status === "Backlog")
  );
  const status = [
    {
      name: "Backlog",
      tickets: backLog,
      icon: <BsCircle size={10} color="gray" />,
    },
    {
      name: "Todo",
      tickets: todo,
      icon: <BsCircle size={10} color="gray" />,
    },
    {
      name: "In progress",
      tickets: inProgress,
      icon: <BsCircle size={10} color="gray" />,
    },
    {
      name: "Done",
      tickets: done,
      icon: <MdDone size={10} color="gray" />,
    },
  ];

  return (
    <div>
      {/* <StatusTemplate /> */}
      <div className={styles.statusContainer}>
        {status.map((status, index) => {
          return (
            <StatusTemplate
              key={index}
              name={status.name}
              tickets={status.tickets}
              icon={status.icon}
              groupingType="Status"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Status;
