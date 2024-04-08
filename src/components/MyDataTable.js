import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component';


const data = [{
		"id": 1.1,
		"carpeta": "01. Deployment Architecture",
		"titulo": "V2 GoAigua Architecture - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F01%2E%20Deployment%20Architecture%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 1.2,
		"carpeta": "01. Deployment Architecture",
		"titulo": "V2 GoAigua Architecture - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/:w:/r/sites/DepartamentoProyectosIT/Documentos%20compartidos/Arquitectura%20IT/Documentos%20Arquitectura%20IT/02%20GEN%C3%89RICA/01.%20Deployment%20Architecture/DOC_EN/V2%20GoAigua%20Architecture%20-%20English.docx?d=wfd2cd658ad754b00b1d1e0299e42b2f3&csf=1&web=1&e=JZaDDa"
	}, {
		"id": 1.3,
		"carpeta": "01. Deployment Architecture",
		"titulo": "V3 GoAigua Architecture - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F01%2E%20Deployment%20Architecture%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 1.4,
		"carpeta": "01. Deployment Architecture",
		"titulo": "V3 GoAigua Architecture - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F01%2E%20Deployment%20Architecture%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 2.1,
		"carpeta": "02. Cybersecurity",
		"titulo": "V1 GoAigua Cybersecurity - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 2.2,
		"carpeta": "02. Cybersecurity",
		"titulo": "V1GoAigua Cybersecurity - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 3.1,
		"carpeta": "03. Inventory Solutions by requirement",
		"titulo": "V1 GoAigua Inventory Solutions by requirement - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 3.2,
		"carpeta": "03. Inventory Solutions by requirement",
		"titulo": "V1GoAigua Inventory Solutions by requirement - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 4.1,
		"carpeta": "04. Inventory Requirements to Product",
		"titulo": "V1 GoAigua Inventory Requirements to Product- Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F03%2E%20Inventory%20Requirements%20to%20Product%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 4.2,
		"carpeta": "04. Inventory Requirements to Product",
		"titulo": "V1 GoAigua Inventory Requirements to Product - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F03%2E%20Inventory%20Requirements%20to%20Product%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 5.1,
		"carpeta": "05. Session Schedule for each solution",
		"titulo": "V1 GoAigua Session Schedule for each solution - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 5.2,
		"carpeta": "05. Session Schedule for each solution",
		"titulo": "V1 GoAigua Session Schedule for each solution - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 6.1,
		"carpeta": "06. JIRA Parameterisation",
		"titulo": "V1 GoAigua JIRA Parameterisation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 6.2,
		"carpeta": "06. JIRA Parameterisation",
		"titulo": "V1 GoAigua JIRA Parameterisation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 7.1,
		"carpeta": "07. Environment request",
		"titulo": "V1 GoAigua Environment request - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 7.2,
		"carpeta": "07. Environment request",
		"titulo": "V1 GoAigua Environment request - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 8.1,
		"carpeta": "08. Integration between solutions",
		"titulo": "V1 GoAigua Integration between solutions - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 8.2,
		"carpeta": "08. Integration between solutions",
		"titulo": "V1 GoAigua Integration between solutions - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": 9.1,
		"carpeta": "09. Data Integration",
		"titulo": "V1 GoAigua Data Integration - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F09%2E%20Data%20Integration%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 9.2,
		"carpeta": "09. Data Integration",
		"titulo": "V1 GoAigua Data Integration - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F09%2E%20Data%20Integration%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 9.3,
		"carpeta": "09. Data Integration",
		"titulo": "V2 GoAigua Data Integration - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F09%2E%20Data%20Integration%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 9.4,
		"carpeta": "09. Data Integration",
		"titulo": "V2 GoAigua Data Integration - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F09%2E%20Data%20Integration%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.1,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "Data Science Framework (DSF)_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "Data Science Framework (DSF)_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.3,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "Domain Master Data (DMD)_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.4,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "Domain Master Data (DMD)_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.5,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "DT Builder_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.6,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "DT Builder_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.7,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "IoT_Core_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.8,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "IoT_Core_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.9,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "Device Management (DM)_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.10,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "Device Management (DM)_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.11,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "GIS_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FES&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 11.12,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "GIS_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://gohub.sharepoint.com/sites/DepartamentoProyectosIT/Documentos%20compartidos/Forms/AllItems.aspx?e=5%3A4e0613e91e174f908ed9c6b0b793a8b1&sharingv2=true&fromShare=true&at=9&CT=1710327999722&OR=OWA%2DNT%2DMail&CID=7a80a605%2Db69b%2D6177%2D7d25%2D50591b2e1c83&FolderCTID=0x0120007A5D646A170E994AA6CB70E09BD8EAA4&id=%2Fsites%2FDepartamentoProyectosIT%2FDocumentos%20compartidos%2FArquitectura%20IT%2FDocumentos%20Arquitectura%20IT%2F02%20GEN%C3%89RICA%2F10%2E%20Functional%20Analysis%2F01%2E%20SWE%2FDOC%5FEN&viewid=37eabb69%2D1cfb%2D4710%2Db4c7%2D69143f83f9d3"
	}, {
		"id": 12.1,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.3,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.4,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.5,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.6,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.7,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.8,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.9,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.10,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "10. Functional Analysis/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM) - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.1,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "CCTV__FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "CCTV__FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.5,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Map Functionalities_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.6,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Map Functionalities_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.7,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Odour Management_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.8,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Odour Management_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.9,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.10,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.11,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.12,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.13,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Waste Water - Real Time & What if Scenario (WW - RTWIF)_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.14,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Waste Water - Real Time & What if Scenario (WW - RTWIF) - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.15,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "SewerProtect_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.16,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "SewerProtect_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.17,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.18,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.19,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Plant Mgm_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.20,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Plant Mgm_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.21,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.22,
		"carpeta": "10. Functional Analysis/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 14.1,
		"carpeta": "10. Functional Analysis/04. Agriculture Solutions",
		"titulo": "AgroTwin_FDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 14.2,
		"carpeta": "10. Functional Analysis/04. Agriculture Solutions",
		"titulo": "AgroTwin_FDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 15.1,
		"carpeta": "10. Functional Analysis/05. Water Resources",
		"titulo": "EWS_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 15.2,
		"carpeta": "10. Functional Analysis/05. Water Resources",
		"titulo": "EWS_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.1,
		"carpeta": "10. Functional Analysis/06. Cross Apps",
		"titulo": "WorkOrders_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.2,
		"carpeta": "10. Functional Analysis/06. Cross Apps",
		"titulo": "WorkOrders_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.3,
		"carpeta": "10. Functional Analysis/06. Cross Apps",
		"titulo": "Billing_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.4,
		"carpeta": "10. Functional Analysis/06. Cross Apps",
		"titulo": "Billing_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.5,
		"carpeta": "10. Functional Analysis/06. Cross Apps",
		"titulo": "Portal_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.6,
		"carpeta": "10. Functional Analysis/06. Cross Apps",
		"titulo": "Portal_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.1,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "SOC_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.2,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "SOC_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.3,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "BI_FDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.4,
		"carpeta": "10. Functional Analysis/01. SWE",
		"titulo": "BI_FDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.1,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "Data Science Framework (DSF)_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "Data Science Framework (DSF)_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.3,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "Domain Master Data (DMD)_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.4,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "Domain Master Data (DMD)_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.5,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "DT Builder_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.6,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "DT Builder_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.7,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "IoT_Core_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.8,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "IoT_Core_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.7,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "V2 IoT_Core_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.8,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "V2 IoT_Core_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.9,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "Device Management (DM)_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.10,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "Device Management (DM)_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.11,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "GIS_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.12,
		"carpeta": "11. Technical Design/01. SWE",
		"titulo": "GIS_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.1,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.3,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.4,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.5,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.6,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.7,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.8,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.9,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.10,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "11. Technical Design/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.1,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "CCTV__TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "CCTV__TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.5,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Map Functionalities_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.6,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Map Functionalities_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.7,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Odour Management_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.8,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Odour Management_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.9,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.10,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.11,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_TDS - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.12,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_TDS - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.15,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "SewerProtect_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.16,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "SewerProtect_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.17,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.18,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.19,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Plant Mgm_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.20,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Plant Mgm_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.21,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.22,
		"carpeta": "11. Technical Design/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 14.1,
		"carpeta": "11. Technical Design/04. Agriculture Solutions",
		"titulo": "AgroTwin_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 14.2,
		"carpeta": "11. Technical Design/04. Agriculture Solutions",
		"titulo": "AgroTwin_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 15.1,
		"carpeta": "11. Technical Design/05. Water Resources",
		"titulo": "EWS_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 15.2,
		"carpeta": "11. Technical Design/05. Water Resources",
		"titulo": "EWS_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.1,
		"carpeta": "11. Technical Design/06. Cross Apps",
		"titulo": "WorkOrders_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.2,
		"carpeta": "11. Technical Design/06. Cross Apps",
		"titulo": "WorkOrders_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.3,
		"carpeta": "11. Technical Design/06. Cross Apps",
		"titulo": "Billing_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.4,
		"carpeta": "11. Technical Design/06. Cross Apps",
		"titulo": "Billing_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.5,
		"carpeta": "11. Technical Design/06. Cross Apps",
		"titulo": "Portal_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.6,
		"carpeta": "11. Technical Design/06. Cross Apps",
		"titulo": "Portal_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.1,
		"carpeta": "11. Technical Design/07. Business Intelligence",
		"titulo": "SOC_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.2,
		"carpeta": "11. Technical Design/07. Business Intelligence",
		"titulo": "SOC_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.3,
		"carpeta": "11. Technical Design/07. Business Intelligence",
		"titulo": "BI_TDS - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.4,
		"carpeta": "11. Technical Design/07. Business Intelligence",
		"titulo": "BI_TDS - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.1,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "Data Science Framework (DSF)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "Data Science Framework (DSF)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.3,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "Domain Master Data (DMD)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.4,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "Domain Master Data (DMD)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.5,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "DT Builder_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.6,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "DT Builder_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.7,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "IoT_Core_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.8,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "IoT_Core_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.9,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "V2 IoT_Core_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.10,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "V2 IoT_Core_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.11,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "Device Management (DM)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.12,
		"carpeta": "12. Product Manuals and Training Guides/01. SWE",
		"titulo": "Device Management (DM)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.13,
		"carpeta": "12. Product Manuals and Training Guides/02. GIS",
		"titulo": "GIS_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace_descarga": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.14,
		"carpeta": "12. Product Manuals and Training Guides/02. GIS",
		"titulo": "GIS_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace_descarga": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.1,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.3,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.4,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.5,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.6,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.7,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.8,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.9,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.10,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.13,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.14,
		"carpeta": "12. Product Manuals and Training Guides/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.1,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "CCTV_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "CCTV_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.5,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Map Functionalities_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.6,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Map Functionalities_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.7,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Odour Management_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.8,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Odour Management_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.9,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.10,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.11,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.12,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.13,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "SewerProtect_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.14,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "SewerProtect_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.15,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.16,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.17,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Plant Mgm_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.18,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Plant Mgm_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.19,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.20,
		"carpeta": "12. Product Manuals and Training Guides/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 14.1,
		"carpeta": "12. Product Manuals and Training Guides/04. Agriculture Solutions",
		"titulo": "AgroTwin_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	},
	{
		"id": 14.2,
		"carpeta": "12. Product Manuals and Training Guides/04. Agriculture Solutions",
		"titulo": "AgroTwin_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	},
	{
		"id": 15.1,
		"carpeta": "12. Product Manuals and Training Guides/05. Water Resources",
		"titulo": "EWS_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 15.2,
		"carpeta": "12. Product Manuals and Training Guides/05. Water Resources",
		"titulo": "EWS_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.1,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "WorkOrders_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.2,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "WorkOrders_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.3,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Billing_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.4,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Billing_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.5,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Portal_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.6,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Portal_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 14.1,
		"carpeta": "12. Product Manuals and Training Guides/04. Agriculture Solutions",
		"titulo": "AgroTwin_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 14.2,
		"carpeta": "12. Product Manuals and Training Guides/04. Agriculture Solutions",
		"titulo": "AgroTwin_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 15.1,
		"carpeta": "12. Product Manuals and Training Guides/05. Water Resources",
		"titulo": "EWS_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 15.2,
		"carpeta": "12. Product Manuals and Training Guides/05. Water Resources",
		"titulo": "EWS_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.1,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "WorkOrders_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.2,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "WorkOrders_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.3,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Billing_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.4,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Billing_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.5,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Portal_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.6,
		"carpeta": "12. Product Manuals and Training Guides/06. Cross Apps",
		"titulo": "Portal_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.1,
		"carpeta": "12. Product Manuals and Training Guides/07. Business Intelligence",
		"titulo": "SOC_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.2,
		"carpeta": "12. Product Manuals and Training Guides/07. Business Intelligence",
		"titulo": "SOC_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.3,
		"carpeta": "12. Product Manuals and Training Guides/07. Business Intelligence",
		"titulo": "BI_Product Manual & Training Guide - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.4,
		"carpeta": "12. Product Manuals and Training Guides/07. Business Intelligence",
		"titulo": "BI_Product Manual & Training Guide - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 11.1,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "Data Science Framework (DSF)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "Data Science Framework (DSF)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.3,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "Domain Master Data (DMD)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.4,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "Domain Master Data (DMD)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.5,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "DT Builder_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.6,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "DT Builder_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.7,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "IoT_Core_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.8,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "IoT_Core_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.9,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "V2 IoT_Core_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.10,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "V2 IoT_Core_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.11,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "Device Management (DM)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.12,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "Device Management (DM)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.13,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "GIS_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.14,
		"carpeta": "13. ETL Documentation/01. SWE",
		"titulo": "GIS_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.1,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.3,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.4,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.5,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.6,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.7,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.8,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.9,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.10,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Pipe Planner_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Plant Mgm_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.13,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.14,
		"carpeta": "13. ETL Documentation/02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 13.1,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "CCTV_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "CCTV_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Clog Monitoring_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.5,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Map Functionalities_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.6,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Map Functionalities_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.7,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Odour Management_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.8,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Odour Management_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.9,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.10,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.11,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.12,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.13,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "SewerProtect_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.14,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "SewerProtect_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.15,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.16,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Sewer Tracker_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.17,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Plant Mgm_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.18,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Plant Mgm_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.19,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.20,
		"carpeta": "13. ETL Documentation/03. Waste Water Solutions",
		"titulo": "Biological Monitoring_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 14.1,
		"carpeta": "13. ETL Documentation/04. Agriculture Solutions",
		"titulo": "AgroTwin_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 14.2,
		"carpeta": "13. ETL Documentation/04. Agriculture Solutions",
		"titulo": "AgroTwin_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 15.1,
		"carpeta": "13. ETL Documentation/05. Water Resources",
		"titulo": "EWS_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 15.2,
		"carpeta": "13. ETL Documentation/05. Water Resources",
		"titulo": "EWS_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.1,
		"carpeta": "13. ETL Documentation/06. Cross Apps",
		"titulo": "WorkOrders_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.2,
		"carpeta": "13. ETL Documentation/06. Cross Apps",
		"titulo": "WorkOrders_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.3,
		"carpeta": "13. ETL Documentation/06. Cross Apps",
		"titulo": "Billing_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.4,
		"carpeta": "13. ETL Documentation/06. Cross Apps",
		"titulo": "Billing_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.5,
		"carpeta": "13. ETL Documentation/06. Cross Apps",
		"titulo": "Portal_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.6,
		"carpeta": "13. ETL Documentation/06. Cross Apps",
		"titulo": "Portal_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.1,
		"carpeta": "13. ETL Documentation/07. Business Intelligence",
		"titulo": "SOC_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.2,
		"carpeta": "13. ETL Documentation/07. Business Intelligence",
		"titulo": "SOC_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.3,
		"carpeta": "13. ETL Documentation/07. Business Intelligence",
		"titulo": "BI_ETL Documentation - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.4,
		"carpeta": "13. ETL Documentation/07. Business Intelligence",
		"titulo": "BI_ETL Documentation - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 11.1,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "Data Science Framework (DSF)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "Data Science Framework (DSF)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.3,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "Domain Master Data (DMD)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.4,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "Domain Master Data (DMD)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.5,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "DT Builder_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.6,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "DT Builder_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.7,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "IoT_Core_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.8,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "IoT_Core_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.11,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "Device Management (DM)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.12,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": "Device Management (DM)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.13,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": " GIS_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.14,
		"carpeta": "14. Test Plans/01. SWE",
		"titulo": " GIS_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 12.1,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.3,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.4,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.5,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.6,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.7,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.8,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.9,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Pipe Planner_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.10,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Pipe Planner_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Plant Mgm_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Plant Mgm_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Plantilla",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.13,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.14,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.1,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "WorkOrder_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "14. Test Plans / 02. Drinking Water Solutions",
		"titulo": "WorkOrder_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 13.1,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "CCTV_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "CCTV_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Clog Monitoring_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Clog Monitoring_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.5,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Map Functionalities_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.6,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Map Functionalities_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.7,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Odour Management_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.8,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Odour Management_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.9,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.10,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.11,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.12,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.13,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "SewerProtect_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.14,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "SewerProtect_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.15,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Sewer Tracker_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.16,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Sewer Tracker_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.17,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Plant Mgm_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.18,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Plant Mgm_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.19,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Biological Monitoring_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.20,
		"carpeta": "14. Test Plans / 03. Waste Water Solutions",
		"titulo": "Biological Monitoring_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 14.1,
		"carpeta": "14. Test Plans / 04. Agriculture Solutions",
		"titulo": "AgroTwin_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 14.2,
		"carpeta": "14. Test Plans / 04. Agriculture Solutions",
		"titulo": "AgroTwin_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	},
	{
		"id": 15.1,
		"carpeta": "14. Test Plans / 05. Water Resources",
		"titulo": "EWS_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 15.2,
		"carpeta": "14. Test Plans / 05. Water Resources",
		"titulo": "EWS_Test Plans - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.1,
		"carpeta": "14. Test Plans / 06. Cross Apps",
		"titulo": "WorkOrders_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.2,
		"carpeta": "14. Test Plans / 06. Cross Apps",
		"titulo": "WorkOrders_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.3,
		"carpeta": "14. Test Plans / 06. Cross Apps",
		"titulo": "Billing_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.4,
		"carpeta": "14. Test Plans / 06. Cross Apps",
		"titulo": "Billing_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.5,
		"carpeta": "14. Test Plans / 06. Cross Apps",
		"titulo": "Portal_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.6,
		"carpeta": "14. Test Plans / 06. Cross Apps",
		"titulo": "Portal_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 17.1,
		"carpeta": "14. Test Plans / 07. Business Intelligence",
		"titulo": "SOC_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.2,
		"carpeta": "14. Test Plans / 07. Business Intelligence",
		"titulo": "SOC_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.3,
		"carpeta": "14. Test Plans / 07. Business Intelligence",
		"titulo": "BI_Test Plans - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.4,
		"carpeta": "14. Test Plans / 07. Business Intelligence",
		"titulo": "BI_Test Plans - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 11.1,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "Data Science Framework (DSF)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "Data Science Framework (DSF)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.3,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "Domain Master Data (DMD)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.4,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "Domain Master Data (DMD)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.5,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "DT Builder_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.6,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "DT Builder_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.7,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "IoT_Core_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.8,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "IoT_Core_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.11,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "Device Management (DM)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.12,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": "Device Management (DM)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.13,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": " GIS_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.14,
		"carpeta": "15. Test Evidence / 01. SWE",
		"titulo": " GIS_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 12.1,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.2,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Leak Detection (LD)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.3,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.4,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "RT-WS SGW_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.5,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.6,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Meter Asset Mgm_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.7,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.8,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Meter Data Analytics_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.9,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Pipe Planner_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.10,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Pipe Planner_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.11,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Plant Mgm_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.12,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Plant Mgm_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.13,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.14,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.15,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "WorkOrder_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.16,
		"carpeta": "15. Test Evidence / 02. Drinking Water Solutions",
		"titulo": "WorkOrder_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 13.1,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "CCTV_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "CCTV_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Clog Monitoring_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Clog Monitoring_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.5,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Map Functionalities_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.6,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Map Functionalities_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.7,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Odour Management_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.8,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Odour Management_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.9,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.10,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Unified Network Management (UNM)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.11,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.12,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Unified Plant Management (UPM)_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.13,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "SewerProtect_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.14,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "SewerProtect_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.15,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Sewer Tracker_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.16,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Sewer Tracker_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.17,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Plant Mgm_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.18,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Plant Mgm_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.19,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Biological Monitoring_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.20,
		"carpeta": "15. Test Evidence / 03. Waste Water Solutions",
		"titulo": "Biological Monitoring_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 14.1,
		"carpeta": "15. Test Evidence / 04. Agriculture Solutions",
		"titulo": "AgroTwin_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	}, {
		"id": 14.2,
		"carpeta": "15. Test Evidence / 04. Agriculture Solutions",
		"titulo": "AgroTwin_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento13.docx"
	},
	{
		"id": 15.1,
		"carpeta": "15. Test Evidence / 05. Water Resources",
		"titulo": "EWS_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 15.2,
		"carpeta": "15. Test Evidence / 05. Water Resources",
		"titulo": "EWS_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 16.1,
		"carpeta": "15. Test Evidence / 06. Cross Apps",
		"titulo": "WorkOrders_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.2,
		"carpeta": "15. Test Evidence / 06. Cross Apps",
		"titulo": "WorkOrders_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.3,
		"carpeta": "15. Test Evidence / 06. Cross Apps",
		"titulo": "Billing_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.4,
		"carpeta": "15. Test Evidence / 06. Cross Apps",
		"titulo": "Billing_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.5,
		"carpeta": "15. Test Evidence / 06. Cross Apps",
		"titulo": "Portal_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 16.6,
		"carpeta": "15. Test Evidence / 06. Cross Apps",
		"titulo": "Portal_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 17.1,
		"carpeta": "15. Test Evidence / 07. Business Intelligence",
		"titulo": "SOC_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.2,
		"carpeta": "15. Test Evidence / 07. Business Intelligence",
		"titulo": "SOC_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.3,
		"carpeta": "15. Test Evidence / 07. Business Intelligence",
		"titulo": "BI_Test Evidence - Español",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 17.4,
		"carpeta": "15. Test Evidence / 07. Business Intelligence",
		"titulo": "BI_Test Evidence - English",
		"ambito": "Genérico",
		"estado": "No disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": "16.1",
		"carpeta": "16. Monitoring Management User",
		"titulo": "V1 GoAigua Monitoring Management User - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": "16.2",
		"carpeta": "16. Monitoring Management User",
		"titulo": "V1 GoAigua Monitoring Management User - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	},
	{
		"id": "17.1",
		"carpeta": "17. Operation Manual",
		"titulo": "V1 GoAigua Operation Manual - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	}, {
		"id": "17.2",
		"carpeta": "17. Operation Manual",
		"titulo": "V1 GoAigua Operation Manual - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/archivo.docx"
	},
	{
		"id": 11.1,
		"carpeta": "18. Others / DR Disaster Recovery Go-Aigua",
		"titulo": "Disaster Recovery Go-Aigua - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 11.2,
		"carpeta": "18. Others / DR Disaster Recovery Go-Aigua",
		"titulo": "Disaster Recovery Go-Aigua - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 12.1,
		"carpeta": "18. Others / DRS Document Review Sheet",
		"titulo": "DRS Document Review Sheet - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 12.1,
		"carpeta": "18. Others / DRS Document Review Sheet",
		"titulo": "DRS Document Review Sheet - English",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	},
	{
		"id": 13.1,
		"carpeta": "18. Others / PE Procedimiento de entregas",
		"titulo": "PE General - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.2,
		"carpeta": "18. Others / PE Procedimiento de entregas",
		"titulo": "PE DMD- Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.3,
		"carpeta": "18. Others / PE Procedimiento de entregas",
		"titulo": "PE IoT Core - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}, {
		"id": 13.4,
		"carpeta": "18. Others / PE Procedimiento de entregas",
		"titulo": " PE Leak Detection - Español",
		"ambito": "Genérico",
		"estado": "Disponible",
		"enlace": "https://ejemplo.com/documento8.docx"
	}
];


function MyDataTable() {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = value => {
    const filteredItems = data.filter(item =>
      item.carpeta.toLowerCase().includes(value.toLowerCase()) ||
      item.titulo.toLowerCase().includes(value.toLowerCase()) ||
      item.ambito.toLowerCase().includes(value.toLowerCase()) ||
      item.estado.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  // Define las columnas y establece el ancho de la columna del título y carpeta
  const columns = [
    {
      name: 'Carpeta',
      selector: row => row.carpeta,
      sortable: true,
      cell: row => <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{row.carpeta}</div>, // Renderiza el texto completo de la carpeta y permite envolver palabras
    },
    {
      name: 'Título del documento',
      selector: row => row.titulo,
      sortable: true,
      cell: row => <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{row.titulo}</div>, // Renderiza el texto completo del título y permite envolver palabras
    },
    {
      name: 'Ámbito',
      selector: row => row.ambito,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.estado,
      sortable: true,
    },
    {
      name: 'Enlace de descarga',
      cell: row => {
        if (row.estado !== 'No disponible' && row.enlace) {
          return <a href={row.enlace} target="_blank" rel="noopener noreferrer">Descargar</a>;
        } else {
          return null; // No renderiza ningún contenido si el estado es "No disponible" o si no hay enlace
        }
      }
    }
    // Puedes añadir más columnas según necesites
  ];

  return (
    <Container>
      <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>Buscar un documento genérico</h1>
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
      />
    </Container>
  );
}

export default MyDataTable;