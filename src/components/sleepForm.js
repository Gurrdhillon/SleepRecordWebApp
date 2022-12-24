// import react from 'react';
import react, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '/Users/gursevak/Projects/SleepRecordWebApp/src/customcss/forms.css';
import Image from '/Users/gursevak/Projects/SleepRecordWebApp/src/images/images.jpeg';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/**
 * convert enter date to select date later on, 
 * React itself has select date feature, so used can either enter it
 * or select from given calender
 */

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

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitting(true)

    setTimeout(()=> {
      alert('delayed on purpose')
      setSubmitting(false)
    },2000)


  }

  useEffect(() => {
    alert('Page Refreshd again.')
  }); 

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
 
    <Form onSubmit={handleSubmit} >
      <Form.Group as={Row} className="mb-1" controlId="formBasicDate">
        <Form.Label column sm={3} >Date</Form.Label> 
        <Col sm={5}>  
        <Form.Control type="date" placeholder="Date" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-1" controlId="formBasicTime">
        <Form.Label column sm={3} >Sleep In</Form.Label>
        <Col sm={5}>
        <Form.Control type="time" placeholder="Sleep In" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-1" controlId="formBasicTime">
        <Form.Label column sm={3} >Sleep Out</Form.Label>
        <Col sm={5}>
        <Form.Control type="time" placeholder="Sleep Out" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formBasicHour">
        <Form.Label column sm={3}  >Total Sleep Time</Form.Label>
        <Col sm={5}>
        <Form.Control type="hour" placeholder="Sleeping Hours" />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
      );
  }
}