import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
const FormPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const validateForm = () => {
    let errorMessages = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(formData.email)) {
      errorMessages += "Invalid email format. ";
    }
    if (!strongPasswordRegex.test(formData.password)) {
      errorMessages += "Password must be at least 8 characters and include uppercase, lowercase, number, and special character. ";
    }
    setErrors(errorMessages);
    return errorMessages === "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Submitted successfully!");
      setErrors("");
    }
  };
  return (
    <Container className="mt-5">
      <h2 className="text-center">Form Validation</h2>
      {errors && <Alert variant="danger">{errors}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default FormPage;
