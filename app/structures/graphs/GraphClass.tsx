
import Node from './NodeClass'

export class Graph{
    nodesAmount: number;
    nodes: Map<number, Node>;
    adjacencies: Map<number, number[]>;


    constructor(){
        this.nodesAmount = 0;
        this.adjacencies = new Map();
        this.nodes = new Map();
    }


    addNode(node: Node){
        this.nodes.set(node.id, node);
        this.adjacencies.set(node.id, []); // array vacio porque arranca sin vecinos
    }

    addEdge(id1: number, id2: number){
        this.adjacencies.get(id1)?.push(id2);
        this.adjacencies.get(id2)?.push(id1);
    }

    draw(){
        return(
            <svg width={600} height={600}>
                {[...this.adjacencies.entries()].map(([fromNodeId, neighbors]) => {
                        const fromNode = this.nodes.get(fromNodeId);
                        if(!fromNode) return null;
                        
                        return neighbors.map((toNodeId) => {
                            const toNode = this.nodes.get(toNodeId);
                            if(!toNode) return null;

                           <line 
                                key={`${fromNodeId} - ${toNodeId}`}
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke="black"
                            />                 
                        })
                    })
                }
                { 
                    [...this.nodes.values()].map((node) => node.draw())
                }
            </svg>
        )
    }
}
