import React, { Component } from 'react';
class Main extends Component{
   constructor(){
      super();
      this.state={
         studentsinfo:[
            {'studentId':1,'studentName':'Name1','studentMarks':50},
            {'studentId':2,'studentName':'Name2','studentMarks':60},
            {'studentId':3,'studentName':'Name3','studentMarks':70},
            {'studentId':4,'studentName':'Name4','studentMarks':80},
            {'studentId':5,'studentName':'Name5','studentMarks':90}
         ]
      }
   }
   render(){
      return(
         <div>
            <h1>Component and State </h1>
            <Header />
            <Details studentdata={this.state.studentsinfo} />
         </div>
      );
   }
}
class Header extends Component{
   render(){
      return(
         <div>
            <h3>Student Details</h3>
         </div>
      );
   }
}
class Details extends Component{
   

   render(){
      
      return(
         <div>
            <table>
               <thead><tr><th>ID</th><th>Name</th><th>Marks</th></tr></thead>
            <tbody>
                  {this.props.studentdata.map((person, i) => <tr><td>{person.studentId}</td><td>{person.studentName
                  }</td><td>{person.studentMarks}</td></tr>)}
               </tbody>
            </table>
         </div>
      );
   }
}

export default Main;