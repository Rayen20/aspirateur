import React, { useRef, useEffect } from 'react';
import { Settings } from './Settings';



export default class CanvasComponent extends React.Component<any, any > {
	public _resizeHandler: any;
    public canvas: any;
    public in: any ;
    public mcanvas: any;
    public inn: any;
    public props: any;
    public document: any;
    public initilal :  boolean = true;
    public isLoggedIn :  boolean = false;
    public x :  any;
    public show :  any;
    public ctx :  any;
  
    public positionx :  any;
    public positiony :  any;
    public res :  any;
    public orientationasp :  any;
    public avance : boolean = false;
    constructor(props: {} ) {
        super(props);
        

        this.state = {
           
            initilal: true,
           x: '' ,
           show : true,
           positionx : '',
           positiony : 0,
           count: 90,
          
           ctx :'',
           res: false,
           orientationasp :'Nord'

          };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handlelick = this.handlelick.bind(this);
        this.handlelickxy = this.handlelickxy.bind(this);
        
        this._resizeHandler = () => {
            /* Allows CSS to determine size of canvas */
            this.canvas.width = this.canvas.setAttribute('width', '500px');
            this.canvas.height = this.canvas.setAttribute('height', '500px');
            const canvas = document.createElement('canvas')
            this.initilal = false;
            this.isLoggedIn = false;
            this.avance = false;
            const ctx = canvas.getContext('2d')!
            //this.clearAndDraw();
        }
    }
      myChangeHandler = (event : any) => {
        this.setState({x: event.target.value});
        
      }
      myChangeb = () => {
        this.setState({show:  false});
        
      }
      myChangeHandlerX = (event : any) => {
        this.setState({positionx: event.target.value});
        
      }
      myChangeHandlery = (event : any) => {
        this.setState({positiony: event.target.value});
        
      }
    componentDidMount() {
  
        //this.rotation();
     
      console.log(this.initilal);
      
      console.log(Settings.grid.dimension);
      console.log(this.x);
      console.log(this.x);
      console.log(this.myChangeb);
      console.log(this.state.show);
        this.clearAndDraw();
       
        this.DirtyDraw();
       
       
        this.handleLoginClick()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resizeHandler);
    }

    componentDidUpdate(prevProps: { secondRect: any; }, prevState: any) {
        if (this.props.secondRect !== prevProps.secondRect) {
            this.clearAndDraw();
        }
    }

    clearAndDraw() {
        const ctx = this.canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.DirtyDraw()
            //this.draw();
            //this.rotation()
           
         
        }
    }
    /*dim(x : number) {
        
        
        
        Settings.grid.dimension = this.state.x
        console.log( Settings.grid.dimension)
       
        
    }*/
    private DirtyDraw(): void {
        // ... //

        const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '100px');
    canvas.setAttribute('height', '10px');
    document.body.appendChild(canvas);
    Settings.grid.dimension = this.state.x
    console.log( this.state.x)  
    const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * this.state.x+ Settings.grid.nodeOffset // <--- ADD
    canvas.setAttribute('width', canvasSize.toString())
    canvas.setAttribute('height', canvasSize.toString())
    
    const size = Settings.grid.nodeSize // <--- CHANGE
    const offset = Settings.grid.nodeOffset // <--- CHANGE
    const rec = canvas.getContext('2d')!
    /*rec.beginPath()
    rec.fillStyle = 'rgba(255,0,0,1)'
    rec.rect(50, 50, 50, 50)
    rec.fill()*/
    
    for (let y = 0; y < Settings.grid.dimension; y++) { // <--- CHANGE
        for (let x = 0; x < Settings.grid.dimension; x++) {
      const ctx = canvas.getContext('2d')!
      ctx.beginPath()
      ctx.fillStyle = Settings.grid.color // <--- CHANGE
      ctx.rect((size + offset) * x, (size + offset) * y, size, size) // <--- CHANGE
      ctx.fill()
     this.draw()
      //rec.fill()
    }}
        
    }
   
    handleLoginClick() {

    
        //this.setState({isLoggedIn : true});
        
        this.setState({initilal : false});
        this.initilal = false;
        console.log(this.initilal);
      console.log(this.isLoggedIn);
     
        
      }
      handlelick(){
          //this.dim(this.x)
          this.DirtyDraw()
          //console.log(this.dim(this.x))
         
      }
      handlelickxy(){
      
        this.draw()
        //console.log(this.dim(this.x))
        
       
    }
   
    handleClickdr = () => {
        const count = this.state.count;
        this.setState({ count: count + 90 });
        this.rotation();
      };
      handleClickdg = () => {
        const count = this.state.count;
        this.setState({ count: count - 90 });
        this.rotationG();
        
      };
      handleClictrans = () => {
        
         //const positiony = this.state.positiony
        // const p = (this.state.positiony ) + 1
       // this.setState({ positiony: positiony + 2  });
        this.trans();
      };
      showres = () => {
        const res = this.state.res;
        this.setState({ res: true });
        //const positiony = this.state.positiony
       // const p = (this.state.positiony ) + 1
      // this.setState({ positiony: positiony + 2  });
       
     };
    draw(){
      
        
        /*if (this.props.secondRect) {
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(30, 30, 50, 50);
            ctx.fillRect(40, 50, 50, 50);
            
        }*/
      //  console.log(this.initilal);
    if(this.state.show){
       
        const canvas = document.createElement('canvas')
    canvas.setAttribute('width', '500px')
    canvas.setAttribute('height', '500px')
    document.body.appendChild(canvas)

    // draw red square

    const ctx = canvas.getContext('2d')!
    ctx.beginPath()
    ctx.fillStyle = 'rgba(255,0,0,1)'
    ctx.rect(245, 245, 60, 60)
    ctx.fill()
   
        
    canvas.setAttribute('width', '500px')
    canvas.setAttribute('height', '500px')
    document.body.appendChild(canvas)

    // draw red square
    const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * this.state.x+ Settings.grid.nodeOffset // <--- ADD
    canvas.setAttribute('width', canvasSize.toString())
    canvas.setAttribute('height', canvasSize.toString())
    
    const size = Settings.grid.nodeSize // <--- CHANGE
    const offset = Settings.grid.nodeOffset // <--- CHANGE
   
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,0,0,1)'
    var p = this.state.positionx -1;
    var t = this.state.positiony -1
    const pos1 = ctx.rect((size+offset )*(p), (size+offset)*(t), 60, 60)

    ctx.fill()
   
    this.setState({ positionx: p});
    this.setState({ positiony: t});
     

    }
}
    rotation()  {
        const canvas = document.createElement('canvas')
        canvas.setAttribute('width', '500px')
        canvas.setAttribute('height', '500px')
        document.body.appendChild(canvas)
    
        // draw red square
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * this.state.x+ Settings.grid.nodeOffset // <--- ADD
        canvas.setAttribute('width', canvasSize.toString())
        canvas.setAttribute('height', canvasSize.toString())
        
        const size = Settings.grid.nodeSize // <--- CHANGE
        const offset = Settings.grid.nodeOffset // <--- CHANGE
    
        const ctx = canvas.getContext('2d')!
      //  ctx.save();
        ctx.translate(((size+offset )*(this.state.positionx ) )+30,(  (size+offset)*(this.state.positiony ))+30);
        var val = this.state.count 
       // var a = 90;
        //var t = 
        if(val ){
       ctx.rotate(val);// rotation
        ctx.translate(-(((size+offset )*this.state.positionx )+30),-( (  (size+offset)*this.state.positiony )+30)); 
        ctx.fillStyle = '#4D4E53';
        ctx.fillRect((size+offset )*this.state.positionx, (size+offset)*this.state.positiony, 60, 60)
        //ctx.restore();
        if(this.state.count == "90" ) {
            this.setState({ orientationasp: "Droite"  });
        }
        
        if(this.state.count == "270"){
            this.setState({ orientationasp: "Gauche"  });
        }
        if(this.state.count == "0"){
            this.setState({ orientationasp: "Nord"  });
        }
        if(this.state.count == "360"){
            this.setState({ orientationasp: "Nord"  });
        }
        if(this.state.count == "180"){
            this.setState({ orientationasp: "Ouest"  });
        }
    
    }
        
        if(val > 360){
            this.setState({ count: 90  });
        }
    }
    rotationG()  {
        const canvas = document.createElement('canvas')
        canvas.setAttribute('width', '500px')
        canvas.setAttribute('height', '500px')
        document.body.appendChild(canvas)
    
        // draw red square
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * this.state.x+ Settings.grid.nodeOffset // <--- ADD
        canvas.setAttribute('width', canvasSize.toString())
        canvas.setAttribute('height', canvasSize.toString())
        
        const size = Settings.grid.nodeSize // <--- CHANGE
        const offset = Settings.grid.nodeOffset // <--- CHANGE
    
        const ctx = canvas.getContext('2d')!
      
      var val = this.state.count 
        ctx.translate(((size+offset )*this.state.positionx )+30,(  (size+offset)*this.state.positiony)+30);
        if(val ){
        ctx.rotate(-val);// rotation
        ctx.translate(-(((size+offset )*this.state.positionx )+30),-( (  (size+offset)*this.state.positiony)+30)); 
        ctx.fillStyle = '#4D4E53';
        ctx.fillRect((size+offset )*this.state.positionx, (size+offset)*this.state.positiony, 60, 60)
        if(this.state.count == -90 ) {
            this.setState({ orientationasp: "Gauche"  });
        }
        
        if(this.state.count == "-270"){
            this.setState({ orientationasp: "Droite"  });
        }
        if(this.state.count == "0"){
            this.setState({ orientationasp: "Nord"  });
        }
        if(this.state.count == "-360"){
            this.setState({ orientationasp: "Nord"  });
        }
        if(this.state.count == "-180"){
            this.setState({ orientationasp: "Ouest"  });
        }

        }
        //ctx.restore();
    }
    trans()  {
        const canvas = document.createElement('canvas')
        canvas.setAttribute('width', '500px')
        canvas.setAttribute('height', '500px')
        document.body.appendChild(canvas)
       // this.setState({ count: 90 });
        // draw red square
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * this.state.x+ Settings.grid.nodeOffset // <--- ADD
        canvas.setAttribute('width', canvasSize.toString())
        canvas.setAttribute('height', canvasSize.toString())
        
        const size = Settings.grid.nodeSize // <--- CHANGE
        const offset = Settings.grid.nodeOffset // <--- CHANGE
    
        const ctx = canvas.getContext('2d')!
      //  ctx.save();
      ctx.beginPath()
        ctx.fillStyle = '#4D4E53';
       
       
        if(this.state.orientationasp =="Nord"){
            const p = ((this.state.positiony )  -1 + 2 ) 
            this.setState({ positiony:  p });
            ctx.rect((size+offset )*(this.state.positionx )  *1, ((size+offset)*p), 60, 60) 
        }
        if(this.state.orientationasp =="Droite"){
            const p = ((this.state.positionx )  -1 + 2 ) 
            this.setState({ positionx:  p });
            ctx.rect((size+offset )*(p) , ((size+offset)*(this.state.positiony ) ), 60, 60) 
        }
        if(this.state.orientationasp =="Ouest"){
            const p = ((this.state.positiony )  -1  ) 
            this.setState({ positiony:  p });
            ctx.rect((size+offset )*(this.state.positionx )  *1, ((size+offset)*p), 60, 60) 
        }
        if(this.state.orientationasp =="Gauche"){
            const p = ((this.state.positionx )  -1  ) 
            this.setState({ positionx:  p });
            ctx.rect((size+offset )*(p) , ((size+offset)*(this.state.positiony ) ), 60, 60) 
        }
        //ctx.restore();
        ctx.fill()
    }


    render() {
       
        
        return (
            <div>
               
            <canvas ref = {canvas => {this.canvas = canvas }} />
           <div id ="btn">
           

                 <h2>Définir la dimension du grille : {this.state.x}</h2>
                 <input type="number"     onChange={this.myChangeHandler}  />
                 <br></br>
                 <br></br>

                 <button   onClick={() => this.handlelick()}>
           grille 
           </button>

                 <h2>Position sur X  : {this.state.positionx }</h2>
                 <input  type="number"    onChange={this.myChangeHandlerX}  />
                 <h2>Position sur Y  : {this.state.positiony  }</h2>
                 <input type="number"      onChange={this.myChangeHandlery}  />
                <br></br>
                <br></br>
                 <button   onClick={() => this.handlelickxy()}>
         Positionner 
           </button>

                 <h1>orientation   : {this.state.orientationasp }</h1>
                 
             
           <button   onClick={() =>this.handleClickdr()}>
         Rotation Droite
           </button>
           <br></br>
           <button   onClick={() =>this.handleClickdg()}>
           Rotation Gauche
           </button>
           <br></br>
           <button   onClick={() =>this.handleClictrans()}>
         Avancer
           </button>
           <h2>Voir Résultat : </h2>

           <button   onClick={() =>this.showres()}>
           Resultat
           </button>

           { this.state.res ? 
           
           <h2>Position final de  x: {(this.state.positionx) -1 + 2}  et y: {this.state.positiony -1 + 2}
           <br></br>
           Orientation est : {this.state.orientationasp }
           </h2>
          
           : null }
           </div>
            </div>
            
        );
    }
}