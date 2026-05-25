
# Gestor de Películas

Esta es una aplicación web para gestionar películas, desarrollada con [Express.js](https://expressjs.com/) y [Bootstrap](https://getbootstrap.com/). Permite insertar, buscar, editar y listar películas de manera sencilla a través de una interfaz web moderna.

## Características

- Listado de películas
- Búsqueda de películas
- Inserción de nuevas películas
- Edición de películas existentes
- Interfaz responsiva con Bootstrap

## Instalación

1. **Clona el repositorio o descarga el código fuente.**

2. **Instala las dependencias:**

	```bash
	npm install
	```

3. **Configura la base de datos:**

	- Asegúrate de tener configurada la conexión en `db/conection.js` según tu entorno.

4. **Inicia la aplicación:**

	```bash
	node index.js
	```

5. **Accede a la aplicación:**

	- Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

```
gestor-peliculas/
│
├── index.js                # Punto de entrada de la aplicación Express
├── package.json            # Dependencias y scripts del proyecto
├── README.md
│
├── db/
│   └── conection.js        # Configuración de la conexión a la base de datos
│
├── routes/
│   └── peliculasRoutes.js  # Rutas relacionadas con las películas
│
├── views/
│   ├── buscar.ejs          # Vista para buscar películas
│   ├── editar.ejs          # Vista para editar películas
│   ├── insertar.ejs        # Vista para insertar nuevas películas
│   ├── peliculas.ejs       # Vista principal de listado de películas
│   ├── components/         # Componentes de la apliacion
│   └── layout/             # Plantillas base para las vistas
```

## Tecnologías utilizadas

- Node.js
- Express.js
- Bootstrap
- EJS (Embedded JavaScript templates)

---

Desarrollado como mini proyecto de gestión de películas.
