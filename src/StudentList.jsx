import StudentItem from "./StudentItem";

function StudentList({ students=[] }) {
  return (
    <div>
      <div className="student-list"></div>
      {students.map(student => (
        <StudentItem
          key={student.id}
          name={student.name}
          tm={student.tm}
          age={student.age}
        />
      ))}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
        />
        <input
          type="text"
          name="tm"
          placeholder="Enter team name"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter student age"
        />
      </form>
    </div>
  );
}

export default StudentList;
