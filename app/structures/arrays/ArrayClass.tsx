

export class Array{
    length: number;
    array: number[];

    currentId: number | null; // prueba de borrado

    constructor(length: number){
        this.length = length;
        this.array = [];
        this.currentId = null;
    }

    setLength(length: number){
        this.length = length;
    }

    setValue(id: number, value: number){
        if(id >= this.length){
            console.log("LOCO TE PASASTE CON EL ARRAY");
        }
        
        this.array[id] = value;
    }

    deleteValue(){
        let id = this.currentId;

        if(id === null || id < 0 || id >= this.length) return ;

        for(let i = id; i < this.length - 1; i++){
            this.array[i] = this.array[i + 1];
        }
        
        this.array.pop();
        this.length = this.length - 1;
        
        this.currentId = null;
    }

    setCurrentId(id: number){
        this.currentId = id;
    }

    populate(){
        for(let i = 0; i < this.length; i++){
            this.setValue(i, i);
        }
        this.currentId = null;
    }

    populateRandom(){
        for(let i = 0; i < this.length; i++){
            this.setValue(i, Math.floor(Math.random() * 10));
        }
        this.currentId = null;
    }

    code(){
        const code = `
            populate(){
                if(this.array[0]) return ;
                for(let i = 0; i < this.length; i++){
                    this.setValue(i, i);
                }
            } 
        `

        return code;
    }

    draw(){
        return (
            <svg width={600} height={600}>
                {this.array.map((value, id) => (
                    <g 
                        key={id}
                        onClick={() => this.currentId = id}
                    >
                        <rect
                            x={id * 60}
                            y={20}
                            width={60}
                            height={40}
                            fill={id === this.currentId ? "#B3FFCC" : "white"}
                            stroke={id === this.currentId ? "#00CC66" : "black"}
                        />
                        <text
                            x={id * 60 + 30} 
                            y={45}          
                            textAnchor="middle"
                            fontSize={14}
                        >
                            {value}
                        </text>
                    </g>
                ))}
            </svg>
        );
    }
    
}
