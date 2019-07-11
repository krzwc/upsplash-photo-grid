import React from "react";
import SearchForm from "../SearchForm";
import ImageGridListContainer from "../ImageGridListContainer";
import { fetchImgsIfNeeded, setKeyword } from "../../actions";
import { connect } from "react-redux";
import { AppState, AppProps } from "./types";

export class App extends React.Component<AppProps, {}> {
  componentDidMount() {
    const { dispatch, keyword } = this.props;
    dispatch(fetchImgsIfNeeded(keyword));
  }

  componentDidUpdate(prevProps: AppProps) {
    if (prevProps.keyword !== this.props.keyword) {
      const { dispatch, keyword } = this.props;
      dispatch(fetchImgsIfNeeded(keyword));
    }
  }

  fetchPhotos = (keyword: string) => {
    const { dispatch } = this.props;
    dispatch(setKeyword(keyword));
    dispatch(fetchImgsIfNeeded(keyword));
  };

  render() {
    const { payload } = this.props;
    return (
      <div>
        <div style={{ margin: "auto auto", padding: "10px", width: "750px" }}>
          <SearchForm onSearch={this.fetchPhotos} />
        </div>
        {payload && <ImageGridListContainer payload={payload} />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const { imgs, currentKeyword } = state;
  const { keyword } = currentKeyword;
  const { payload, isFetching } = imgs;

  return {
    keyword,
    payload,
    isFetching
  };
};

export default connect(mapStateToProps)(App);
