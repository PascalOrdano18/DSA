'use client'
import { useRef, useState } from 'react';
import { Graph } from './structures/graphs/GraphClass';
import { Node } from './structures/graphs/NodeClass';

const topics = [
  { id: 'graphs', name: 'Graphs', description: 'Visualize graph structures and algorithms' },
  { id: 'arrays', name: 'Arrays', description: 'Explore array operations and algorithms' },
  { id: 'lists', name: 'Lists', description: 'Learn about linked lists and variations' },
  { id: 'trees', name: 'Trees', description: 'Understand tree structures and traversals' },
  { id: 'hash-tables', name: 'Hash Tables', description: 'Study hash tables and collision handling' },
  { id: 'stacks-queues', name: 'Stacks & Queues', description: 'Master stack and queue operations' },
  { id: 'sorting', name: 'Sorting', description: 'Visualize sorting algorithms in action' },
  { id: 'searching', name: 'Searching', description: 'Learn search algorithms and techniques' },
  { id: 'math', name: 'Discrete Math', description: 'Explore mathematical foundations' },
  { id: 'dynamic-programming', name: 'Dynamic Programming', description: 'Understand DP patterns and solutions' },
  { id: 'greedy', name: 'Greedy Algorithms', description: 'Learn greedy algorithm strategies' },
  { id: 'backtracking', name: 'Backtracking', description: 'Master backtracking techniques' },
];

export default function Home(){
    
    const graphRef = useRef(new Graph());    
    const graph = graphRef.current;
    const [version, setVersion] = useState<number>(0);
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

   
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

    const handleTopicClick = (topicId: string) => {
        setSelectedTopic(topicId);
    }

    const handleBackToHome = () => {
        setSelectedTopic(null);
    }

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const themeClasses = {
        bg: isDarkTheme ? 'bg-black' : 'bg-white',
        text: isDarkTheme ? 'text-white' : 'text-black',
        border: isDarkTheme ? 'border-white' : 'border-black',
        textMuted: isDarkTheme ? 'text-white/70' : 'text-black/70',
        textMutedMore: isDarkTheme ? 'text-white/50' : 'text-black/50',
        hoverBg: isDarkTheme ? 'hover:bg-white' : 'hover:bg-black',
        hoverText: isDarkTheme ? 'hover:text-black' : 'hover:text-white',
    }

    return (
        <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-200`}>
            {/* Header Navigation */}
            <header className={`border-b ${themeClasses.border} sticky top-0 ${themeClasses.bg} z-50 transition-colors duration-200`}>
                <nav className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={handleBackToHome}
                            className={`text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer ${themeClasses.text}`}
                        >
                            DSA Visualizer
                        </button>
                        <div className="flex items-center gap-8">
                            <button className={`text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer ${themeClasses.text}`}>
                                Topics
                            </button>
                            <button className={`text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer ${themeClasses.text}`}>
                                About
                            </button>
                            <button
                                onClick={toggleTheme}
                                className={`border-2 ${themeClasses.border} px-4 py-2 text-sm font-medium ${themeClasses.bg} ${themeClasses.text} ${themeClasses.hoverBg} ${themeClasses.hoverText} transition-all cursor-pointer`}
                            >
                                {isDarkTheme ? 'Light' : 'Dark'}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {!selectedTopic ? (
                    <>
                        {/* Hero Section */}
                        <section className="mb-20">
                            <h1 className={`text-6xl font-bold mb-4 tracking-tight ${themeClasses.text}`}>
                                Learn Data Structures<br />
                                & Algorithms
                            </h1>
                            <p className={`text-xl ${themeClasses.textMuted} max-w-2xl mt-6`}>
                                Interactive visualizations to help you understand complex algorithms and data structures. 
                                Explore, learn, and master computer science fundamentals.
                            </p>
                        </section>

                        {/* Topics Grid */}
                        <section>
                            <h2 className={`text-3xl font-bold mb-8 ${themeClasses.text}`}>Explore Topics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {topics.map((topic) => (
                                    <button
                                        key={topic.id}
                                        onClick={() => handleTopicClick(topic.id)}
                                        className={`border-2 ${themeClasses.border} p-6 text-left transition-all cursor-pointer group ${themeClasses.bg} ${themeClasses.text} ${
                                            isDarkTheme 
                                                ? 'hover:bg-white hover:text-black' 
                                                : 'hover:bg-black hover:text-white'
                                        }`}
                                    >
                                        <h3 className={`text-xl font-bold mb-2 ${
                                            isDarkTheme 
                                                ? 'group-hover:text-black' 
                                                : 'group-hover:text-white'
                                        }`}>
                                            {topic.name}
                                        </h3>
                                        <p className={`text-sm ${themeClasses.textMuted} ${
                                            isDarkTheme 
                                                ? 'group-hover:text-black/70' 
                                                : 'group-hover:text-white/70'
                                        }`}>
                                            {topic.description}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </>
                ) : selectedTopic === 'graphs' ? (
                    /* Graphs Section - Preserving existing logic */
                    <section>
                        <div className="mb-8">
                            <button
                                onClick={handleBackToHome}
                                className={`text-sm mb-4 hover:opacity-70 transition-opacity cursor-pointer inline-flex items-center gap-2 ${themeClasses.text}`}
                            >
                                ← Back to Topics
                            </button>
                            <h2 className={`text-4xl font-bold mb-2 ${themeClasses.text}`}>Graphs</h2>
                            <p className={themeClasses.textMuted}>
                                Visualize graph structures and explore graph algorithms interactively.
                            </p>
                        </div>
                        <div className={`border-2 ${themeClasses.border} p-8 ${isDarkTheme ? 'bg-black' : 'bg-white'} transition-colors duration-200`}>
                            {graph.draw(forceUpdate)}
                        </div>
                        <div className="mt-6">
                            <button 
                                className={`${isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'} border-2 ${themeClasses.border} px-6 py-3 ${isDarkTheme ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} transition-all cursor-pointer`}
                                onClick={() => handleAddNode()}
                            >
                                Add Node
                            </button>
                        </div>
                    </section>
                ) : (
                    /* Placeholder for other topics */
                    <section>
                        <div className="mb-8">
                            <button
                                onClick={handleBackToHome}
                                className={`text-sm mb-4 hover:opacity-70 transition-opacity cursor-pointer inline-flex items-center gap-2 ${themeClasses.text}`}
                            >
                                ← Back to Topics
                            </button>
                            <h2 className={`text-4xl font-bold mb-2 ${themeClasses.text}`}>
                                {topics.find(t => t.id === selectedTopic)?.name}
                            </h2>
                            <p className={themeClasses.textMuted}>
                                {topics.find(t => t.id === selectedTopic)?.description}
                            </p>
                        </div>
                        <div className={`border-2 ${themeClasses.border} p-16 text-center ${themeClasses.bg}`}>
                            <p className={`text-lg ${themeClasses.textMutedMore}`}>
                                Coming soon. This section is under development.
                            </p>
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className={`border-t ${themeClasses.border} mt-20 transition-colors duration-200`}>
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <p className={`text-sm ${themeClasses.textMutedMore}`}>
                        DSA Visualizer — Learn through visualization
                    </p>
                </div>
            </footer>
        </div>
    );
}
