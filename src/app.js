const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

// Токен вашего бота из BotFather
const TOKEN = process.env.BOT_TOKEN || "";

// Настройки сервера Express
const PORT = process.env.PORT || 3000;
const app = express();

// Создание экземпляра Telegram-бота
const bot = new TelegramBot(TOKEN);

// Обработчик старта бота
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, "Привет! Добро пожаловать в Fura_bot!");
});

// Запуск сервера
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

console.log("Telegram bot is ready.");
