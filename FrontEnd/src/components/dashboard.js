// import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";

// import records from './records.json';
// import Whatever from '/Users/gursevak/Projects/SleepRecordWebApp/src/records1.json';

// import Records from '../../records.json';

export default function Dashboard() {

  const [record, setRecord] = useState([]);
  const [totalThisMonth, setTotalThisMonth] = useState()
  const [totalThisWeek, setTotalThisWeek] = useState()
  const [avgThisMonth, setAvgThisMonth] = useState();

  const fetchData = () => {
    // fetch ('/datastorage/records.json')
    fetch('http://localhost:3001/api/get')
    // .then(response => {
    //   return response.json()
    // })
    .then(response => response.json())
    .then(data => {
      console.log("data: ",data.recordsets[0]);
      setRecord(data.recordsets[0]);
      console.log("record1:",record);
    })

  // axios.get('http://localhost:3001/api/data')
  // .then(response => {
  //   setRecord(response.data.recordsets[0]);
  //   // const data = response.data;
  //   // console.log(data);
  // })
  // .catch(error => {

  //   console.error(error);
  // });
  }

  useEffect( () => {
    fetchData();
  },[])

  useEffect( () => {

    console.log(record);

    let avgHours = 0;
    let sumHours = 0;
    let len = record.length;

    for (let i = 1; i < len; i++) {
     sumHours  += record[i].hours;
    } 

    avgHours = sumHours/len;
    // console.log(sumHours)

    setTotalThisMonth(sumHours);
    setAvgThisMonth(avgHours);

    // console.log("avgHours: " + avgHours);
  },[record]);

  //Function Stock

    const Record = ({ date, hours }) => {
    // if (!date) return <div h1/>;
    if (!date) 
    return(<h1> "Date not correct</h1>);
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{date}</h5>
            </td>
            <td>
              <h5>{hours}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
   < div>
    <div className = "data-container">
      {
        record.map((r,index) => {
          return (
            <div key = {index} > 
            <Record
            key = {index}
            date = { r.date}
            // sleepIn = {r.sleepIn}
            // sleepOut = {r.sleepOut}
            hours = {r.hours}
            />
              </div>
          )
        })
      }
    </div>
    <div>
      <br />
      <br />
      <table>
        <tr>
        <h3>"Action leads the feeling."</h3>
        </tr>
        <tr>
        <h3>Total hours this month: {totalThisMonth}</h3>
        </tr>
        <tr>
        <h3>Avg hours this month: {avgThisMonth}</h3>
        </tr>
      </table>
      <br />
    </div>
    </div>
  )
}
