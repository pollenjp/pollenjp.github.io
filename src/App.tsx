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
      <ul style={{ textAlign: 'left', padding: 0 }}>
        <li>
          <a href="https://scrapbox.io/pollenJP-Portfolio/README">Portfolio</a>
        </li>
        <li>
          <a href="https://pollenjp.github.io/career-timeline">Career Timeline</a>
          <br />
          <a href="https://pollenjp.github.io/career-timeline">
            <img src="https://i.gyazo.com/4fd6c476aafef08fba9b7a3cdfa148b3.png" alt="career-timeline" style={{ height: '15em' }} />
          </a>
        </li>
      </ul>
      <h2 style={{ textAlign: 'left' }}>経歴</h2>
      <Graph />
    </>
  )
}

export default App
