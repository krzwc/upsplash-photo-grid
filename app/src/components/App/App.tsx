import React from "react";
import SearchForm from "../SearchForm";
import ImageGridList from "../ImageGridList";
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
      <>
        <div className="text-center m-auto p-2 fixed top-0 bg-white shadow-md z-10 w-full">
          <SearchForm onSearch={this.fetchPhotos} />
        </div>
        {payload && <ImageGridList tileData={payload} />}
      </>
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
    isFetching,
  };
};

export default connect(mapStateToProps)(App);
