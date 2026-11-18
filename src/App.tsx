//import CodePreview from './CodePreview'
import Explorer from './components/Explorer'
import StatusBar from './components/StatusBar'
import { useState } from 'react';

function App() {
  const [activeFile, setActiveFile] = useState("about.html");

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      <Explorer activeFile={activeFile} setActiveFile={setActiveFile} />
      <StatusBar activeFile={activeFile} />
    </div>
  )
}

export default App
