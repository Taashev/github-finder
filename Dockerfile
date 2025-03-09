# Используем легковесный Node.js
FROM node:22.12.0-alpine3.21

# Передаём аргумент сборки
ARG VITE_GITHUB_API_KEY

# Делаем переменную доступной в среде окружения
ENV VITE_GITHUB_API_KEY=$VITE_GITHUB_API_KEY

# Создаём рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости и собираем приложение
RUN npm i && npm run build

# Запускаем Vite-превью сервер
CMD ["npm", "run", "preview", "--", "--host"]

# Открываем порт для Vite-приложения
EXPOSE 4173
