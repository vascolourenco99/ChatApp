import React, {useRef} from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';


/* 
The Login component is defined as a function that takes an onIdSubmit prop. This prop is a function that will be called when the user submits their ID.
*/
export default function Login({ onIdSubmit }) {
  /* Inside the Login component, a reference idRef is created using the useRef hook. This reference is used to access the value of the input field. */
  const idRef = useRef();

  /* The createNewId function is defined, which generates a new ID using uuidV4() and calls the onIdSubmit function, passing the generated ID as an argument. This function is used when the user wants to create a new ID. */
  function createNewId() { 
    onIdSubmit(uuidV4());
  }

  /* The handleSubmit function is defined, which is called when the login form is submitted. It prevents the default form submission behavior, retrieves the value from the idRef reference (representing the user-entered ID), and calls the onIdSubmit function, passing the ID as an argument. */
  function handleSubmit(e) { 
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  return (
    <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <FormControl type="text" ref={idRef} required/>
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button onClick={createNewId} variant='secondary'>Create A New id</Button>
      </Form>
    </Container>
  );
}
