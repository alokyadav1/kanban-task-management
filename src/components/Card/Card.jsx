/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { PiDotsThreeLight } from "react-icons/pi";
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
  return (
    <div className={styles.card}>
      <p className={styles.id}>{tickets.id}</p>
      {groupingType === "Status" ? (
        <div className={styles.title}>
          <p>{tickets.title}</p>
        </div>
      ) : (
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name={tickets.id}
            id={tickets.id}
            onChange={handleCheckbox}
            checked={checked}
          />
          <label htmlFor={tickets.id} className={styles.title}>
            {tickets.title}
          </label>
        </div>
      )}
      <div className={styles.features}>
        <div className="">
          <PiDotsThreeLight size={20} color="black" />
        </div>
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
