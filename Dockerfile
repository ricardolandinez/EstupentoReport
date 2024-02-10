FROM node:alpine

# Declara argumentos que se pueden pasar en tiempo de construcción para configurar la URI de conexión a MongoDB y credenciales SMTP.
ARG MONGO_CONNECTION_URI
ARG SMTP_USER
ARG SMTP_PASSWORD

# Establece variables de entorno dentro del contenedor a partir de los argumentos pasados.
ENV MONGO_CONNECTION_URI=${MONGO_CONNECTION_URI}
ENV SMTP_USER=${SMTP_USER}
ENV SMTP_PASSWORD=${SMTP_PASSWORD}

# Establece el directorio de trabajo dentro del contenedor donde se ejecutarán los comandos siguientes.
WORKDIR /app

# Instala dcron, bash, y tzdata en la imagen para habilitar tareas programadas, scripts bash, y configuración de zona horaria, respectivamente.
RUN apk update && apk add --no-cache dcron bash tzdata

# Establece la zona horaria del contenedor.
ENV TZ=America/Bogota

# Copia el archivo package.json al directorio de trabajo en el contenedor.
COPY package.json .

# Ejecuta npm install para instalar las dependencias definidas en package.json.
RUN npm i

# Crea una tarea cron para ejecutar un script Node.js al inicio de cada mes.
RUN echo "0 0 1 * * /usr/local/bin/node /app/main.js" > /var/spool/cron/crontabs/root

# Crea un directorio para almacenar los logs generados por la aplicación.
RUN mkdir ./logs

# Copia el código fuente de la aplicación al directorio de trabajo en el contenedor.
COPY ./src/. .

# Copia el script de entrada al directorio de trabajo en el contenedor.
COPY entrypoint.sh .

# Otorga permisos de ejecución al script de entrada.
RUN chmod 755 entrypoint.sh

# Configura el comando por defecto para ejecutar el script de entrada cuando el contenedor se inicie.
CMD ["/app/entrypoint.sh"]
