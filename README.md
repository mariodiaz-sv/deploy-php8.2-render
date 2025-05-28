# 📦 PHP Single Page App (Frontend + API sin base de datos)

Esta es una aplicación de una sola página en PHP y HTML/JS sin base de datos. Permite capturar un nombre y promedio, guardarlo en un archivo local (`datos.json`) y mostrarlo en la misma página. El backend está separado del frontend y se puede desplegar gratuitamente.

---

## 🚀 Tecnologías

- ✅ PHP 8 (sin framework, sin base de datos)
- ✅ HTML, CSS, JavaScript
- ✅ Docker & DockerHub
- ✅ GitHub Actions (CI/CD)
- ✅ GitHub Pages (Frontend)
- ✅ Render (Backend)

---

## 🧩 Estructura del proyecto

```
php-app-demo/
├── backend/           # API PHP sin base de datos
│   ├── index.php
│   └── Dockerfile
├── frontend/          # Página web
│   ├── index.html
│   ├── script.js
│   └── .nojekyll
└── .github/workflows/
    └── deploy.yml     # CI/CD para GitHub Pages + DockerHub
```

---

## 🧪 Ejecutar localmente con Docker

1. Abre terminal en la raíz del proyecto.
2. Construye y corre el contenedor backend:

```bash
cd backend
docker build -t php-backend .
docker run -p 8000:8000 php-backend
```

3. Abre `frontend/index.html` en tu navegador (o usa `Live Server` si tienes VS Code).
4. La API estará disponible en `http://localhost:8000`.

---

## 📦 Despliegue automático (CI/CD)

Este proyecto incluye un flujo de trabajo de GitHub Actions que:

- 🔄 Construye y sube la imagen de backend a DockerHub.
- 🌐 Publica el frontend automáticamente en GitHub Pages.

---

## 🐳 Configurar DockerHub

1. Crea una cuenta en [Docker Hub](https://hub.docker.com/)
2. Genera un Access Token en [Security Settings](https://hub.docker.com/settings/security)
3. En GitHub, ve a **Settings > Secrets > Actions** y crea:

| Nombre             | Valor                          |
|--------------------|--------------------------------|
| `DOCKER_USERNAME`  | `tu-usuarip`                  |
| `DOCKER_PASSWORD`  | Tu Access Token de DockerHub   |

---

## ☁️ Desplegar en Render (gratis)

1. Ve a [Render.com](https://render.com/)
2. Crea un nuevo servicio web tipo **Docker**
3. Usa la imagen de DockerHub:  
   ```
   docker.io/tu-usuario/php-backend:latest
   ```
4. Expón el puerto `8000`

---

## 🌐 Ver el frontend en GitHub Pages

1. Ve a `Settings > Pages` en tu repositorio
2. Fuente → `GitHub Actions`
3. GitHub Pages generará una URL como:  
   ```
   https://tu-usuario.github.io/php-app-demo/
   ```

---

## 🧑‍💻 Autor

Desarrollado por [mariodiaz-sv](https://github.com/mariodiaz-sv)

