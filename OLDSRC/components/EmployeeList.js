import _ from 'lodash';
import React, { Component } from 'react';
import { View , Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps is the next set of props that the
    // commponent will recieve
    // and this.props is still the old props
    this.createDataSource(nextProps);
  }

  renderRow(employee) {
    return <ListItem employee={employee}/>;
  }

  render() {
    return (
      <ListView
        enableEmptySection
        dataSource={this.dataSource}
        renderRow={this.renderRow}>
      </ListView>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees,
  (val, uid) => { return { ...val, uid } } );
  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
