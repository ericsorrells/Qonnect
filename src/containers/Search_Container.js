// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { setFilters, clearFilters } from '../actions/Filters_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import Search from '../components/Search';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (searchParams) => dispatch(setFilters(searchParams)),
    clearFilters: () => dispatch(clearFilters())
  }
}

export default connect(null, mapDispatchToProps)(Search)
