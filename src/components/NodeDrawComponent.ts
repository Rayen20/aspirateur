import React from 'react';
import { Settings } from './Settings';


export class NodeDrawComponent  extends React.Component  {
    
    public props: any;
    public test : any

    constructor(props: {} | Readonly<{}>) {
        super(props);

        

            this.clearAndDraw();
        
    }
    
    public Awake(): void {
      // to implement
    }
    componentDidMount() {
       
    }
    clearAndDraw() {
      
       
        this.DirtyDraw()
    
}private DirtyDraw(): void {
    // ... //

    const canvas = document.createElement('canvas')
    const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset
    canvas.setAttribute('width', canvasSize.toString())
    canvas.setAttribute('height', canvasSize.toString())
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')!
    ctx.beginPath()
    ctx.fillStyle = Settings.grid.color
    ctx.rect(this.test.x, this.test.Start.y, this.test.Size.x, this.test.Size.y)
    ctx.fill()
}


    public Update(deltaTime: number): void {
      // to implement
    }
  }