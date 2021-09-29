# ExamenPite
Instalar paquetes necesarios para la ejecucion:

FrontEnd

Angular : npm install -g @angular/cli
NodeJS : https://nodejs.org/es/
Visual Studio Code
Tener cuidado en el Archivo juguete.service.ts, Especifica la ruta y el puerto del back end al momento de ejecutarse en el IIS. Modificarlo en caso de asignarle otro puerto a la API.

BackEnd

Visual Studio + .NET 5.0
Database
MySQLWorbench (Utilize MySQL por que no me especificaron una base de datos).

Aqui tienen 2 opciones
- Importar la base de datos directamente
- Crear la migracion en la solucion de .NET Core y que cree la base de datos automaticamente el EntityFrameWork

Pasos de ejecucion de cada herramienta:

FrontEnd: ng serve --o para correr el proyecto del FrontEnd
BackEnd: Ejecutar Solucion ExamenPite.sln en IIS y verificar la URL para modificar el archivo juguete.service.ts en caso de ser necesario.
