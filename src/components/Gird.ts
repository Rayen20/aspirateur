import React from 'react';
import { Node } from './Node';

import { Settings } from './Settings';


export class Grid extends React.Component {
  private _nodes: Node[] = []
  
    public props: any;
    Node :any

    constructor(props: {} | Readonly<{}>) {
        super(props);
       
      
        }
    

  public get Nodes(): Node[] {
    return this._nodes
  }
  componentDidMount() {
    for (const node of this._nodes) {
        node.Awake()
      }
      this.InitNodes()
}

private InitNodes(): void {
    const size = Settings.grid.nodeSize
    const offset = Settings.grid.nodeOffset
    for (let y = 0; y < Settings.grid.dimension; y++) {
      for (let x = 0; x < Settings.grid.dimension; x++) {
        const node = this.Node;

        this._nodes.push(node)
      }
    }
  }
  
  
  
}