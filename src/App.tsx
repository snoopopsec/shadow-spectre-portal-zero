import { Routes, Route, Navigate, Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: 24, fontFamily: 'monospace' }}>
      Home ok. <Link to="/about">About</Link>
    </div>
  )
}

function About() {
  return (
    <div style={{ padding: 24, fontFamily: 'monospace' }}>
      About ok. <Link to="/">Home</Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
