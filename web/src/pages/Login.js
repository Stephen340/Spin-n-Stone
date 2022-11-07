import bootstrap from "bootstrap";
import { useState, useEffect } from "react";
import { Link, useAsyncError } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Login = () => {
  //initialize necessary settings for useState functions
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  //confirm that information is entered
  function infoCompleted() {
    return user.length > 0 && pass.length > 0;
  }

  //update the user to the given user
  const changeUser = (event) => {
    setUser(event.target.value);
    changeEmail(event);
  };

  //update email to the given email
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  //update the password to the given password
  const changePass = (event) => {
    setPass(event.target.value);
  };

  //In the event we need to immediately clear for some reason
  const clearValues = () => {
    setEmail('');
    setPass('');
    setUser('');
  };

  //cancel default login button function and handle it ourself
  const registerLogin = async (event) => {
    event.preventDefault();

    const loginData = await axios.post('http://localhost:2000/api/login/user/login',{
        user_name: user,
        email: email,
        password: pass
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log("Server responded.");
      } else if (error.request) {
        console.log("Network error.");
      } else {
        console.log("Unknown error type.")
        console.log(error);
      }
    });


    //clearValues();
  };

  return(
    <Form>

      <Form.Group className="mt-3 mx-auto" controlId="loginUser" style={{width: '50%'}}>
        <Form.Label>Email or Username</Form.Label>
        <Form.Control type="email" placeholder="Email or Username" value={user} onChange={changeUser}/>
      </Form.Group>

      <Form.Group className="mt-3 mx-auto" controlId="loginPass" style={{width: '50%'}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass} onChange={changePass}/>
      </Form.Group>

      <Link to={'/Home'}>
        <Button className="btn btn-primary mx-3 mt-3" variant="primary" type="submit" style={{width: '20%'}} disabled={!infoCompleted()} onClick={registerLogin}>Login</Button>
      </Link>

      <Link to={'/Register'}><Button className="btn btn-primary mx-3 mt-3" type="button" style={{width: '20%'}}>Register</Button></Link>

    </Form>
  );

};
  


  export default Login;