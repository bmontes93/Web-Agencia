#  Agencia de Crecimiento Digital

<div align="center">

![Project Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![Node](https://img.shields.io/badge/node-%3E%3D%2018-green.svg?style=for-the-badge)

**[Ver Demo (Próximamente)]()** | **[Reportar Bug](https://github.com/bmontes93/Web-Agencia/issues)** | **[Solicitar Feature](https://github.com/bmontes93/Web-Agencia/issues)**

</div>

---

##  Descripción

**Agencia de Crecimiento Digital** es una plataforma web _Full Stack_ diseñada para ofrecer una experiencia de usuario inmersiva y de alto rendimiento. Este proyecto no es solo un sitio web, es una solución escalable que integra una arquitectura moderna de microservicios (preparada) con una interfaz de usuario reactiva y animada en 3D.

El objetivo es proporcionar a los visitantes una navegación fluida, tiempos de carga instantáneos y un sistema de contacto seguro y confiable.

---

## Arquitectura del Sistema

Este diagrama ilustra el flujo de datos y la interacción entre el cliente, el servidor y los servicios externos.

```mermaid
graph TD
    User((👤 Usuario))
    subgraph "Frontend (Vite + React)"
        UI[🖥️ Interfaz UI/UX]
        Forms[📝 Formularios]
        Three[🧊 Escenas 3D]
    end

    subgraph "Backend (Express API)"
        Server[⚙️ Servidor Node.js]
        Router[🔀 Rutas API]
        Controller[🎮 Controladores]
        Security[🛡️ Middlewares Seguridad]
    end

    subgraph "Servicios Externos"
        SMTP[📧 Servidor SMTP (Email)]
        Maps[🗺️ Google Maps API]
    end

    User -->|Navega| UI
    User -->|Interactúa| Three
    UI -->|Envía Datos| Forms
    Forms -->|POST Request| Router
    Router -->|Valida| Security
    Security -->|Procesa| Controller
    Controller -->|Envía Email| SMTP
    UI -->|Solicita Mapas| Maps

    style User fill:#f9f,stroke:#333,stroke-width:4px
    style Server fill:#bbf,stroke:#333,stroke-width:2px
    style UI fill:#bfb,stroke:#333,stroke-width:2px
```

---

##  Stack Tecnológico

La aplicación está construida sobre un stack moderno JAMstack / PERN (sin DB por el momento).

| Área         | Tecnología                                                                    | Propósito                           |
| :----------- | :---------------------------------------------------------------------------- | :---------------------------------- |
| **Frontend** | ![React](https://img.shields.io/badge/-React-black?logo=react)                | Librería UI basada en componentes.  |
|              | ![Vite](https://img.shields.io/badge/-Vite-black?logo=vite)                   | Bundler ultrarrápido y HMR.         |
|              | ![Tailwind](https://img.shields.io/badge/-Tailwind-black?logo=tailwindcss)    | Sistema de diseño utility-first.    |
|              | ![Framer Motion](https://img.shields.io/badge/-Framer-black?logo=framer)      | Animaciones complejas y gestos.     |
| **Backend**  | ![Node](https://img.shields.io/badge/-Node.js-black?logo=node.js)             | Runtime de JavaScript.              |
|              | ![Express](https://img.shields.io/badge/-Express-black?logo=express)          | Framework de servidor.              |
|              | ![Nodemailer](https://img.shields.io/badge/-Nodemailer-black?logo=nodemailer) | Servicio de emails transaccionales. |
| **DevOps**   | ![Git](https://img.shields.io/badge/-Git-black?logo=git)                      | Control de versiones.               |
|              | ![Eslint](https://img.shields.io/badge/-Eslint-black?logo=eslint)             | Linter y estandarización de código. |

---

##  Configuración y Variables de Entorno

Para ejecutar este proyecto, necesitas configurar las siguientes variables de entorno en tu archivo `backend/.env`.

| Variable                  | Requerido | Descripción                         | Ejemplo                 |
| :------------------------ | :-------: | :---------------------------------- | :---------------------- |
| `PORT`                    |    No     | Puerto del servidor backend.        | `3000`                  |
| `FRONTEND_URL`            |  **Sí**   | URL permitida por CORS.             | `http://localhost:5173` |
| `EMAIL_USER`              |  **Sí**   | Usuario SMTP para envío de correos. | `tu@email.com`          |
| `EMAIL_PASS`              |  **Sí**   | Contraseña de aplicación o SMTP.    | `password123`           |
| `CONTACT_EMAIL_RECIPIENT` |  **Sí**   | Email donde llegarán los mensajes.  | `admin@agencia.com`     |

---

##  Instalación y Despliegue

### Clonado e Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/bmontes93/Web-Agencia.git

# 2. Instalar dependencias Backend
cd Web-Agencia/backend
npm install
cp .env.example .env # Configurar tus variables aquí

# 3. Instalar dependencias Frontend
cd ../frontend
npm install
```

### Ejecución en Desarrollo

```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

---

##  Roadmap del Proyecto

- [x] **Fase 1: MVP** - Estructura base, landing page y contacto funcional.
- [x] **Fase 2: UI/UX 3D** - Integración de elementos flotantes y animaciones.
- [ ] **Fase 3: Blog/CMS** - Sistema de gestión de contenidos para noticias.
- [ ] **Fase 4: Dashboard Cliente** - Área privada para que clientes vean métricas.
- [ ] **Fase 5: CI/CD** - Pipelines automatizados para testing y deploy.

---

##  Contribuyendo

1.  Haz un **Fork** del proyecto.
2.  Crea tu rama de feature (`git checkout -b feature/AmazingFeature`).
3.  Haz **Commit** de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Haz **Push** a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un **Pull Request**.

---


