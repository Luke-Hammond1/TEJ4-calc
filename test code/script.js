let result = document.getElementById('result');

function getResult(num) {
  result.value += num;
}

function clearResult() {
  result.value = '';
}

function checkCode() {
  let code = result.value;
  if (code === '1234') {
    window.location.href = 'redirect.html';
  } else {
    result.value = eval(result.value);
  }
}
