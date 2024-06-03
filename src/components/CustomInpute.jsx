import Form from "react-bootstrap/Form";

export const CustomInpute = ({ label, ...rest }) => {
  console.log(rest);
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
