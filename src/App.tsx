import './App.css'
import { Graph } from './Graph'
import imgUrl from './assets/pollenjp.png'

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'left' }}>pollenjp.github.io</h1>
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <img src={imgUrl} alt="pollenjp" style={{ width: '100px', height: '100px' }} />
      </div>
      <br />
      <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
        <li>
          <a href="https://scrapbox.io/pollenJP-Portfolio/README">Portfolio</a>
        </li>
        <li></li>
      </ul>
      <h2 style={{ textAlign: 'left' }}>経歴</h2>
      <Graph />
    </>
  )
}

export default App
