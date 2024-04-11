import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import * as XLSX from 'xlsx';
import '../Timeline.css';

function Metricas() {
  const [genericCompleted, setGenericCompleted] = useState(0);
  const [genericPending, setGenericPending] = useState(0);
  const [customCompleted, setCustomCompleted] = useState(0);
  const [customPending, setCustomPending] = useState(0);
  const [templateCompleted, setTemplateCompleted] = useState(0);
  const [templatePending, setTemplatePending] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const filePath = require("./Datos.xlsx");
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      let genericCompCount = 0;
      let genericPendCount = 0;
      let customCompCount = 0;
      let customPendCount = 0;
      let templateCompCount = 0;
      let templatePendCount = 0;

      jsonData.forEach(item => {
        if (item.Ámbito === 'Genérico') {
          if (item.Estado === 'Disponible') genericCompCount++;
          else genericPendCount++;
        } else if (item.Ámbito === 'Customizado') {
          if (item.Estado === 'Disponible') customCompCount++;
          else customPendCount++;
        } else if (item.Ámbito === 'Plantilla') {
          if (item.Estado === 'Disponible') templateCompCount++;
          else templatePendCount++;
        }
      });

      setGenericCompleted(genericCompCount);
      setGenericPending(genericPendCount);
      setCustomCompleted(customCompCount);
      setCustomPending(customPendCount);
      setTemplateCompleted(templateCompCount);
      setTemplatePending(templatePendCount);
    };

    fetchData();
  }, []);

  const chartGenericRef = useRef(null);
  const chartCustomRef = useRef(null);
  const chartTemplateRef = useRef(null);

  useEffect(() => {
    // Configuración del gráfico de pastel para documentos genéricos
    const ctxGeneric = document.getElementById('chartGeneric');
    chartGenericRef.current = new Chart(ctxGeneric, {
      type: 'pie',
      data: {
        labels: ['Completado', 'Pendiente'],
        datasets: [{
          label: 'Documentos genéricos',
          data: [genericCompleted, genericPending],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        }],
      },
    });

    // Configuración del gráfico de pastel para documentos customizados
    const ctxCustom = document.getElementById('chartCustom');
    chartCustomRef.current = new Chart(ctxCustom, {
      type: 'pie',
      data: {
        labels: ['Completado', 'Pendiente'],
        datasets: [{
          label: 'Documentos customizados',
          data: [customCompleted, customPending],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        }],
      },
    });

    // Configuración del gráfico de pastel para plantillas
    const ctxTemplate = document.getElementById('chartTemplate');
    chartTemplateRef.current = new Chart(ctxTemplate, {
      type: 'pie',
      data: {
        labels: ['Completado', 'Pendiente'],
        datasets: [{
          label: 'Plantillas',
          data: [templateCompleted, templatePending],
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }],
      },
    });

    return () => {
      if (chartGenericRef.current !== null) {
        chartGenericRef.current.destroy();
      }
      if (chartCustomRef.current !== null) {
        chartCustomRef.current.destroy();
      }
      if (chartTemplateRef.current !== null) {
        chartTemplateRef.current.destroy();
      }
    };
  }, [genericCompleted, genericPending, customCompleted, customPending, templateCompleted, templatePending]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-5">Horizontal Timeline</h4>
                    <div className="hori-timeline" dir="ltr">
                      <ul className="list-inline events">
                        <li className="list-inline-item event-list">
                          <div className="px-4">
                            <div className="event-date bg-soft-primary text-primary">15 En.</div>
                            <h5 className="font-size-16">Evento 1</h5>
                            <p className="text-muted">El 15 de enero marca el inicio de la documentación crucial para el proyecto Ashghal, dando el primer paso hacia su realización.</p>
                          </div>
                        </li>
                        <li className="list-inline-item event-list">
                          <div className="px-4">
                            <div className="event-date bg-soft-success text-success">5 Jun</div>
                            <h5 className="font-size-16">Evento 2</h5>
                            <p className="text-muted">Actualmente, gestionamos Ashghal, la documentación de PMO y las plantillas en todas las verticales.</p>
                          </div>
                        </li>
                        <li className="list-inline-item event-list">
                          <div className="px-4">
                            <div className="event-date bg-soft-danger text-danger">1 Sep.</div>
                            <h5 className="font-size-16">Evento 3</h5>
                            <p className="text-muted">Hemos consolidado una documentación funcional y acceso para PMO y Ashghal en todas las verticales. </p>
                          </div>
                        </li>
                        <li className="list-inline-item event-list">
                          <div className="px-4">
                            <div className="event-date bg-soft-warning text-warning">20 Dic.</div>
                            <h5 className="font-size-16">Evento 4</h5>
                            <p className="text-muted">Finalización de todos los documentos necesarios para PMO y Ashghal. Se puede utilizar toda la documentación.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <h2>Documentos genéricos</h2>
          <canvas id="chartGeneric" style={{maxWidth: "100%", height: "auto"}}></canvas>
          <p>Total completados: {genericCompleted}</p>
          <p>Total pendientes: {genericPending}</p>
        </div>
        <div className="col-md-4 text-center">
          <h2>Documentos customizados</h2>
          <canvas id="chartCustom" style={{maxWidth: "100%", height: "auto"}}></canvas>
          <p>Total completados: {customCompleted}</p>
          <p>Total pendientes: {customPending}</p>
        </div>
        <div className="col-md-4 text-center">
          <h2>Plantillas</h2>
          <canvas id="chartTemplate" style={{maxWidth: "100%", height: "auto"}}></canvas>
          <p>Total completadas: {templateCompleted}</p>
          <p>Total pendientes: {templatePending}</p>
        </div>
      </div>
    </div>
  );
}

export default Metricas;
