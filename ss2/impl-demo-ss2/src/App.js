import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
    const students = [
        {
        id: 1,
        name :"HaiTT",
        address : "QN",
        point: 5
    },
        {
            id: 2,
            name :"HaiTT",
            address : "QN",
            point: 7
        },
        {
            id: 3,
            name :"HaiTT",
            address : "QN",
            point: 9
        }]
    const rank = (point) =>{
        if (point >= 8) return 'Giỏi';
        if (point >= 6.5) return 'Khá';
        if (point >= 5) return 'Trung bình';
        if (point >= 3.5) return 'Yếu';
        return "Kém";
    }
  return (
   <>
     <table>
         <thead>
         <tr>
             <th>STT</th>
             <th>Name</th>
             <th>Address</th>
             <th>Point</th>
             <th>Rank</th>
         </tr>
         </thead>
         <tbody>
         {
             students.map((item,index) =>
                 <tr key={item.id}>
                     <td>{index}</td>
                     <td>{item.name}</td>
                     <td>{item.address}</td>
                     <td>{item.point}</td>
                     <td>{rank(item.point)}</td>
                 </tr>
             )
         }
         </tbody>
     </table>
   </>
  );
}

export default App;
