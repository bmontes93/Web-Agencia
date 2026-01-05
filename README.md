# 🚀 Agencia Digital Premium | Data X Perience

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC)](https://tailwindcss.com/)

> **Fusionamos Inteligencia Artificial con diseño inmersivo. El futuro de la web no se ve, se siente.**

Este repositorio aloja el código fuente de una plataforma web para agencias digitales de alto nivel, diseñada con una arquitectura **SPA (Single Page Application)** moderna, efectos visuales en **3D** y un backend robusto para la gestión de contactos.

---

## 🛠️ Stack Tecnológico

La arquitectura del proyecto está desacoplada en Frontend y Backend para máxima escalabilidad y mantenimiento.

### **Frontend (Cliente)**

Experiencia de usuario inmersiva y de alto rendimiento.

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) (Micro-interacciones y transiciones)
- **3D & WebGL**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) + [Drei](https://github.com/pmndrs/drei)
- **Iconografía**: [Lucide React](https://lucide.dev/)

### **Backend (API)**

Servidor ligero y seguro para procesamiento de datos.

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Base de Datos**: SQLite (Vía [Sequelize ORM](https://sequelize.org/) para prototipado rápido y persistencia local)
- **Email Service**: [Nodemailer](https://nodemailer.com/) (Gestión de formularios de contacto)
- **Seguridad**: `helmet`, `cors`, `express-rate-limit`, `hpp`.
- **Validación**: `express-validator`.

---

## 📂 Estructura del Proyecto

```bash
/
├── 📂 backend/               # API Server (Node/Express)
│   ├── 📂 config/            # Configuración de BD y entorno
│   ├── 📂 controllers/       # Lógica de negocio
│   ├── 📂 models/            # Modelos Sequelize (SQLite)
│   ├── 📂 routes/            # Endpoints de la API
│   └── server.js             # Punto de entrada del servidor
│
├── 📂 frontend/              # SPA Client (React/Vite)
│   ├── 📂 src/
│   │   ├── 📂 components/    # Componentes UI (Hero, Bento, 3D, etc.)
│   │   └── App.jsx           # Componente Raíz
│   ├── index.css             # Estilos globales y Tailwind
│   └── vite.config.js        # Configuración del bundler
│
└── README.md                 # Documentación
```

---

## 🚀 Instalación y Despliegue Local

Sigue estos pasos para levantar el entorno de desarrollo completo.

### 1. Prerrequisitos

Asegúrate de tener instalado:

- Git
- Node.js (v18.0.0 o superior)

### 2. Clonar el repositorio

```bash
git clone https://github.com/bmontes93/Web-Agencia.git
cd AGENCIA
```

### 3. Configuración del Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` en `backend/` con las siguientes variables:

```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
# Configuración de Email (Ejemplo con Ethereal para pruebas)
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=tu_usuario_ethereal
EMAIL_PASS=tu_password_ethereal
CONTACT_EMAIL_RECIPIENT=admin@agencia.com
```

### 4. Configuración del Frontend

En una nueva terminal:

```bash
cd frontend
npm install
```

### 5. Ejecución

Para desarrollo, necesitarás dos terminales corriendo simultáneamente:

**Terminal 1 (Backend):**

```bash
cd backend
npm run dev
# El servidor correrá en http://localhost:3000
```

**Terminal 2 (Frontend):**

```bash
cd frontend
npm run dev
# La aplicación web correrá en http://localhost:5173
```

---

## ✨ Features Destacadas

1.  **Navegación Fluida**: Sistema de Smooth Scrolling integrado para navegación One-Page.
2.  **Entorno 3D**: Fondo de partículas reactivo (Stars Field) implementado con React Three Fiber.
3.  **Diseño Glassmorphism**: Estética moderna con desenfoques, transparencias y bordes sutiles.
4.  **Bento Grid**: Presentación de servicios con diseño de grilla asimétrica y efectos hover holográficos.
5.  **Formulario Funcional**: Validación en tiempo real y envío de correos asíncrono.
6.  **Responsive**: Adaptabilidad total desde móviles hasta pantallas 4K.

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1.  Haz un Fork del proyecto.
2.  Crea tu rama de feature (`git checkout -b feature/AmazingFeature`).
3.  Haz Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

---

## 📜 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

---

<div align="center">
  <sub>Diseñado y Desarrollado con ❤️ por <a href="https://github.com/bmontes93">Bryan Montes</a></sub>
</div>
