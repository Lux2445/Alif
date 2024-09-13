function userSettings() {
  // Создаю переменные для хранения настроек пользователя
  var theme = 'light';  // 'var' позволяет менять тему и она доступна везде в этой функции
  let language = 'English';  // 'let' используется для хранения языка интерфейса, его можно менять внутри этой функции
  const maxNotifications = 10;  // 'const' определяет максимальное количество уведомлений, это значение не изменяется

  // Функция для смены темы
  function setTheme(newTheme) {
    if (newTheme) {
      theme = newTheme;  // Меняю тему, так как 'var' позволяет перезаписывать значение
      console.log(`Тема обновлена на: ${theme}`);
    } else {
      console.log(`Тема осталась: ${theme}`);
    }
  }

  // Функция для смены языка интерфейса
  function setLanguage(newLanguage) {
    if (newLanguage) {
      language = newLanguage;  // Обновляю язык интерфейса, так как 'let' позволяет менять значение
      console.log(`Язык интерфейса обновлен на: ${language}`);
    } else {
      console.log(`Язык интерфейса остался: ${language}`);
    }
  }

  // Функция для отображения текущих настроек
  function displaySettings() {
    console.log(`Текущие настройки пользователя:`);
    console.log(`Тема: ${theme}`);  // Отображаю текущую тему
    console.log(`Язык интерфейса: ${language}`);  // Отображаю текущий язык
    console.log(`Максимальное количество уведомлений: ${maxNotifications}`);  // Отображаю максимальное количество уведомлений
  }

  // Возвращаю функции, чтобы с ними можно было работать в других частях программы
  return {
    setTheme,
    setLanguage,
    displaySettings,
  };
}

// Инициализирую настройки пользователя для дальнейшего использования
const settingsManager = userSettings();

// Отображаю все настройки по умолчанию
settingsManager.displaySettings();  // Показываю текущие настройки

// Обновляю тему и язык интерфейса
settingsManager.setTheme('dark');   // Устанавливаю тёмную тему
settingsManager.setLanguage('Russian');  // Устанавливаю русский язык интерфейса

// Снова отображаю настройки, чтобы убедиться, что они изменились
settingsManager.displaySettings();  // Проверяю обновленные настройки
