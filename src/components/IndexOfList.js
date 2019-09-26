import React from "react";

const IndexOfList = props => {
  return (
    <tr>
      <td id="icon">{props.icon}</td>
      <td id="name">
        <a href={props.homepage || "#"}>{props.name}</a>
      </td>
      <td id="github">
        <a href={props.github}>{props.repoName}</a>
      </td>
      <td id="description">{props.description}</td>
    </tr>
  );
};

export default IndexOfList;
