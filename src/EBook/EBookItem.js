import React from "react";
import { handleEbClick } from "../Actions";

const EBookItem = (props) => {
  const { store } = props;
  return (
    // <Link to="/ebookiteminfo">
    <div
      className="ebookitem"
      onClick={() => {
        store.dispatch(handleEbClick(props.item));
      }}
    >
      <img
        src={
          props.item.volumeInfo.imageLinks &&
          props.item.volumeInfo.imageLinks.thumbnail
            ? props.item.volumeInfo.imageLinks.thumbnail
            : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
        }
        alt="book"
      />
      <div className="eb-second-div">
        <div className="eb-title">{props.item.volumeInfo.title}</div>
        <div className="eb-subtitle">
          <span>Author: </span>
          {props.item.volumeInfo.authors && props.item.volumeInfo.authors[0]
            ? props.item.volumeInfo.authors[0]
            : "No author Available"}
        </div>
        <div className="eb-subtitle">
          <span>Published date: </span>
          {props.item.volumeInfo.publishedDate
            ? props.item.volumeInfo.publishedDate
            : "No Date Available"}
        </div>
      </div>
    </div>
    // </Link>
  );
};
export default EBookItem;
