
import { useState } from 'react';


type Status = "free" | "visiting" | "visited";

export class Node{
    id: number;
    value: number;
    x: number;
    y: number;
    
    status: Status | null;

    constructor(id: number, value: number, x: number, y: number, ){
        this.id = id;
        this.value = value;
        this.x = x;
        this.y = y;
        this.status = "free";
    }



    handleClick = (forceUpdate: () => void) => {
        if(this.status === "free") {
            this.setVisited();
        } else if (this.status === "visited") {
            this.setFree();
        }
        forceUpdate();
    }

    draw(forceUpdate: () => void){
        return (
            <g 
                key={this.id} 
                onClick={() => this.handleClick(forceUpdate) }
                className='hover:cursor-pointer'
            >
              <circle
                cx={this.x}
                cy={this.y}
                r={20}
                fill = {this.status === "free" ? "lightblue" : this.status === "visiting" ? "blue" : "green"}
                stroke="black"
                strokeWidth={2}
              />
              <text
                x={this.x}
                y={this.y + 5}
                fontSize="12"
                textAnchor="middle"
                fill="black"
              >
                {this.value}
              </text>
            </g>
        )
    }


    setFree(){
        this.status = "free";
    }
    setVisiting(){
        this.status = "visiting";
    }
    setVisited(){
        this.status = "visited";
    }
    
    
    

}
