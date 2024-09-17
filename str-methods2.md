findSubstring(str, substring):
Этот метод использует indexOf() для поиска первого вхождения подстроки в строке. Метод возвращает индекс, с которого начинается подстрока. Если подстрока не найдена, результат будет -1.
Пример: "Hello, world!".indexOf("world") вернет 7, так как "world" начинается с 7-го индекса.

extractSubstring(str, start, end):
Метод slice() извлекает часть строки, начиная с индекса start и до индекса end (не включая end). Если end не указан, строка извлекается до конца.
Пример: "Hello, world!".slice(7, 12) вернет "world", так как это часть строки от индекса 7 до 11 включительно.

checkSubstring(str, substring):
Этот метод использует includes() для проверки, содержится ли указанная подстрока в строке. Возвращает true, если подстрока найдена, иначе — false.
Пример: "Hello, world!".includes("Hello") вернет true, потому что подстрока "Hello" есть в строке.

formatString(str, searchValue, replaceValue):
Метод replace() заменяет первое вхождение подстроки searchValue на подстроку replaceValue. Если searchValue не найден, строка остается неизменной.
Пример: "Hello, world!".replace("world", "JavaScript") вернет "Hello, JavaScript!", так как слово "world" заменяется на "JavaScript".