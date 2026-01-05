# 🚀 Agencia de Crecimiento Digital

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

Bienvenido al repositorio oficial de **Agencia de Crecimiento Digital**. Una plataforma web moderna, rápida y escalable diseñada para potenciar la presencia digital de negocios y empresas. Este proyecto combina una arquitectura robusta de backend con una experiencia de frontend de vanguardia.

🔗 **Repositorio Oficial:** [https://github.com/bmontes93/Web-Agencia](https://github.com/bmontes93/Web-Agencia)

---

## ✨ Características Principales

- **⚡ Frontend de Alto Rendimiento:** Construido con **Vite** y **React** para una experiencia de usuario ultra rápida y fluida.
- **🎨 Diseño UI/UX Premium:** Estilos modernos y responsivos utilizando **Tailwind CSS** y componentes interactivos.
- **🔌 Backend Robusto:** API RESTful desarrollada con **Node.js** y **Express** para manejar lógica de negocio, correos y seguridad.
- **🛡️ Seguridad Integrada:** Implementación de `helmet`, `cors`, y `express-rate-limit` para protección contra ataques comunes.
- **📧 Sistema de Contacto:** Integración completa de formulario de contacto con envío de correos vía SMTP.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) **React 19**: Biblioteca para construir interfaces de usuario.
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite**: Entorno de desarrollo de próxima generación.
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS**: Framework de utilidades para diseño rápido.
- ![Three.js](https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white) **Three.js / React Three Fiber**: Gráficos 3D interactivos.
- ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) **Framer Motion**: Animaciones fluidas para React.

### Backend

- ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white) **Node.js**: Entorno de ejecución para JavaScript.
- ![Express](https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white) **Express**: Framework web minimalista.
- ![Nodemailer](https://img.shields.io/badge/-Nodemailer-23B36F?style=flat&logo=nodemailer&logoColor=white) **Nodemailer**: Envío de correos electrónicos.

---

## 🚀 Guía de Instalación y Uso

Sigue estos pasos para levantar el proyecto en tu entorno local.

### 1. Clonar el Repositorio

```bash
git clone https://github.com/bmontes93/Web-Agencia.git
cd Web-Agencia
```

### 2. Configurar el Backend

Navega a la carpeta del backend e instala las dependencias:

```bash
cd backend
npm install
```

**Variables de Entorno (.env):**
Crea un archivo `.env` en la carpeta `backend` basándote en `.env.example`. Asegúrate de definir:

- `PORT=3000`
- `FRONTEND_URL=http://localhost:5173`
- Credenciales de correo (SMTP) para el formulario de contacto.

### 3. Configurar el Frontend

En una **nueva terminal**, navega a la carpeta del frontend e instala las dependencias:

```bash
cd frontend
npm install
```

### 4. Iniciar el Proyecto (Modo Desarrollo)

**Terminal 1 (Backend):**

```bash
cd backend
npm run dev
```

> El backend correrá en [http://localhost:3000](http://localhost:3000)

**Terminal 2 (Frontend):**

```bash
cd frontend
npm run dev
```

> El frontend correrá en [http://localhost:5173](http://localhost:5173)

---

## 📂 Estructura del Proyecto

```
Web-Agencia/
├── backend/            # Servidor API, Lógica de Negocio
│   ├── routes/         # Rutas de la API
│   ├── utils/          # Utilidades (Logger, ErrorHandler)
│   └── server.js       # Punto de entrada del servidor
├── frontend/           # Aplicación React + Vite
│   ├── src/            # Código fuente React
│   ├── public/         # Assets públicos
│   └── index.html      # Punto de entrada HTML
└── README.md           # Documentación del proyecto
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto, siéntete libre de abrir un issue o enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Hecho con ❤️ por [bmontes93](https://github.com/bmontes93)
