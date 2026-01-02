
import { Node } from './NodeClass'

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

        this.nodesAmount++;
    }

    addEdge(id1: number, id2: number){
        this.adjacencies.get(id1)?.push(id2);
        this.adjacencies.get(id2)?.push(id1);
    }

    draw(forceUpdate: () => void){
        return(
            <svg width={600} height={600}>
                {[...this.adjacencies.entries()].map(([fromNodeId, neighbors]) => {
                        const fromNode = this.nodes.get(fromNodeId);
                        if(!fromNode) return null;

                        // Esta linea crea un Set a partir de neighbors (le saca repetidos), y usa el spread operator y crea un nuevo array.
                        // sacamos repeditos de neighbors
                        const uniqueNeighbors = [...new Set(neighbors)];
                        
                        return uniqueNeighbors.map((toNodeId) => {
                            const toNode = this.nodes.get(toNodeId);
                            if(!toNode) return null;
                            if(fromNodeId > toNodeId) return null;

                            const edgeKey = `${fromNodeId}-${toNodeId}`;

                            return (
                                <line 
                                    key={edgeKey}
                                    x1={fromNode.x}
                                    y1={fromNode.y}
                                    x2={toNode.x}
                                    y2={toNode.y}
                                    stroke="black"
                                    strokeWidth={2}
                                /> 
                            )
                                           
                        })
                    })
                }
                { 
                    [...this.nodes.values()].map((node) => node.draw(forceUpdate))
                }
            </svg>
        )
    }


    bfs(){
        
    }
}
