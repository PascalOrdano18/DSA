

export class Graph{
    nodesAmount: number;
    nodes: Map<number, Node[]>;
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
}
