import { AnimatedCurve } from './components/AnimatedCurve'
import { HomePanel } from './HomePanel'
import { NavBar } from './components/NavBar'
import { NavItem } from './components/NavItem'
import { Works } from './Works'
import { Skills } from './Skills'
import { Resume } from './Resume'
import { Footer } from './Footer'

function App() {

  return (
    <>
      <NavBar>
        <NavItem itemName='Home' goToID='#home'/>
        <NavItem itemName='Works' goToID='#Works'/>
        <NavItem itemName='Skills' goToID='#skills'/>
        <NavItem itemName='Resume' goToID='#resume'/>
      </NavBar>
      <HomePanel/>
      <AnimatedCurve colour='#334155' variation={1} background="bg-slate-600"/>
      <Works/>
      <AnimatedCurve colour='#475569' variation={2} background='bg-slate-500'/>
      <Skills/>
      <AnimatedCurve colour='#64748b' variation={3} background='bg-slate-600'/>
      <Resume/>
      <AnimatedCurve colour='#475569' variation={1} background='bg-slate-700'/>
      <Footer/>
    </>
  )
}

export default App
