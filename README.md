                              Comision 21523 A
Proyecto Final Lenguajes de programación 1 EPICA SAPEM Full Stack Tramo 2


Implementando:
Node.js con Express y Sequelize para interactuar con MySQL y EJS. Uso de HTML- CSS- BOOSTRAP

# Argentina Programa 4.0


## Servidor Express

![Node Express](https://somospnt.com/images/blog/zojuy79lo3fn3qdt7g6p.png)

Pasos de Instalación y Ejecución

Instalar las dependencias 

 . Express (Framework web de Node.js.)

 . Cors (Middleware para habilitar el acceso a recursos en diferentes dominios (CORS))

 . Dotenv (opcional. Para cargar variables de entorno desde un archivo `.env`.)

 . Helmet

 . Morgan (Middleware para registrar solicitudes HTTP.)

 . EJS

 . Sequelize (ORM (Object-Relational Mapping) para interactuar con la base de datos.) 

 . mysql2 ( Controlador MySQL para Sequelize.)

 . Configurar los Middlewares necesarios.

 . Configurar la conexión a la base de datos utilizando Sequelize.


Siga estos pasos para ejecutar el proyecto en su máquina local:

Clonar el repositorio o descarga el ZIP.

Instalar las dependencias con el siguiente comando:

   npm i
Configurar la base de datos MySQL:

Cree una base de datos llamada forodb

Agrege los siguientes datos en el archivo .example.env y cambie el nombre a .env:

   PORT=4000
   HOST_DB=localhost
   DIALECT_DB=mysql
   USER_DB=root
   PASS_DB=''
   NAME_DB=forodb
Crear la tabla de la base de datos para los posteos con el nombre "publicaciones" con los siguientes datos para las columnas:
  publicaciones / utf8_general_ci
  id = int
  titulo = varchar 255
  detalle = text
  url_imagen = varchar 255
  fecha_publicacion = date   
Ejecute node app.js y acceda de manera predeterminada a la aplicación en su navegador web en el PORT=6060 .env : http://localhost:4000
   
   
   GIT    
   
  .Elimina el archivo ".git" de la carpeta donde clonaste el repositorio.
  
  .En la terminal de tu editor de codigo utiliza el comando "git init" (se crea automaticamente la carpeta ".git")

  .Se sigue con los comandos correspondientes a GIT


  <<<<<<<< NPM >>>>>>>>
  
  .En la terminal ingresar el comando "npm i" donde automaticamente se instalaran las dependencias correspondientes.


  <<<<<<<< DATA BASE >>>>>>>>

  .Conectar XAMPP
  .Abrir PHPMyadmin en el navegador
  .Crear el archivo correspondiente con sus celdas (en este caso son 5: Id, titulo, descripcion, fecha, url_imagen)
  .Desde tu editor de codigo ir a la carpeta "database.js" y cambiar el nombre del archivo por el que creaste

  <<<<<< FINAL>>>>>>
  
  -En la terminal de tu editor de codigo poner "npm run dev" lo cual si todo esta OK te devolvera el host del servidor.
  -Copiar el servidor y abrir en navegador.