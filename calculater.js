function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
  }
  
  function clearAll() {
    document.getElementById("result").value = "";
  }
  
  function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      const result = document.getElementById("result");
      result.value = eval(result.value);
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }