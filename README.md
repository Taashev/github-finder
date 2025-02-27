# GitHub Finder

## Описание проекта

**GitHub Finder** – это веб-приложение для поиска репозиториев пользователей GitHub. Позволяет находить и просматривать информацию о репозиториях, поддерживает бесконечную прокрутку и обработку ошибок.

## Основной функционал

- **Поиск репозиториев** по имени пользователя с использованием GitHub API.
- **Debounce** для оптимизированных запросов к API.
- **Отображение найденных репозиториев** в виде карточек.
- **Бесконечная прокрутка** (Infinite Scroll) для подгрузки данных.
- **Централизованная обработка ошибок**, включая типизацию и обработку через middleware.
- **Поддержка авторизованных запросов** (при наличии API-ключа).

## Технологический стек

- **Frontend:** React, Redux Toolkit, TypeScript, MUI
- **Сборка:** Vite

## Установка и запуск

### 1. Клонирование репозитория

```sh
git clone https://github.com/Taashev/github-finder.git
```

### 2. Установка зависимостей

```sh
npm install
```

### 3. Настройка переменных окружения (опционально)

Для выполнения авторизованных запросов к API GitHub, создайте файл `.env` в корневой папке проекта и укажите в нем:

```sh
VITE_GITHUB_API_KEY=your_github_personal_access_token
```

### 4. Запуск проекта в режиме разработки

```sh
npm run dev
```

## Структура проекта

```
/src
  ├── components      # UI-компоненты
  ├── hooks           # Кастомные хуки (debounce, infinite scroll)
  ├── pages           # Страницы приложения
  ├── service         # Redux store, middleware, API-запросы
  ├── utils           # Вспомогательные утилиты (например, работа с датами)
  ├── theme           # Кастомизация MUI темы
  ├── types           # Глобальные типы
  ├── errors          # Классы для работы с ошибками (AppError, HttpError)
```

## Ключевые технические решения

### Поиск с debounce

Используется кастомный хук `useDebounce`, который предотвращает избыточные запросы к API.

### Бесконечная прокрутка

Реализована через `IntersectionObserver` и кастомный хук `useInfiniteScroll`, который позволяет динамически загружать новые страницы данных.

### Глобальная обработка ошибок

Используется базовый класс ошибок и централизованный middleware в Redux для их обработки. Все ошибки типизированы, что позволяет правильно обрабатывать их в UI.

## Дополнительные возможности

- **Фабрика уведомлений** – гибкая система нотификаций, позволяющая легко создавать и управлять уведомлениями разного типа (ошибки, предупреждения, успех).
- **Адаптивная верстка** – интерфейс корректно отображается на экранах от 320px до 1920px.

## Возможные улучшения

- Добавить тесты (Jest, React Testing Library).
- Улучшить UI и UX.
- Поддержка сортировки и фильтрации репозиториев.
- Реализация Docker-контейнера для развертывания.

## Как получить API-ключ (Personal Access Token, PAT) для GitHub?

Шаг 1: Перейди в настройки GitHub\
1 Открой GitHub Developer Settings.\
2 Выбери “Personal access tokens” → “Fine-grained tokens”.\
3 Нажми “Generate new token”.

Шаг 2: Выбери доступы для ключа\
• Если нужно только публичные данные, выбери:\
• ✅ public_repo (чтение публичных репозиториев)\
• Если нужен доступ к приватным репозиториям, добавь:\
• ✅ repo (доступ ко всем репозиториям)\
• Если API используется для авторизации, добавь:\
• ✅ user (чтение данных профиля)

Шаг 3: Сгенерируй токен и сохрани его\
• Скопируй токен после создания (GitHub не покажет его снова!).\
• Не храни токен в коде! Используй .env.

---

Разработано с ❤️ специально для тестового задания.
