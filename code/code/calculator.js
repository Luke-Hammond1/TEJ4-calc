let result = '';

function clearResult() {
	result = '';
	document.getElementById('result').value = result;
}

function backspace() {
	result = result.slice(0, -1);
	document.getElementById('result').value = result;
}

function append(value) {
	result += value;
	document.getElementById('result').value = result;
}

function calculate() {
	if (result === '1234') {
		window.location.href = 'https://www.example.com';
	} else {
		document.getElementById('result').value = 'Error';
	}
    
    try {
		result = eval(result);
		document.getElementById('result').value = result;
	} catch (e) {
		document.getElementById('result').value = 'Error';
	}

    
}


