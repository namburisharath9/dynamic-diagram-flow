import React, { Component, createContext } from "react";

export const DiagramContext = createContext();

class DiagramProvider extends Component {
  state = {
    nodes: [],
    edges: [],
  };

  addNode = (node) => {
    this.setState((prevState) => ({
      nodes: [...prevState.nodes, node],
    }));
  };


  addEdge = (edge) => {
    this.setState((prevState) => ({
      edges: [...prevState.edges, edge],
    }));
  };

  loadMetadata = async () => {
    try {
      const response = await fetch("/metadata.json");
      const data = await response.json();
      this.setState({
        nodes: data.nodes,
        edges: data.edges,
      });
    } catch (error) {
      console.error("Error loading metadata:", error);
    }
  };

  componentDidMount() {
    this.loadMetadata(); // Load metadata when the component mounts
  }

  render() {
    const { children } = this.props;
    const { nodes, edges } = this.state;

    return (
      <DiagramContext.Provider
        value={{
          nodes,
          edges,
          addNode: this.addNode,
          addEdge: this.addEdge,
        }}
      >
        {children}
      </DiagramContext.Provider>
    );
  }
}

export default DiagramProvider;
