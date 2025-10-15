
import './App.css'
import EmpContext from './components/EmpContext'
import EmpDetails from './components/EmpDetails'
import StudentContext from './components/StudentContext'
import StudentDetails from './components/StudentDetails'

function App() {
  const emp = [{id:1, role: "Developer", salary: 50000},
              {id:2, role: "HR", salary: 40000},
              {id:3, role: "Tester", salary: 30000}]

  const student = [{name: "Ashish", age : 22 ,gender : "male"},
                  {name: "Bob", age : 26 ,gender : "male"},
                {name: "Marry", age : 25 ,gender : "female"}]

  return (
  
    <>
     <EmpContext.Provider value={emp}>
      <EmpDetails/>
     </EmpContext.Provider>
     
     <StudentContext.Provider value={student}>
        <StudentDetails/>
     </StudentContext.Provider>
     
    </>
  )
}

export default App
