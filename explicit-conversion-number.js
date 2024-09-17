function convertToNumberUsingNumber(value) {
    return Number(value);
  }

  function convertToIntegerUsingParseInt(value) {
    return parseInt(value, 10);
  }
 
  function convertToFloatUsingParseFloat(value) {
    return parseFloat(value);
  }

  function convertToNumberUsingUnaryPlus(value) {
    return +value;
  }

  const testValues = [ "123", "123.45", "123abc", "abc123", true, false, null, undefined, "", "   42   ", "0", NaN, Infinity];
  

  testValues.forEach(value => {
    console.log(`Значение: "${value}" (тип: ${typeof value})`);
    console.log(`Результат через Number(): ${convertToNumberUsingNumber(value)}`);
    console.log(`Результат через parseInt(): ${convertToIntegerUsingParseInt(value)}`);
    console.log(`Результат через parseFloat(): ${convertToFloatUsingParseFloat(value)}`);
    console.log(`Результат через унарный плюс: ${convertToNumberUsingUnaryPlus(value)}`);
    console.log('--------------------------');
  });
  