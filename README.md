## Установка

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/Who1s1t/Company_Dashboard.git
    cd Company_Dashboard
    ```

2. Установите зависимостей для клиентской и серверной частей:

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Инициализируйте базу данных:

    Выполните SQL-скрипт для создания и заполнения базы данных.

    ```bash
    psql -U <username> -f init-db.sql
    ```

    Убедитесь, что база данных была успешно создана и заполнена.

4. Настройте переменные окружения:

    В папке `/server` находится файл `.env`. Откройте его и заполните необходимыми значениями.

## Запуск

1. Запуск серверной части:

    ```bash
    cd server
    npm start
    ```

2. Запуск клиентской части:

    ```bash
    cd ../client
    npm start
    ```

3. Откройте браузер и перейдите по адресу [http://localhost:3001](http://localhost:3001).
