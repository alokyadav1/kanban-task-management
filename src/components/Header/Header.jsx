/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { GoFilter } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import styles from "./Header.module.css";
import GroupingContext from "../../context/grouping";
function Header({ selected }) {
  const [show, setShow] = useState(false);
  const { grouping, groupingDispatch } = useContext(GroupingContext);
  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    groupingDispatch({ type: "SET_GROUPING", payload: e.target.value });
  };
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.header} onClick={handleShow}>
          <div className={styles.display}>
            <GoFilter size={20} color="gray" />
            <span>Display</span>
            <BiChevronDown size={20} color="gray" />
          </div>
          {show && (
            <div className={styles.filterContainer}>
              <div className={styles.filterItem}>
                <p className={styles.grouping}>Grouping</p>
                <select
                  name="grouping"
                  id=""
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="status" selected={selected === "status"}>
                    Status
                  </option>
                  <option value="user" selected={selected === "user"}>
                    User
                  </option>
                  <option value="priority" selected={selected === "priority"}>
                    Priority
                  </option>
                </select>
              </div>
              <div className={styles.filterItem}>
                <p>Ordering</p>
                <select name="ordering" id="" className={styles.select}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
