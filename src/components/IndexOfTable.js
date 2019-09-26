import React, { Component } from "react";
import IndexOfList from "./IndexOfList";

class IndexOfTable extends Component {
  constructor(props) {
    super(props);
  }

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
              <th>
                <a href="#">Name</a>
              </th>
              <th>
                <a href="#">Github</a>
              </th>
              <th>
                <a href="#">Description</a>
              </th>
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
