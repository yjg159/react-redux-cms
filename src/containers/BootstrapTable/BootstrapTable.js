import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


export default class BootstrapTableDemo extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'Product1',
        price: 120
      }, {
        id: 2,
        name: 'Product2',
        price: 80
      }, {
        id: 3,
        name: 'Product3',
        price: 207
      }, {
        id: 4,
        name: 'Product4',
        price: 100
      }, {
        id: 5,
        name: 'Product5',
        price: 150
      }, {
        id: 6,
        name: 'Product1',
        price: 160
      }
    ];

    return (
      <BootstrapTable data={products} striped={Boolean(true)} hover={Boolean(true)}>
        <TableHeaderColumn isKey={Boolean(true)} dataField="id">Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

