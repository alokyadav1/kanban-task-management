/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { BsCircleFill, BsThreeDots,BsCheckCircleFill } from "react-icons/bs";
import { PiDotsThreeLight } from "react-icons/pi";
import {MdOutlineCancel} from "react-icons/md";
import {TbCircleDotted} from "react-icons/tb";
import { BsCircle } from "react-icons/bs";
import styles from "./Card.module.css";
import Avatar from "../Avatar/Avatar";
import GroupingContext from "../../context/grouping";

function Card({ tickets, showAvatar = false, groupingType }) {
  const { user, ticketState, ticketDispatch } = useContext(GroupingContext);
  const currentUser = user.find((user) => user.id === tickets.userId);
  const [checked, setChecked] = useState(tickets.status === "Done");

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setChecked(true);
      console.log("checked", checked);
      ticketDispatch({ type: "CHECKED", payload: { id: tickets.id } });
    } else {
      setChecked(false);
      ticketDispatch({ type: "UNCHECKED", payload: { id: tickets.id } });
    }
  };
  const selectPriorityIcon = (priority) => {
    switch (priority) {
      case 1:
        return <BsCircleFill size={8} color="#F56236" />;
      case 2:
        return <BsCircleFill size={8} color="#FCE788" />;
      case 3:
        return <BsCircleFill size={8} color="#88FCA3" />;
      case 4:
        return <BsCircleFill size={8} color="#1EAE98" />;
      default:
        return <BsThreeDots size={12} color="black" />;
    }
  };

  const selectStatusIcon = (status) => {
    switch (status) {
      case "Todo":
        return <BsCircle size={10} />;
      case "In progress":
        return <BsCircle size={10} />;
      case "Backlog":
        return <TbCircleDotted size={10} />;
      case "Done":
        return <BsCheckCircleFill size={12} color="blue" />;
      default:
        return <MdOutlineCancel size={12} color="black" />;
    }
  };
  return (
    <div className={styles.card}>
      <p className={styles.id}>{tickets.id}</p>
      {groupingType === "Status" ? (
        <div className={styles.title}>
          <p>{tickets.title}</p>
        </div>
      ) : (
        <div className={styles.titleContainer}>
          <div className={styles.statusIcon}>{selectStatusIcon(tickets.status)}</div>
          <p className={styles.title}>{tickets.title}</p>
        </div>
      )}
      <div className={styles.features}>
        <div className="">{selectPriorityIcon(tickets.priority)}</div>
        <div className={styles.tag}>
          <BsCircleFill size={8} color="#BEC2C8" />
          {tickets.tag.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
      </div>
      {showAvatar && (
        <div className={styles.avatar}>
          <Avatar currentUser={currentUser} />
        </div>
      )}
    </div>
  );
}

export default Card;
