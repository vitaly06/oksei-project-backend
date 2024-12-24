# Указываем базовый образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем все файлы проекта
COPY . .

# Устанавливаем необходимые инструменты для сборки
RUN yarn global add @nestjs/cli

# Компилируем TypeScript в JavaScript
RUN yarn build

# Указываем порт, который будет использоваться приложением
EXPOSE 4200

# Запускаем приложение
CMD ["yarn", "start:dev"]