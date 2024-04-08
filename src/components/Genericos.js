import React from 'react';

function Genericos() {
  // Datos de ejemplo de carpetas y documentos
  const folders =
  [{
      "id": 1,
      "name": "01. Deployment Architecture",
      "documents": [{
          "id": "1.1",
          "title": "V2 GoAigua Architecture - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "1.2",
          "title": "V2 GoAigua Architecture - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "1.3",
          "title": "V3 GoAigua Architecture - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "1.4",
          "title": "V3 GoAigua Architecture - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 2,
      "name": "02 Cybersecurity",
      "documents": [{
          "id": "2.1",
          "title": "V1 GoAigua Cybersecurity - Español",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "2.2",
          "title": "V1GoAigua Cybersecurity - English",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 3,
      "name": "03. Inventory Solutions by requirement",
      "documents": [{
          "id": "3.1",
          "title": "V1 GoAigua Inventory Solutions by requirement - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "3.2",
          "title": "V1GoAigua Inventory Solutions by requirement - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 4,
      "name": "04. Inventory Requirements to Product",
      "documents": [{
          "id": "4.1",
          "title": "V1 GoAigua Inventory Requirements to Product- Español",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "4.2",
          "title": "V1 GoAigua Inventory Requirements to Product - English",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 5,
      "name": "05. Session Schedule for each solution",
      "documents": [{
          "id": "5.1",
          "title": "V1 GoAigua Session Schedule for each solution - Español",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "5.2",
          "title": "V1 GoAigua Session Schedule for each solution - English",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 6,
      "name": "06. JIRA Parameterisation",
      "documents": [{
          "id": "6.1",
          "title": "V1 GoAigua JIRA Parameterisation - Español",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "6.2",
          "title": "V1 GoAigua JIRA Parameterisation - English",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 7,
      "name": "07. Environment request",
      "documents": [{
          "id": "7.1",
          "title": "V1 GoAigua Environment request - Español",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "7.2",
          "title": "V1 GoAigua Environment request - English",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 8,
      "name": "08. Integration between solutions",
      "documents": [{
          "id": "8.1",
          "title": "V1 GoAigua Integration between solutions - Español",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "8.2",
          "title": "V1 GoAigua Integration between solutions - English",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 9,
      "name": "09. Data Integration",
      "documents": [{
          "id": "9.1",
          "title": "V1 GoAigua Data Integration - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "9.2",
          "title": "V1 GoAigua Data Integration - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "9.3",
          "title": "V2 GoAigua Data Integration - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "9.4",
          "title": "V2 GoAigua Data Integration - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 10,
      "name": "10. Functional Analysis",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.9,
              "title": "Device Management (DM)_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "Device Management (DM)_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": " GIS_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": " GIS_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Unified Network Management (UNM)_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Unified Network Management (UNM) - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV__FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV__FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "Waste Water - Real Time & What if Scenario (WW - RTWIF)_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "Waste Water - Real Time & What if Scenario (WW - RTWIF) - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "SewerProtect_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "SewerProtect_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Sewer Tracker_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Sewer Tracker_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Plant Mgm_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Plant Mgm_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.21,
              "title": "Biological Monitoring_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.22,
              "title": "Biological Monitoring_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_FDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_FDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }

          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_FDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_FDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "11. Technical Design",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "V2 IoT_Core_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "V2 IoT_Core_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.9,
              "title": "Device Management (DM)_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "Device Management (DM)_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": " GIS_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": " GIS_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Unified Network Management (UNM)_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Unified Network Management (UNM) - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV__TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV__TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_TDS - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_TDS - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "SewerProtect_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "SewerProtect_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Sewer Tracker_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Sewer Tracker_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Plant Mgm_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Plant Mgm_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.21,
              "title": "Biological Monitoring_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.22,
              "title": "Biological Monitoring_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }

          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_TDS - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_TDS - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "12. Product Manuals and Traininng Guides",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.9,
              "title": "V2 IoT_Core_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "V2 IoT_Core_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": "Device Management (DM)_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.13,
              "title": " GIS_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_Product Manual & Training Guide - Español",
              "status": "No Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Product Manual & Training Guide - English",
              "status": "No Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.13,
              "title": "Unified Network Management (UNM)_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "SewerProtect_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "Sewer Tracker_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Plant Mgm_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Biological Monitoring_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_Product Manual & Training Guide - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_Product Manual & Training Guide - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_Product Manual & Training Guide - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Product Manual & Training Guide - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        }
      ]
    },
    {
      "id": 13,
      "name": "13. ETL Documentation",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.9,
              "title": "V2 IoT_Core_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "V2 IoT_Core_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": "Device Management (DM)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.13,
              "title": " GIS_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_ETL Documentation - Español",
              "status": "No No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_ETL Documentation - English",
              "status": "No No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.13,
              "title": "Unified Network Management (UNM)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "SewerProtect_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "Sewer Tracker_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Plant Mgm_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Biological Monitoring_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_ETL Documentation - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_ETL Documentation - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        }
      ]
    },
    {
      "id": 14,
      "name": "14. Test Plans",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": "Device Management (DM)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.13,
              "title": " GIS_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_Test Plans - Español",
              "status": "No Plantilla ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Test Plans - English",
              "status": "No Plantilla ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.13,
              "title": "Unified Network Management (UNM)_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.1,
              "title": "WorkOrder_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "WorkOrder_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "SewerProtect_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "Sewer Tracker_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Plant Mgm_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Biological Monitoring_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        }
      ]
    },
    {
      "id": 14,
      "name": "14. Test Plans",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": "Device Management (DM)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.13,
              "title": " GIS_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_Test Plans - Español",
              "status": "No Plantilla ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Test Plans - English",
              "status": "No Plantilla ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.13,
              "title": "Unified Network Management (UNM)_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.1,
              "title": "WorkOrder_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "WorkOrder_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV_Test Plans - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV_Test Plans - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "SewerProtect_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "Sewer Tracker_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Plant Mgm_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Biological Monitoring_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_Test Plans - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Test Plans - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        }
      ]
    },
    {
      "id": 15,
      "name": "15. Test Evidence",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "01. SWE",
          "documents": [{
              "id": 11.1,
              "title": "Data Science Framework (DSF)_Test Evidence - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Test Evidence - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_Test Evidence - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Test Evidence - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_Test Evidence - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Test Evidence - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_Test Evidence - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Test Evidence - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.11,
              "title": "Device Management (DM)_Test Evidence - Español",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Test Evidence - English",
              "status": "Plantilla",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.13,
              "title": " GIS_Test Evidence - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Test Evidence - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [{
              "id": 12.1,
              "title": "Leak Detection (LD)_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_Test Evidence - Español",
              "status": "No disponible ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Test Evidence - English",
              "status": "No disponible ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.13,
              "title": "Unified Network Management (UNM)_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.1,
              "title": "WorkOrder_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "WorkOrder_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "CCTV_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "SewerProtect_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "Sewer Tracker_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Plant Mgm_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Biological Monitoring_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            },
            {
              "id": 14.2,
              "title": "AgroTwin_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [{
              "id": 15.1,
              "title": "EWS_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 15.2,
              "title": "EWS_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.2,
              "title": "WorkOrders_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.2,
              "title": "SOC_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_Test Evidence - Español",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Test Evidence - English",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        }
      ]
    },
    {
      "id": 16,
      "name": "16. Monitoring Management User",
      "documents": [{
          "id": "1.1",
          "title": "V1 GoAigua Monitoring Management User - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "1.2",
          "title": "V1 GoAigua Monitoring Management User - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },

      ]
    },
    {
      "id": 17,
      "name": "17. Operation Manual",
      "documents": [{
          "id": "1.1",
          "title": "V1 GoAigua Operation Manual - Español",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
        {
          "id": "1.2",
          "title": "V1 GoAigua Operation Manual - English",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },

      ]
    },
    {
      "id": 18,
      "name": "18. Others",
      "documents": [],
      "subfolders": [{
          "id": 11,
          "name": "DR Disaster Recovery Go-Aigua",
          "documents": [{
              "id": 11.1,
              "title": "Disaster Recovery Go-Aigua - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.2,
              "title": "Disaster Recovery Go-Aigua - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "DRS Document Review Sheet",
          "documents": [{
              "id": 12.1,
              "title": "DRS Document Review Sheet - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.1,
              "title": "DRS Document Review Sheet - English",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        },
        {
          "id": 13,
          "name": "PE Procedimiento de entregas",
          "documents": [{
              "id": 13.1,
              "title": "PE General - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.2,
              "title": "PE DMD- Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "PE IoT Core - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": " PE Leak Detection - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },

          ]
        },
      ]
    },
  ];


return (
  <div className="container">
    <h2>Genéricos</h2>
    <p>Bienvenido a nuestra página "Genéricos". Aquí puedes encontrar carpetas y documentos aplicables a cualquier proyecto de Idrica.</p>
    <div className="accordion" id="accordionExample">
      {folders.map(folder => (
        <div className="accordion-item" key={folder.id}>
          <h2 className="accordion-header" id={`heading${folder.id}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${folder.id}`} aria-expanded="false" aria-controls={`collapse${folder.id}`}>
              {folder.name}
            </button>
          </h2>
          <div id={`collapse${folder.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${folder.id}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {folder.subfolders ? (
                <ul>
                  {folder.subfolders.map(subfolder => (
                    <div key={subfolder.id}>
                      <li>
                        <div className="alert alert-secondary" role="alert">
                          {subfolder.name}
                        </div>
                      </li>
                      <ul>
                        {subfolder.documents.map(document => (
                          <li key={document.id}>
                            <div>{document.title}</div>
                            <div className={document.status === 'Disponible' ? 'text-success' : document.status === 'Plantilla' ? 'text-primary' : 'text-danger'}>Estado: {document.status}</div>
                            {document.status === 'Disponible' && (
                              <div>
                                <a href={document.downloadLink} target="_blank" rel="noopener noreferrer">Descargar</a>
                              </div>
                            )}
                            <hr /> {/* Separador entre documentos */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              ) : (
                <ul>
                  {folder.documents.map(document => (
                    <li key={document.id}>
                      <div>{document.title}</div>
                      <div className={document.status === 'Disponible' ? 'text-success' : document.status === 'Plantilla' ? 'text-primary' : 'text-danger'}>Estado: {document.status}</div>
                      {document.status === 'Disponible' && (
                        <div>
                          <a href={document.downloadLink} target="_blank" rel="noopener noreferrer">Descargar</a>
                        </div>
                      )}
                      <hr /> {/* Separador entre documentos */}
                    </li>
                  ))}
                </ul>
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
