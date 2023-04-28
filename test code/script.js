let result = document.getElementById('result');

function getResult(num) {
  result.value += num;
  if (code = result.value === '111') {
    window.location.href = 'redirect.html';
  }
}

function clearResult() {
  result.value = '';
}

function checkCode() {
  let code = result.value;
  if (code === '110+1') {
    window.location.href = 'redirect.html'; 
  } else if (eval(result.value) === 111) {
    window.location.href = 'redirect.html';
  } else {
    result.value = eval(result.value);
  }
}



const checkbox = 

function checkfor111() {





}
