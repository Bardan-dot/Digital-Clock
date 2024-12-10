function updateClock() {
  //date object
  const date = new Date();

  //date and days 
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];


  const Din=days[date.getDay()];
  const gate=date.getDate();
  const mahina=months[date.getMonth()];

  const hour=date.getHours();
  const minute=date.getMinutes();
  const second=date.getSeconds();

  //showing data
  const outputtime=document.getElementById("digital-time");
  const outputdate=document.getElementById("date-display");

  outputtime.textContent =`${hour}:${minute}:${second}`;
  outputdate.textContent =`${Din},${mahina} ${gate}`;
}
//reupdating time
setInterval(updateClock,1000);

//initialize
updateClock();
