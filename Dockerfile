# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все файлы приложения
COPY . .

# Генерируем Prisma Client
RUN npx prisma generate

# Запускаем миграции и приложение
CMD ["npm", "run", "start:migrate:prod"]

# Открываем порт, на котором будет работать приложение
EXPOSE 4200