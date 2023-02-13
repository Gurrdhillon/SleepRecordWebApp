// import react from 'react';
import react, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '/Users/gursevak/Projects/SleepRecordWebApp/FrontEnd/src/customcss/forms.css';
import Image from '/Users/gursevak/Projects/SleepRecordWebApp/FrontEnd/src/images/images.jpeg';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


 const divStyle = {
  color: 'black',
  height: '100vh',
  width: '100vw',
  // backgroundColor:'gray',
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
  overflow: 'hidden',

};

export default function SleepForm() {

  const [submitting, setSubmitting] = useState(false)
  const [date, setDate] =  useState();
  const [hours, setHours] = useState();

  const handleSubmit = event => {

    event.preventDefault();   //It prevent the default submit behaviour, which is that 
                              //it will clear the page once the user hit the submit button

    // So whats happening here, date and hours getting their data updated as states
    // as onChnage function there make changes the value in state, as these are variables
    //it also get changed here

     const record = {date, hours};    
     
     fetch('http://localhost:3001/api/insert',{
      method: 'POST',
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify(record)
     }).then (() => {
        setSubmitting(false)
      console.log("new record added, hip hip hurray")
     })
  

    setSubmitting(true)

    // setTimeout(()=> {
    //   alert('delayed on purpose')
    //   setSubmitting(false)
    // },2000)
  }

  /*
  For spinning circlle for the setTimeout, 2 seconds, later used to wait for 
  uploading data and also receiving some API data
  */
  if (submitting) {
    return (
         <Box sx={{ display: "flex", justifyContent: "center" }}>
               <CircularProgress />
          </Box>
    )
  } else {
    return (
    <div style={divStyle}>
      {/* <div style={{  justifyContent: "center", alignItems: "center", height: "100vh" , width: '100vw'}}> */}
      <div style = {{padding: "50px"}}>
        <Form onSubmit={handleSubmit} >
          <Form.Group as={Row} className="mb-1" controlId="formBasicDate">
            <Form.Label column sm={3} >Date</Form.Label> 
            <Col sm={5}>  
            <Form.Control 
            type="date" 
            placeholder="Date" 
            value = {date}
            onChange = {(e) => setDate(e.target.value)}
            />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicHour">
            <Form.Label column sm={3} >Hours</Form.Label>
            <Col sm={5}>
            <Form.Control 
            type="hour"
            placeholder="Sleeping Hours" 
            value = {hours}
            onChange = {(e) => setHours(e.target.value)}
            />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>
    </div>
      );
  }
}