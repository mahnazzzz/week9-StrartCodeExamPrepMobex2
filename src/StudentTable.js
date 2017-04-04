import React from 'react'
import './App.css'
import info from './dataModel'

class StudentTable extends React.Component{

    calculateAverageGrade(arr) {

        var sum = 0;
        var count = 0;
        arr.forEach(
            (grade) => {
                //if a grade exists
                if(grade.grade){
                    sum += Number(grade.grade)
                    count++;
                }
            }
        )


        var average = sum / count;

        return parseFloat(average*100/100).toFixed(2);//?

    }
    render(){
        var studentInfo = info.studentsInfo;
        var headerCount = studentInfo.headers.length;
        var studentCount = studentInfo.students.length;
        return(
            <table className="table">
                <thead>
                <tr>
                    <th></th>

                    {info.studentsInfo.headers.map((header, index) => (
                        <th key={index.toString()}>

                            {header.courseName}
                        </th>



                    ))}

                   <th>Average</th>
                </tr>
                </thead>
                <tbody>

                {info.studentsInfo.students.map((student, index) => (
                    <tr key={index.toString()}>

                        <td>{student.name}</td>
                        <td>{student.grades[0].grade}</td>
                        <td>{student.grades[1].grade}</td>
                        <td>{student.grades[2].grade}</td>
                        <td>{this.calculateAverageGrade(student.grades)}</td>

                    </tr>

                ))}




                </tbody>
            </table>
        )
    }

}
export default StudentTable