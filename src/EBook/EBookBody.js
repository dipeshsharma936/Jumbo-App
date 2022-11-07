import React from "react";
import { handleEbbackClick } from "../Actions";
import EBookItem from "./EBookItem";

const EBookBody = (props) => {
  const { store } = props;
  // console.log(store.getState().search.searchItems);
  return (
    <div
      className={
        store.getState().eBook.displayHandler ? "ebookbodyt" : "ebookbodyf"
      }
    >
      {store.getState().eBook.displayHandler ? (
        <div className="ebookbody1">
          <div>
            <img
              className="ebookbody1img"
              src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
              alt="back"
              onClick={() => {
                store.dispatch(handleEbbackClick());
              }}
            />
          </div>
          <div className="ebookiteminfo">
            <img
              className="ebookiteminfoimg"
              src={
                store.getState().eBook.clickItem.volumeInfo.imageLinks &&
                store.getState().eBook.clickItem.volumeInfo.imageLinks.thumbnail
                  ? store.getState().eBook.clickItem.volumeInfo.imageLinks
                      .thumbnail
                  : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
              }
              alt="book"
            />
            <div className="ebookiteminfodesc">
              <div className="ebookiteminfodesctitle">
                Title: {store.getState().eBook.clickItem.volumeInfo.title}
              </div>
              <div className="ebookiteminfodescsubtitle">
                Description:{" "}
                {store.getState().eBook.clickItem.volumeInfo.description}
              </div>
              <div className="ebookiteminfodescsubtitle">
                <span>
                  {store.getState().eBook.clickItem.volumeInfo.pageCount} Pages
                </span>
                <span>
                  Rating:{" "}
                  {store.getState().eBook.clickItem.volumeInfo.averageRating
                    ? store.getState().eBook.clickItem.volumeInfo.averageRating
                    : "N/A"}
                </span>
              </div>
              <div className="ebookiteminfodescsubtitle">
                <button
                  className="ebookiteminfobtn"
                  onClick={() =>
                    window.open(
                      store.getState().eBook.clickItem.volumeInfo.previewLink
                    )
                  }
                >
                  Preview Book
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        store.getState().eBook.searchItems.map((item, index) => {
          return <EBookItem item={item} key={index} store={store} />;
        })
      )}
    </div>
  );
};
export default EBookBody;
