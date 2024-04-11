import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

function Genericos() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const readExcelFile = async () => {
      try {
        const filePath = require("./Datos.xlsx"); // Asegúrate de que la ruta es correcta.
        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        const filteredDocuments = jsonData.filter(document => document.Ámbito === 'Genérico');
        setDocuments(filteredDocuments);
      } catch (error) {
        console.error("Error al leer el archivo Excel:", error);
      }
    };

    readExcelFile();
  }, []);

  return (
    <div className="container">
      <h2>Genéricos</h2>
      <p>Bienvenido a nuestra página "Genéricos". Aquí puedes encontrar carpetas y documentos aplicables a cualquier proyecto de Idrica.</p>
      <div className="accordion" id="accordionExample">
        {documents.map((document, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button className={`accordion-button collapsed ${document.Estado === 'No disponible' ? 'text-danger' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                {`${document.Carpeta}${document.Subcarpeta ? ' - ' + document.Subcarpeta : ''}${document.Título ? ' - ' + document.Título : ''}`}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div>Estado: {document.Estado}</div>
                {document.Estado === 'Disponible' && (
                  <div>
                    <a href={document.Enlace} target="_blank" rel="noopener noreferrer">Descargar</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genericos;
