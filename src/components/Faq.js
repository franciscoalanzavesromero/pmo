import React from 'react';
function Faq() {
return (
<div className="container">
   <h1 className="mt-5 mb-4 text-center">Preguntas Frecuentes</h1>
   <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
         <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Datos de Contacto
            </button>
         </h2>
         <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
               <table className="table table-hover">
                  <thead>
                     <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Email</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>José Sanchez</td>
                        <td>Project Manager (PMO) - Idrica</td>
                        <td>jose.sanchez@idrica.com</td>
                     </tr>
                     <tr>
                        <td>Juan Martinez Moreno</td>
                        <td>Architect - Idrica</td>
                        <td>juan.martinez@idrica.com</td>
                     </tr>
                     <tr>
                        <td>Francisco Alanzaves y Carlos Villalba</td>
                        <td>Technical Writers - Idrica</td>
                        <td>francisco-miguel.alanzaves.ext@idrica.com / carlos.villalba@idrica.com</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <div className="accordion-item">
         <h2 className="accordion-header" id="flush-headingEvidenceDirectory">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEvidenceDirectory" aria-expanded="false" aria-controls="flush-collapseEvidenceDirectory">
            ¿Que documentación necesita mi proyecto?
            </button>
         </h2>
         <div id="flush-collapseEvidenceDirectory" className="accordion-collapse collapse" aria-labelledby="flush-headingEvidenceDirectory" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
               <table className="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">Directorio Principal</th>
                        <th scope="col">Subdirectorio</th>
                        <th scope="col">Documento</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>01. Deployment Architecture</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>02. Cybersecurity</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>03. Inventory Requirements to Product</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>04. Session Schedule for each solution</td>
                        <td>01. SWE<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>05. JIRA Parameterisation</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>06. Environment request</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>07. Integration between solutions</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>08. Data Integration</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>09. Functional Analysis</td>
                        <td>01. SWE<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>10. Technical Design</td>
                        <td>01. SWE<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>11. Product Manuals and Training Guides</td>
                        <td>01. SWE<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>12. ETL Documentation</td>
                        <td>01. SWE (puede tener más de uno por vertical)<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>13. Test Plans</td>
                        <td>01. SWE<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>14. Test Evidence</td>
                        <td>01. SWE<br />02. Drinking Water Solutions<br />03. Waste Water Solutions<br />04. Agriculture Solutions<br />05. Water Resources<br />06. Cross Apps<br />07. Business Intelligence</td>
                        <td>Por vertical</td>
                     </tr>
                     <tr>
                        <td>15. Monitoring Management User</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                     <tr>
                        <td>16. Operation Manual</td>
                        <td>-</td>
                        <td>Único</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <div className="accordion-item">
         <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            ¿Que documentación contiene cada subdirectorio?
            </button>
         </h2>
         <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
               <table className="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">Subdirectorio</th>
                        <th scope="col">Vertical</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>01. SWE</td>
                        <td>
                           <ul>
                              <li>Device Management (DM)</li>
                              <li>Domain Master Data (DMD)</li>
                              <li>IoT Core</li>
                              <li>Data Science Framework (DSF)</li>
                              <li>GIS</li>
                              <li>DT Builder</li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>02. Drinking Water Solutions</td>
                        <td>
                           <ul>
                              <li>Drinking Water - Real Time & What if Scenario (DW - RTWIF)</li>
                              <li>Leak Detection (LD)</li>
                              <li>Meter Asset Mgm</li>
                              <li>Meter Data Analytics</li>
                              <li>Pipe Planner</li>
                              <li>Plant Mgm</li>
                              <li>Unified Network Management (UNM)</li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>03. Waste Water Solutions</td>
                        <td>
                           <ul>
                              <li>Waste Water - Real Time & What if Scenario (WW - RTWIF)</li>
                              <li>Clog Monitoring</li>
                              <li>SewerProtect</li>
                              <li>Unified Network Management (UNM)</li>
                              <li>Unified Plant Management (UPM)</li>
                              <li>Sewer Tracker</li>
                              <li>Plant Mgm</li>
                              <li>Biological Monitoring</li>
                              <li>Odour Management</li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>04. Agriculture Solutions</td>
                        <td>
                           <ul>
                              <li>AgroTwin</li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>05. Water Resources</td>
                        <td>
                           <ul>
                              <li>EWS</li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>06. Cross Apps</td>
                        <td>
                           <ul>
                              <li>WorkOrders</li>
                              <li>Billing</li>
                              <li>Portal</li>
                           </ul>
                        </td>
                     </tr>
                     <tr>
                        <td>07. Business Intelligence</td>
                        <td>
                           <ul>
                              <li>SOC</li>
                              <li>BI</li>
                           </ul>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <div className="accordion-item">
         <h2 className="accordion-header" id="flush-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            Necesito una documentacion que no aparece en esta página. ¿Qué puedo hacer?
            </button>
         </h2>
         <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Ponte en contacto con José Sanchez -> <b>jose.sanchez@idrica.com</b>, te indicará los pasos a seguir para obtener la documentación que necesitas.
            </div>
         </div>
      </div>
   </div>
</div>
);
}
export default Faq;