function convertToBooleanUsingFunction(value) {
    return Boolean(value);
    }

function convertToBooleanUsingDoubleNegation(value) {
    return !!value;
    }

  const testValues = ["", "yosin", 0, 123, -123, null, undefined, {}, [], NaN, Infinity, false, true];

  testValues.forEach(value => {
    console.log(`Значение: ${value} (тип: ${typeof value})`);
    console.log(`Результат через Boolean(): ${convertToBooleanUsingFunction(value)}`);
    console.log(`Результат через !!: ${convertToBooleanUsingDoubleNegation(value)}`);
    console.log('--------------------------');
  });
  