import React, { Component } from "react";
import { DiagramContext } from "../DiagramState";

class Sidebar extends Component {
  static contextType = DiagramContext;

  state = {
    nodeName: "",
    edgeSource: "",
    edgeTarget: "",
  };

  handleAddNode = () => {
    const { addNode } = this.context;
    const { nodeName } = this.state;

    if (nodeName.trim()) {
      addNode({ id: nodeName, type: "default", position: { x: 100, y: 100 }, data: { label: nodeName } });
      this.setState({ nodeName: "" });
    }
  };

  handleAddEdge = () => {
    const { addEdge } = this.context;
    const { edgeSource, edgeTarget } = this.state;

    if (edgeSource.trim() && edgeTarget.trim()) {
      addEdge({ id: `${edgeSource}-${edgeTarget}`, source: edgeSource, target: edgeTarget, type: "default" });
      this.setState({ edgeSource: "", edgeTarget: "" });
    }
  };

  render() {
    const { nodeName, edgeSource, edgeTarget } = this.state;

    return (
      <div>
        <h3>Sidebar</h3>
        <p>Add or Edit Nodes and Edges Here</p>
        
        <div>
          <h4>Add Node</h4>
          <input
            type="text"
            placeholder="Node Name"
            value={nodeName}
            onChange={(e) => this.setState({ nodeName: e.target.value })}
          />
          <button onClick={this.handleAddNode}>Add Node</button>
        </div>

        <div>
          <h4>Add Edge</h4>
          <input
            type="text"
            placeholder="Source Node"
            value={edgeSource}
            onChange={(e) => this.setState({ edgeSource: e.target.value })}
          />
          <input
            type="text"
            placeholder="Target Node"
            value={edgeTarget}
            onChange={(e) => this.setState({ edgeTarget: e.target.value })}
          />
          <button onClick={this.handleAddEdge}>Add Edge</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
