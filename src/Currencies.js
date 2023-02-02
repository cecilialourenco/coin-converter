import { Form } from "react-bootstrap";

function Currencies({ onChange, selected }) {
  return (
    <>
      <Form.Select
        value={selected}
        onChange={onChange}
        aria-label="Default select example"
        style={{
          fontSize: "20px",
          height: "42px",
          width: "219px",
        }}
      >
        <option>Choose the currency</option>
        <option value="USD">Dollar</option>
        <option value="EUR">Euro</option>
        <option value="BRL">Real</option>
      </Form.Select>
    </>
  );
}

export default Currencies;
