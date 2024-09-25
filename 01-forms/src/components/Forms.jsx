import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    //console.log(username)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
      username : ${username},
      email : ${email},
      password : ${password}
      `);

    setUsername("");
    setEmail("");
    setPassword("");
  };

  //console.log(email)
  //console.log(password)

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>{username && <span>hello {username} </span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
          value={username}
          onChange={handleUsername}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{email && <span> Email : {email} </span>}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
