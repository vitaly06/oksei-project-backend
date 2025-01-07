# Используем официальный образ Node.js
FROM node:18


# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./
COPY .env ./

# Устанавливаем зависимости
RUN yarn install

# Копируем все файлы приложения
COPY . .

# Генерируем Prisma Client
RUN npx prisma generate

# Запускаем миграции и приложение
CMD ["yarn", "start:migrate:prod"]

# Открываем порт, на котором будет работать приложение
EXPOSE 4200