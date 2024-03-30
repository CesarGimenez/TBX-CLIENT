import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useFile from "../../hook/useFile";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const { getFile, getFiles } = useFile();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    await getFile(query);
  };

  const handleReset = async () => {
    setQuery("");
    await getFiles();
  };

  return (
    <Form className="d-flex justify-content-center">
      <Form.Group controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre del archivo"
          value={query}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSearch}>
        Consultar
      </Button>
      <Button variant="primary" onClick={handleReset}>
        Reiniciar
      </Button>
    </Form>
  );
};

export default SearchInput;
