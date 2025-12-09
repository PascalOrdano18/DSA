'use client'
import { useRef, useState } from 'react';
import { Graph } from '../structures/graphs/GraphClass';
import { Node } from '../structures/graphs/NodeClass';
import { PageLayout } from '../components/PageLayout';
import { useTheme } from '../components/ThemeProvider';
import BackToHome from '../components/BackToHome';
import CodeSnippet from '../components/CodeSnippet';

export default function GraphsPage(){
    const graphRef = useRef(new Graph());    
    const svgRef = useRef<SVGSVGElement>(null);
    const graph = graphRef.current;
    const [version, setVersion] = useState<number>(0);
    const { themeClasses, isDarkTheme } = useTheme();

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
        <PageLayout>
            <section>
                <div className="mb-8">
                    <BackToHome /> 
                    <h2 className={`text-4xl font-bold mb-2 ${themeClasses.text}`}>Graphs</h2>
                    <p className={themeClasses.textMuted}>
                        Visualize graph structures and explore graph algorithms interactively.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Graph Visualization and Controls */}
                    <div className="flex flex-col gap-6">
                        <div className={`border-2 ${themeClasses.border} p-6 ${isDarkTheme ? 'bg-black' : 'bg-white'} transition-colors duration-200`}>
                            {graph.draw(forceUpdate)}
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <button 
                                className={`${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} border-2 ${themeClasses.border} px-6 py-3 rounded ${isDarkTheme ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all cursor-pointer`}
                                onClick={() => handleAddNode()}
                            >
                                Add Node
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Code Snippet */}
                    <div className='flex flex-col'>
                        <CodeSnippet code='aca va el codigo del grafo' />
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}

