/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import StatusTemplate from "./StatusTemplate";
import GroupingContext from "../../../context/grouping";
import { BsCircle,BsCheckCircleFill } from "react-icons/bs";
import {TbCircleDotted} from "react-icons/tb";
import {MdOutlineCancel} from "react-icons/md";
import styles from "./Status.module.css";


function Status({ordering}) {
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
  const [cancel, setCancel] = useState(
    ticketState.filter((ticket) => ticket.status === "Cancel")
  );
  const status = [
    {
      name: "Backlog",
      tickets: backLog,
      icon: <TbCircleDotted size={10} color="gray" />,
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
      icon: <BsCheckCircleFill size={12} color="blue" />,
    },
    {
      name: "Cancel",
      tickets: done,
      icon: <MdOutlineCancel size={12} color="blue" />,
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
              ordering={ordering}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Status;
