const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

// Токен вашего бота из BotFather
const BOT_TOKEN = process.env.BOT_TOKEN || "";

// Настройки сервера Express
const PORT = process.env.PORT || 3000;
const app = express();

// Создание экземпляра Telegram-бота
const bot = new TelegramBot(BOT_TOKEN, { polling: false }); // Используем webhooks, не polling

// Настройка Webhook для приема уведомлений от Telegram
let serverUrl = process.env.PROJECT_DOMAIN ? `https://${process.env.PROJECT_DOMAIN}.netlify.app/bot/${BOT_TOKEN}` : '';
if (serverUrl) {
  bot.setWebHook(serverUrl);
} else {
  throw new Error("PROJECT_DOMAIN not found. Please check your environment variables or use polling mode.");
}

// Обработка входящих сообщений
bot.on("message", async (msg) => {
  if (msg.text === '/start') {
    await bot.sendMessage(msg.chat.id, 'Привет! Я твой Telegram-бот.');
  } else {
    await bot.sendMessage(msg.chat.id, 'Я тебя услышал!');
  }
});

// Веб-хук для Telegram
app.post(`/bot/${BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.end();
});

// Старт сервера
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
