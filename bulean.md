Тип boolean:
Функция isLoggedIn возвращает булево значение (true или false) в зависимости от того, выполнен ли вход.
Функция checkAccess возвращает true, если доступ разрешен, и false, если доступ запрещен.
Условные конструкции:

В функции checkAccess используется if для проверки, выполнен ли вход. Если нет, доступ сразу запрещается.
Далее проверяем роль пользователя: если он администратор (admin), то доступ разрешен. Если он обычный пользователь (user), доступ также разрешен. Если роль неизвестна, доступ запрещен.