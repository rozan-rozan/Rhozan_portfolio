import { useState } from 'react';
import '../css/style.css';

import Window11 from '../components/Window11';
import Window21 from '../components/Window21';
import Window22 from '../components/Window22';
import Window23 from '../components/Window23';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video className="bgvideo" autoPlay muted loop>
        <source src="src\assets\bgvideo2.mp4" />
      </video>
      <div className="area1">
        <Window11 />
      </div>
      <div className="area2">
        <Window21 />
        <Window22 />
        <Window23 />
      </div>
    </>
  )
}

export default App
