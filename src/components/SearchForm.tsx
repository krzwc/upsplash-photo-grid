import React from "react";
import MUITextField from "./MUITextField";

type KeywordProps = {
  onSearch: (keyword: string) => void;
};

type KeywordState = {
  keyword: string;
};

export default class SearchForm extends React.Component<
  KeywordProps,
  KeywordState
> {
  state = {
    keyword: ""
  };

  onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ keyword: (e.target as HTMLInputElement).value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch(this.state.keyword);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          placeholder="Search..."
        /> */}
        <MUITextField onChange={this.onSearchChange} />
      </form>
    );
  }
}
