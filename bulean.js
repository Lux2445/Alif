function isLoggedIn(userStatus) {
    return userStatus === 'loggedIn';
  }

  function checkAccess(role, userStatus) {
    if (!isLoggedIn(userStatus)) {
      console.log("Доступ запрещен: Пользователь не выполнил вход");
      return false;
    }
  

    if (role === 'admin') {
      console.log("Доступ разрешен: Администратор");
      return true;
    } else if (role === 'user') {
      console.log("Доступ разрешен: Обычный пользователь");
      return true;
    } else {
      console.log("Доступ запрещен: Неизвестная роль");
      return false;
    }
  }
  

  const role = 'admin';
  const userStatus = 'loggedIn'; 
  
  const accessGranted = checkAccess(role, userStatus);
  console.log(`Результат доступа: ${accessGranted}`);
  