import React, { Component } from "react";
import IndexOfList from "./IndexOfList";

class IndexOfTable extends Component {
  _renderIndexOfList(data) {
    const indexOfList = data.map(
      ({ name, icon, github, repo_name, homepage, description }) => {
        return (
          <IndexOfList
            key={name}
            name={name}
            icon={icon}
            github={github}
            homepage={homepage}
            repoName={repo_name}
            description={description}
          />
        );
      }
    );
    return indexOfList;
  }

  render() {
    return (
      <div className="">
        <table>
          <tbody>
            <tr>
              <th>
                <img alt=""></img>
              </th>
              <th>Name</th>
              <th>Github</th>
              <th>Description</th>
            </tr>
            <tr>
              <th colSpan="5" className="">
                <hr className=""></hr>
              </th>
            </tr>
            {this._renderIndexOfList(this.props.dataSource)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default IndexOfTable;
