import React, {Component} from 'react';
import {Table} from 'fixed-data-table';
// const {Table} = require('fixed-data-table');

export default class BasicTable extends Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        // TODO: Add columns
      </Table>
    );
  }
}
