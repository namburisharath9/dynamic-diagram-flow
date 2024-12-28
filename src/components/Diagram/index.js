import React, { Component } from "react";
import { DiagramContext } from "../DiagramState";

class Diagram extends Component {
  static contextType = DiagramContext;

  render() {
    const { nodes, edges } = this.context;

    return (
      <div>
        <h3>Diagram Area</h3>
        <p>Nodes: {nodes.length}</p>
        <ul>
          {nodes.map((node) => (
            <li key={node.id}>{node.data.label}</li>
          ))}
        </ul>
        <p>Edges: {edges.length}</p>
        <ul>
          {edges.map((edge) => (
            <li key={edge.id}>
              {edge.source} → {edge.target}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Diagram;
