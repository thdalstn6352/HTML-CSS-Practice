import React from "react";
import styles from "./ReviewList.module.css";

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}.  ${date.getDate()}`;
};

const ReviewListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  return (
    <div className={styles.ReviewListItem}>
      <img
        className={styles.ReviewListItemImg}
        src={item.imgUrl}
        alt={item.title}
      />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
};

const ReviewList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ReviewListItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
