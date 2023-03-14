const fibonacci = () => {
    let a = 0;
    let b = 1;
    let n = 0;
    const p = document.getElementById("fibonacci");
    const interval = setInterval(() => {
      p.textContent = n;
      n = a + b;
      a = b;
      b = n;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  };

  document.getElementById("start").addEventListener("click", fibonacci);