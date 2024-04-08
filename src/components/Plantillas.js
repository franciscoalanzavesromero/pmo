import React from 'react';

function Plantillas() {
  // Datos de ejemplo de carpetas y documentos
  const folders =
  [{
      "id": 1,
      "name": "01. Deployment Architecture",
      "documents": [
        {
          "id": "1.2",
          "title": "V2 GoAigua Architecture Español - Plantilla",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 2,
      "name": "02 Cybersecurity",
      "documents": [
        {
          "id": "2.2",
          "title": "V1GoAigua Cybersecurity Español - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 3,
      "name": "03. Inventory Solutions by requirement",
      "documents": [
        {
          "id": "3.2",
          "title": "V1 GoAigua Inventory Solutions by requirement Español- Plantilla",
          "status": "Disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },
      ]
    },
    {
      "id": 4,
      "name": "04. Inventory Requirements to Product",
      "documents": [
        {
          "id": "4.2",
          "title": "V1 GoAigua Inventory Requirements to Product Español- Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 5,
      "name": "05. Session Schedule for each solution",
      "documents": [
        {
          "id": "5.2",
          "title": "V1 GoAigua Session Schedule for each solution Español - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 6,
      "name": "06. JIRA Parameterisation",
      "documents": [
        {
          "id": "6.2",
          "title": "V1 GoAigua JIRA Parameterisation Español - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 7,
      "name": "07. Environment request",
      "documents": [
        {
          "id": "7.2",
          "title": "V1 GoAigua Environment request Español - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 8,
      "name": "08. Integration between solutions",
      "documents": [
        {
          "id": "8.2",
          "title": "V1 GoAigua Integration between solutions Español - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        }
      ]
    },
    {
      "id": 9,
      "name": "09. Data Integration",
      "documents": [
        {
          "id": "9.2",
          "title": "V1 GoAigua Data Integration Español- Plantilla",
          "status": "No disponible",
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
              "title": "Data Science Framework (DSF)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.3,
              "title": "Domain Master Data (DMD)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.5,
              "title": "DT Builder_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.7,
              "title": "IoT_Core_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.9,
              "title": "Device Management (DM)_FDS Plantilla - Español",
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
              "title": "Leak Detection (LD)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.3,
              "title": "RT-WS SGW_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.5,
              "title": "Meter Asset Mgm_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.7,
              "title": "Meter Data Analytics_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.9,
              "title": "Pipe Planner_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Plant Mgm_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.11,
              "title": "Unified Network Management (UNM)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [{
              "id": 13.1,
              "title": "CCTV__FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.3,
              "title": "Clog Monitoring_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.5,
              "title": "Map Functionalities_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.7,
              "title": "Odour Management_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.9,
              "title": "Unified Network Management (UNM)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.11,
              "title": "Unified Plant Management (UPM)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.13,
              "title": "Waste Water - Real Time & What if Scenario (WW - RTWIF)_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.15,
              "title": "SewerProtect_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.17,
              "title": "Sewer Tracker_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.19,
              "title": "Plant Mgm_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.21,
              "title": "Biological Monitoring_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [{
              "id": 14.1,
              "title": "AgroTwin_FDS Plantilla - Español",
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
              "title": "EWS_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [{
              "id": 16.1,
              "title": "WorkOrders_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.3,
              "title": "Billing_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.5,
              "title": "Portal_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },

          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [{
              "id": 17.1,
              "title": "SOC_FDS Plantilla - Español",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.3,
              "title": "BI_FDS Plantilla - Español",
              "status": "Disponible",
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
          "documents": [
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "V1 IoT_Core_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "V2 IoT_Core_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "Device Management (DM)_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": " GIS_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },

            {
              "id": 12.12,
              "title": "Plant Mgm_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Unified Network Management (UNM) - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [
            {
              "id": 13.2,
              "title": "CCTV__TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "SewerProtect_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Sewer Tracker_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Plant Mgm_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.22,
              "title": "Biological Monitoring_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [
            {
              "id": 14.2,
              "title": "AgroTwin_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [
            {
              "id": 15.2,
              "title": "EWS_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [
            {
              "id": 16.2,
              "title": "WorkOrders_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }

          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [
            {
              "id": 17.2,
              "title": "SOC_TDS - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_TDS - Plantilla",
              "status": "Disponible",
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
          "documents": [
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "V2 IoT_Core_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Product Manual & Training Guide - Plantilla",
              "status": "No No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [
            {
              "id": 13.2,
              "title": "CCTV_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [
            {
              "id": 14.2,
              "title": "AgroTwin_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [
            {
              "id": 15.2,
              "title": "EWS_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [
            {
              "id": 16.2,
              "title": "WorkOrders_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [
            {
              "id": 17.2,
              "title": "SOC_Product Manual & Training Guide - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Product Manual & Training Guide - Plantilla",
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
          "documents": [
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.10,
              "title": "V2 IoT_Core_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_ETL Documentation - Plantilla",
              "status": "No No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [
            {
              "id": 13.2,
              "title": "CCTV_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [
            {
              "id": 14.2,
              "title": "AgroTwin_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [
            {
              "id": 15.2,
              "title": "EWS_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [
            {
              "id": 16.2,
              "title": "WorkOrders_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [
            {
              "id": 17.2,
              "title": "SOC_ETL Documentation - Plantilla",
              "status": "No disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_ETL Documentation - Plantilla",
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
          "documents": [
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Test Plans - Plantilla",
              "status": "No Disponible ",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "WorkOrder_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [
            {
              "id": 13.2,
              "title": "CCTV_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [
            {
              "id": 14.2,
              "title": "AgroTwin_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [
            {
              "id": 15.2,
              "title": "EWS_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [
            {
              "id": 16.2,
              "title": "WorkOrders_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [
            {
              "id": 17.2,
              "title": "SOC_Test Plans - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Test Plans - Plantilla",
              "status": "Disponible",
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
          "documents": [
            {
              "id": 11.2,
              "title": "Data Science Framework (DSF)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.4,
              "title": "Domain Master Data (DMD)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.6,
              "title": "DT Builder_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.8,
              "title": "IoT_Core_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.12,
              "title": "Device Management (DM)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 11.14,
              "title": " GIS_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 12,
          "name": "02. Drinking Water Solutions",
          "documents": [
            {
              "id": 12.2,
              "title": "Leak Detection (LD)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.4,
              "title": "RT-WS SGW_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.6,
              "title": "Meter Asset Mgm_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.8,
              "title": "Meter Data Analytics_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.10,
              "title": "Pipe Planner_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.12,
              "title": "Plant Mgm_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.14,
              "title": "Unified Network Management (UNM)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 12.2,
              "title": "WorkOrder_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
          ]
        },
        {
          "id": 13,
          "name": "03. Waste Water Solutions",
          "documents": [
            {
              "id": 13.2,
              "title": "CCTV_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.4,
              "title": "Clog Monitoring_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.6,
              "title": "Map Functionalities_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.8,
              "title": "Odour Management_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.10,
              "title": "Unified Network Management (UNM)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.12,
              "title": "Unified Plant Management (UPM)_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.14,
              "title": "SewerProtect_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.16,
              "title": "Sewer Tracker_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.18,
              "title": "Plant Mgm_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 13.20,
              "title": "Biological Monitoring_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 14,
          "name": "04. Agriculture Solutions",
          "documents": [
            {
              "id": 14.2,
              "title": "AgroTwin_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento13.docx"
            }
          ]
        },
        {
          "id": 15,
          "name": "05. Water Resources",
          "documents": [
            {
              "id": 15.2,
              "title": "EWS_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 16,
          "name": "06. Cross Apps",
          "documents": [
            {
              "id": 16.2,
              "title": "WorkOrders_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.4,
              "title": "Billing_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 16.6,
              "title": "Portal_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        },
        {
          "id": 17,
          "name": "07. Business Intelligence",
          "documents": [
            {
              "id": 17.2,
              "title": "SOC_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            },
            {
              "id": 17.4,
              "title": "BI_Test Evidence - Plantilla",
              "status": "Disponible",
              "downloadLink": "https://ejemplo.com/documento8.docx"
            }
          ]
        }
      ]
    },
    {
      "id": 16,
      "name": "16. Monitoring Management User",
      "documents": [
        {
          "id": "1.2",
          "title": "V1 GoAigua Monitoring Management User - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },

      ]
    },
    {
      "id": 17,
      "name": "17. Operation Manual",
      "documents": [
        {
          "id": "1.2",
          "title": "V1 GoAigua Operation Manual - Plantilla",
          "status": "No disponible",
          "downloadLink": "https://ejemplo.com/archivo.docx"
        },

      ]
    },

  ];


return (
  <div className="container">
    <h2>Plantillas</h2>
    <p>Bienvenido a nuestra página "Plantillas". Aquí puedes encontrar carpetas y documentos con plantillas explicadas, listas para utilizar.</p>
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

export default Plantillas;
