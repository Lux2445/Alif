// Глобальные переменные
var theme = 'light';  // Переменная для хранения темы оформления, её можно менять
let language = 'English';  // Переменная для хранения языка интерфейса, её можно менять
const maxNotifications = 10;  // Константа для максимального количества уведомлений, это значение не изменяется

// Функция для обновления темы оформления
function updateTheme(newTheme) {
  if (newTheme) {
    theme = newTheme;  // Обновляю тему
    console.log(`Тема изменена на: ${theme}`);
  } else {
    console.log(`Тема осталась: ${theme}`);
  }
}

// Функция для обновления языка интерфейса
function updateLanguage(newLanguage) {
  if (newLanguage) {
    language = newLanguage;  // Обновляю язык интерфейса
    console.log(`Язык интерфейса изменён на: ${language}`);
  } else {
    console.log(`Язык интерфейса остался: ${language}`);
  }
}

// Функция для отображения текущих настроек
const displaySettings = function() {
  console.log(`Текущие настройки:`);
  console.log(`Тема: ${theme}`);  // Вывод текущей темы оформления
  console.log(`Язык интерфейса: ${language}`);  // Вывод текущего языка интерфейса
  console.log(`Максимальное количество уведомлений: ${maxNotifications}`);  // Вывод максимального числа уведомлений
};

// Отображаю начальные настройки
displaySettings();

// Обновляю тему и язык интерфейса
updateTheme('dark');   // Меняю тему на 'dark'
updateLanguage('Russian');  // Меняю язык интерфейса на 'Russian'

// Отображаю обновленные настройки
displaySettings();
