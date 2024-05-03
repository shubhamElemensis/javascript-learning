const clock = () => {
  const clk = document.querySelector("#clock");
  const date = new Date()
  clk.innerHTML = date.toLocaleTimeString()
};

setInterval(clock,1000)