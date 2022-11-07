import React from "react";
import { onClickSearch } from "../Actions";
import EBookBody from "./EBookBody";
import EBookHeader from "./EBookHeader";

class EBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputSearch: "" };
  }

  handleSearch = (e) => {
    const { inputSearch } = this.state;
    e.preventDefault();
    // console.log(searchState);
    this.props.store.dispatch(onClickSearch(inputSearch));
  };
  render() {
    const { store } = this.props;

    return (
      <div className="ebook">
        <EBookHeader />
        <div>
          <input
            type="text"
            className="book-search-input"
            onChange={(e) => {
              this.setState({ inputSearch: e.target.value });
              // console.log("this.inputSearch", this.state.inputSearch);
            }}
          />
          <button className="search-btn" onClick={(e) => this.handleSearch(e)}>
            Search
          </button>
        </div>
        <EBookBody store={store} />
      </div>
    );
  }
}
export default EBook;
