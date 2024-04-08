import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../Timeline.css';

function Metricas() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Configuración del gráfico de pastel
    const ctx = document.getElementById('myChart');

    // Destruir el gráfico anterior si existe
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Completado', 'Pendiente'],
        datasets: [{
          label: 'Porcentaje de trabajo completado',
          data: [30, 70], // Aquí puedes ajustar los porcentajes según necesites
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
  }, []);

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
                      <div className="event-date bg-soft-primary text-primary">15 Enero</div>
                      <h5 className="font-size-16">Comienzo</h5>
                      <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">Read more</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-success text-success">5 June</div>
                      <h5 className="font-size-16">Event Two</h5>
                      <p className="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">Read more</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-danger text-danger">7 June</div>
                      <h5 className="font-size-16">Event Three</h5>
                      <p className="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">Read more</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-warning text-warning">8 June</div>
                      <h5 className="font-size-16">Event Four</h5>
                      <p className="text-muted">Languages only differ in their pronunciation and their most common words.</p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">Read more</a>
                      </div>
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
	<div className="col-md-6 text-center">
		<h2>Documentos finalizados</h2>
		<canvas id="myChart" style={{maxWidth: "100%", height: "auto"}}></canvas>
	</div>
  </div>
</div>
  );
}

export default Metricas;
