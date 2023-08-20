/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import {GrFormAdd} from 'react-icons/gr';
import {IoEllipsisHorizontal} from 'react-icons/io5';
import {BsCircle} from 'react-icons/bs';
import styles from "./UserTemplate.module.css";
import Card from '../../Card/Card';
import Avatar from '../../Avatar/Avatar';
import GroupingContext from '../../../context/grouping';

function UserTemplate({ currentUser, tickets }) {
const {ticketState, ticketDispatch} = useContext(GroupingContext);
  return (
    <div className={styles.UserContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>
            <Avatar currentUser={currentUser} />
          </div>
          <span className={styles.userName}>{currentUser.name}</span>
          <span className={styles.itemLength}>{tickets?.length}</span>
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
        {
            tickets.map((ticket,index) => {
                return (
                    <Card key={index} tickets={ticket} showAvatar={false} groupingType="User"/>
                )
            })
        }
      </div>
    </div>
  );
}

export default UserTemplate;
