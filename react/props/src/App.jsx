
import './App.css'
import ClassDefaultProps from './components/ClassDefaultProps'
import ClassPropsDestucting from './components/ClassPropsDestucting'
import DefaultProps from './components/DefaultProps'
import DestructuringProps from './components/DestructuringProps'
import PropsDemo from './components/PropsDemo'
import PropsInClass from './components/PropsInClass'

function App() {
 

  return (
    <>
        <PropsDemo name="Ashish" age={22}/>
        <PropsDemo name="Bob" age={25}/>

        <DestructuringProps name="Ashish" age={22}/>

        <DefaultProps name="Ashish"/>
        <DefaultProps />

        <PropsInClass name="Jay" age={32}/>

        <ClassPropsDestucting name="Vinay" age={27}/>

        <ClassDefaultProps />
        <ClassDefaultProps name="Bob"/>

    </>
  )
}

export default App
