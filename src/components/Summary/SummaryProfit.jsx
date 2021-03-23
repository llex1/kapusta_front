import React, { Component } from "react";
import { connect } from "react-redux";
import General from "./GeneralSummary";
import fetchSummery from "../../redux/summary/operationSummery";

class Summary extends Component {
  componentDidMount() {
    this.props.toFetchProducts("profit");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.db.prtofit !== this.props.db.profit) {
      this.props.toFetchProducts("profit");
    }
  }

  render() {
    const { title } = this.props;
    return (
      <>
        <General array={this.props.array} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  array: state.summary.payload,
  db: state.db,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toFetchProducts: (name) => dispatch(fetchSummery(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
