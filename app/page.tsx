'use client'
import { useRef, useState } from 'react';
import { Graph } from './structures/graphs/GraphClass';
import { Node } from './structures/graphs/NodeClass';


export default function Home(){
    
    const graphRef = useRef(new Graph());    
    const graph = graphRef.current;
    const [version, setVersion] = useState<number>(0);


   
    const populateGraph = () => {
        graph.addNode(new Node(1, 10, 100, 100));
        graph.addNode(new Node(2, 20, 200, 150));
        graph.addNode(new Node(3, 30, 400, 100));
        graph.addNode(new Node(4, 40, 100, 400));
        graph.addNode(new Node(5, 50, 200, 300));

        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.addEdge(1, 3);    
        graph.addEdge(1, 4);    
        graph.addEdge(2, 5);    
        graph.addEdge(2, 3);    
        graph.addEdge(4, 5); 
    }

    
    if (graph.nodesAmount === 0){
        populateGraph();
    }

    const forceUpdate = () => setVersion(v => v + 1);

    const handleAddNode = () => {
        graph.addNode(new Node(6,60, 400, 250))

        graph.addEdge(6, 3);
        graph.addEdge(6, 1)
        forceUpdate();
    }

     return (
        <div>
            Welcome to DSA
            <div className='bg-white w-full h-full'>
                { graph.draw(forceUpdate) }
            </div>

            <div>
                <button 
                    className='bg-black border-2 border-white hover:bg-yellow-300 hover:text-black text-yellow-300 transition-all'
                    onClick={() => handleAddNode()}
                >
                    Add Node
                </button>
            </div>
        </div>
    );
}
