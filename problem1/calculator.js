function calculator(data) {
  let sort_data = data.sort(function (a, b) {
    return +a - +b;
  });
  unique_array = [...new Set(sort_data)];
  return unique_array;
}

module.exports = calculator;