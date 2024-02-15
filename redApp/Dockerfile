# FROM node:20.11.0
# WORKDIR /tmp/react
# COPY . .

# RUN rm -rf node_modules

# RUN npm install

# RUN npm run build

# RUN mkdir -p /var/www/html

# RUN mv dist/* /var/www/html

# VOLUME /var/www/html

# WORKDIR /

# RUN rm -rf /tmp/react


FROM node:20.11.0

# Cria o diretório /var/www/html no contêiner
RUN mkdir -p /var/www/html

# Copia o conteúdo da pasta dist da sua máquina diretamente para o volume
COPY dist/. /var/www/html

# Define o volume para /var/www/html
VOLUME /var/www/html