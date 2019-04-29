import React, { Component } from "react";
import _ from "lodash";
import "./tableBody.css";
import { counter } from "./counter";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns, sortColumn } = this.props;

    return (
      <tbody className="custom-row">
        {data.map(item => (
          <tr key={item._id + counter()}>
            {columns.map(column => (
              <td
                key={this.createKey(item, column)}
                style={
                  column.path === sortColumn.path
                    ? { backgroundColor: "rgb(255, 233, 233)" }
                    : {}
                }
              >
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
export default TableBody;
