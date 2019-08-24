import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllRecords } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.getAllRecords();
  }

  render() {
    const { records } = this.props.records;

    return (
      <div>
        <h4>Home page</h4>
        <p>This page is connected to the store</p>
        <p>This page should display {records.length} records from the MongoDB database</p>
      </div>
    );
  }
}

Home.propTypes = {
  getAllRecords: PropTypes.func.isRequired,
  records: PropTypes.object
};

const mapStateToProps = state => ({
  records: state.records,
});

export default connect(mapStateToProps, { getAllRecords })(Home);
