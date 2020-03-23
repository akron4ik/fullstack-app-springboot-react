# front

# Шаг 1. Скачиваем и устанавливаем NodeJS.
FROM node:alpine

# Шаг 2.
LABEL maintainer="aronov.ak@gmail.com"

# Шаг 3. Задаём директорию, в которой будет лежать наше приложение в виртуальном Линуксе.
WORKDIR /app/

# Шаг 4. Открываем для контейнера порт 3000
EXPOSE 3000

# Шаг 5. Копируем данные из образа в рабочую папку.
COPY ./ ./

ARG AQUAONE_API
ENV AQUAONE_API=${AQUAONE_API}

# Щаг 6. Запускаем менеджер пакетов NodeJS.
RUN yarn install

RUN yarn build

# Шаг 7. Запускаем приложение.
CMD ["yarn", "start"]