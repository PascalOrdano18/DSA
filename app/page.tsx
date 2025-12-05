
import { Graph } from './structures/graphs/GraphClass';
import { Node } from './structures/graphs/NodeClass';


export default function Home(){
    
    const graph = new Graph();    
    
    graph.addNode(new Node(1, 10, 100, 100));
    graph.addNode(new Node(2, 20, 300, 200));
    graph.addNode(new Node(3, 30, 200, 400));

    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(1, 3);    

     return (
        <div>
            Welcome to DSA
            <div className='bg-white w-full h-full'>
                { graph.draw() }
            </div>
        </div>
    );
}
