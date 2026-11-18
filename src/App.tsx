//import CodePreview from './CodePreview'
import Explorer from './components/Explorer'
import StatusBar from './components/StatusBar'
import { useState } from 'react';
import type { FileName } from './data/typefile';

function App() {
  const [activeFile, setActiveFile] = useState<FileName>("about.html");

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen overflow-hidden">
      <Explorer activeFile={activeFile} setActiveFile={setActiveFile} />
      <StatusBar activeFile={activeFile} />
    </div>
  )
}

export default App
