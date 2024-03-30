import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import Table from "react-bootstrap/Table";
import useFile from "../../hook/useFile";

const TableFile = () => {
  const { getFiles } = useFile();
  const { fileList, loading, error } = useSelector((state) => {
    return state.files
  });
  
  useEffect(() => {
    getFiles();
  }, []);

  if (loading) return <div className="text-center mt-5 color-primary"><h1>Loading...</h1></div>;
  if (error) return <div className="text-center mt-5 color-danger">Error: {error}</div>;

  return (
    <Table striped bordered hover size="sm" className="container mb-5 mt-5">
      <thead>
        <tr>
          <th className="text-start">FileName</th>
          <th className="text-start">Text</th>
          <th className="text-start">Number</th>
          <th className="w-50 text-start">Hex</th>
        </tr>
      </thead>
      <tbody>
        {fileList && fileList.length > 0 && fileList.map((file, index) => (
          <tr key={index}>
            <td className="text-start">{file.file}</td>
            <td className="text-start">{file.text}</td>
            <td className="text-start">{file.number}</td>
            <td className="text-start">{file.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableFile;
