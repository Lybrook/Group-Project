import './App.css'
import StudentList from "./StudentList"
function App() {
const students = [
  {id: 1,name: "John",tm:"Nelson", age: 20},
  { id: 2, name: "Jane", tm: "Smith", age: 21 },
  { id: 3, name: "Mike", tm: "Taylor", age: 22 },
  { id: 4, name: "Emily", tm: "Brown", age: 23 },
  { id: 5, name: "Chris", tm: "Johnson", age: 24 },
];

  return (
    <>
    <h1>React Crud</h1>
    <StudentList students={students} />  
    </>
  )
 
}

export default App