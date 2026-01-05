# Proyecto: Agencia de Crecimiento Digital

Este es el repositorio para el sitio web de la Agencia de Crecimiento Digital. El proyecto está separado en un frontend de archivos estáticos y un backend con Node.js y Express.

## Estructura

- `/frontend`: Contiene todos los archivos del cliente (HTML, CSS, JS, imágenes).
- `/backend`: Contiene el servidor de Node.js que sirve el frontend y maneja la lógica de la API (por ejemplo, el formulario de contacto).

## Cómo Empezar

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior)

### Configuración de Variables de Entorno

El proyecto utiliza variables de entorno para la configuración sensible y específica del entorno. Se requiere un archivo `.env` en el directorio `/backend` para que el servidor funcione correctamente. Puedes usar el archivo `.env.example` como plantilla:

1.  Copia `.env.example` a `.env` en el directorio `backend/`:
    ```sh
    cp backend/.env.example backend/.env
    ```
2.  Edita el archivo `.env` y configura las siguientes variables:
    *   `PORT`: Puerto en el que se ejecutará el servidor backend (por defecto 3000).
    *   `FRONTEND_URL`: **Crucial para producción.** La URL de tu frontend para la configuración de CORS (ej. `https://www.tudominio.com`). En desarrollo, `http://localhost:3000` es suficiente.
    *   `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, `EMAIL_PASS`: Credenciales para el servidor SMTP utilizado para enviar correos electrónicos (ej. formulario de contacto).
    *   `CONTACT_EMAIL_RECIPIENT`: **Crucial para producción.** La dirección de correo electrónico a la que se enviarán los mensajes del formulario de contacto.
    *   `GOOGLE_MAPS_API_KEY`: Clave API para servicios de Google Maps, si se utilizan.
    *   `NODE_ENV`: `development` para desarrollo, `production` para producción.

### Instalación y Ejecución

1.  **Clona el repositorio:**
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd WEB AGENCIA
    ```

2.  **Instala las dependencias del backend:**
    ```sh
    cd backend
    npm install
    ```

3.  **Inicia el servidor:**

    - **Para desarrollo (con reinicio automático):**
      ```sh
      npm run dev
      ```

    - **Para producción:**
      ```sh
      npm start
      ```

4.  **Abre el sitio en tu navegador:**
    [http://localhost:3000](http://localhost:3000)