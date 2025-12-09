

export class Array{
    length: number;
    array: number[];

    constructor(length: number){
        this.length = length;
        this.array = [];
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

    populate(){
        for(let i = 0; i < this.length; i++){
            this.setValue(i, i);
        }
    }

    populateRandom(){
        for(let i = 0; i < this.length; i++){
            this.setValue(i, Math.floor(Math.random() * 10));
        }
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
                    <g key={id}>
                        <rect
                            x={id * 60}
                            y={20}
                            width={60}
                            height={40}
                            fill="white"
                            stroke="black"
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
