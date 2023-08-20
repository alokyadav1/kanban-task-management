/* eslint-disable no-unused-vars */
import React, { useReducer, useContext, useState } from "react";
import Header from "./components/Header/Header";
import Status from "./components/Grouping/Status/Status";
import Priority from "./components/Grouping/Priority/Priority";
import User from "./components/Grouping/User/User";
import GroupingContext from "./context/grouping";
import { GroupingReducer } from "./reducers/grouping";
import UserReducer from "./reducers/user";
import TicketReducer from "./reducers/tickets";
import { BsCircle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import styles from "./App.module.css";
function App() {
  const user = [
    { id: "usr-1", name: "Anoop sharma", available: false },
    { id: "usr-2", name: "Yogesh", available: true },
    { id: "usr-3", name: "Shankar Kumar", available: true },
    { id: "usr-4", name: "Ramesh", available: true },
    { id: "usr-5", name: "Suresh", available: true },
  ];
  const tickets = [
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: ["Feature request"],
      userId: "usr-1",
      status: "Todo",
      priority: 4,
    },
    {
      id: "CAM-2",
      title:
        "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 1,
    },
    {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "In progress",
      priority: 0,
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "Todo",
      priority: 1,
    },
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "Backlog",
      priority: 2,
    },
    {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: ["Feature Request"],
      userId: "usr-3",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "Todo",
      priority: 2,
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: ["Feature Request"],
      userId: "usr-4",
      status: "Backlog",
      priority: 1,
    },
  ];

  const [grouping, groupingDispatch] = useReducer(GroupingReducer, "status");
  const [ticketState, ticketDispatch] = useReducer(TicketReducer, tickets);

  console.log("app tickets", ticketState);
  return (
    <GroupingContext.Provider
      value={{
        grouping,
        groupingDispatch,
        user,
        ticketState,
        ticketDispatch,
      }}
    >
      <div>
        <div className={styles.layoutHeader}>
          <Header selected={grouping} />
        </div>
        <div className={styles.layoutBody}>
          {grouping === "status" ? (
            <Status tickets={tickets} />
          ) : grouping === "priority" ? (
            <Priority tickets={tickets} />
          ) : (
            <User tickets={tickets} users={user} />
          )}
        </div>
      </div>
    </GroupingContext.Provider>
  );
}

export default App;
