import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import { Container } from 'react-bootstrap';

function MyDataTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const readExcelFile = async () => {
      const filePath = require("./Datos.xlsx");
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
      setFilteredData(jsonData);
    };

    readExcelFile();
  }, []);

  const handleSearch = value => {
    const filteredItems = data.filter(item => {
      const carpeta = item.Carpeta ? item.Carpeta.toLowerCase() : '';
      const subcarpeta = item.Subcarpeta ? item.Subcarpeta.toLowerCase() : '';
      const título = item.Título ? item.Título.toLowerCase() : '';
      const ámbito = item.Ámbito ? item.Ámbito.toLowerCase() : '';
      const estado = item.Estado ? item.Estado.toLowerCase() : '';

      return (
        carpeta.includes(value.toLowerCase()) ||
        subcarpeta.includes(value.toLowerCase()) ||
        título.includes(value.toLowerCase()) ||
        ámbito.includes(value.toLowerCase()) ||
        estado.includes(value.toLowerCase())
      );
    });
    setFilteredData(filteredItems);
  };

  const customRowStyles = filteredData.map(row => ({
    when: row => row.Estado === 'No disponible',
    style: {
      color: 'red',
    },
  }));

  const columns = [
    {
      name: 'Carpeta',
      selector: row => row.Carpeta,
      sortable: true,
    },
    {
      name: 'Subcarpeta',
      selector: row => row.Subcarpeta || "",
      sortable: true,
    },
    {
      name: 'Título del documento',
      selector: row => row.Título,
      sortable: true,
      cell: row => (
        <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{row.Título}</div>
      ),
    },
    {
      name: 'Ámbito',
      selector: row => row.Ámbito,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.Estado,
      sortable: true,
    },
    {
      name: 'Enlace de descarga',
      cell: row => {
        if (row.Estado !== 'No disponible' && row.Enlace) {
          return <a href={row.Enlace} target="_blank" rel="noopener noreferrer">Descargar</a>;
        } else {
          return null;
        }
      },
    },
  ];

  return (
    <Container>
      <h1>Buscar un documento en Project Management Office</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar..."
        onChange={e => handleSearch(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        conditionalRowStyles={customRowStyles}
      />
    </Container>
  );
}

export default MyDataTable;
