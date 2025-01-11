# Meme Generator

Un generador de memes interactivo que permite a los usuarios subir imágenes, agregar texto personalizado, modificar colores y posiciones, y descargar la imagen final como un meme.

## 🚀 Características

- Subir imágenes desde el dispositivo.
- Agregar múltiples textos con opciones de personalización:
  - **Color del texto**.
  - **Tamaño del texto**.
  - **Posición y rotación del texto**.
- Arrastrar y soltar texto directamente sobre la imagen.
- Descargar la imagen final como archivo **PNG**.
- Diseño **responsivo** y fácil de usar.

## ⚙️ Funcionalidad

1. **Carga de imágenes:** El usuario puede cargar una imagen para usarla como base para el meme.
2. **Agregar textos:** Se permite añadir textos con configuración personalizada (color, tamaño, posición).
3. **Edición interactiva:** Los textos pueden ser movidos y rotados directamente sobre la imagen con controles interactivos.
4. **Descarga del meme:** Una vez completado, el meme se puede descargar como archivo PNG.

## 🛠️ Tecnologías utilizadas

- **Frontend:** Angular, TypeScript, HTML, CSS (con **Tailwind CSS** para estilos).
- **Interactividad:** Interact.js para arrastrar y rotar elementos.
- **Canvas:** Para generar y exportar la imagen final.

## 📚 Stack utilizado

- **Framework:** Angular
- **Librerías principales:**
  - **Interact.js** (para la manipulación de elementos interactivos).
  - **Tailwind CSS** (para estilos y diseño).
- **Lenguajes:** TypeScript, HTML, CSS.

## 📝 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior).
- **npm** (gestor de paquetes de Node.js).

## 🔧 Pasos para ejecutar el proyecto localmente

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/AntonioTamez/meme-generator.git
   cd meme-generator

2. **Instala las dependencias:**
      ```bash
      npm install

3. **Inicia el servidor de desarrollo:**
      ```bash
      ng serve

4. **Abre la aplicación en tu navegador: Ve a http://localhost:4200.**

## 🚀 Generar build para producción

1. **Compila el proyecto para producción:**
      ```bash
      ng build --prod
2. **Archivos generados: Los archivos listos para producción estarán en la carpeta dist/.**
   
