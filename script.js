    let getSecond = document.querySelector(".cekond")
    let getMin = document.querySelector(".min")

    let getTens = document.querySelector(".tems")

    let BtnStart = document.querySelector(".btn-start")
    let BtnStop = document.querySelector(".btn-stop")
    let BtnReset = document.querySelector(".btn-reset")

    let tens = 00;
    let min = 00;
    let second = 00;
    let interval


    BtnStart.addEventListener("click", ()=>{
        clearInterval(interval)
        interval = setInterval(StartTimes, 10)
              

    })
    BtnStop.addEventListener("click", ()=>{
         clearInterval(interval)
    })

    BtnReset.addEventListener("click", ()=>{
        clearInterval(interval);
        tens = 0;
        min = 0;
        second = 0;
        getTens.innerHTML = "00";
        getSecond.innerHTML = "00";
        getMin.innerHTML = "00";
    })
    // BtnStart.addEventListener('click',StartTimes)

    function StartTimes () {
        tens++
       if (tens <=9){
        getTens.innerHTML = "0" + tens
       }
       if(tens>9){
        getTens.innerHTML = tens
       }
       if (tens >99){
        second++
        getSecond.innerHTML = "0" + second
        tens = 0
        getTens.innerHTML = "0" +0
       }
       if(second > 9){
        getSecond.innerHTML = second
       }
       if(second > 59){
        min++
        getMin.innerHTML = "0"+min
        second=0
        getSecond.innerHTML = " 0"+0

       }
       if(min > 9){
        getMin.innerHTML = min
       }
    }



