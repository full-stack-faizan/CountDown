const MonthsArray= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const DayArray= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

let CountDownBox= document.querySelectorAll('.c')
let countdiv =document.querySelectorAll('.count')

let countdisplay= document.querySelector('.countdown')




let date = new Date()
let minutes = date.getMinutes()
let seconds= date.getSeconds()

let hours = date.getHours()

let day = date.getUTCDay()

let GetDay = date.getDate()



let DayName= DayArray[day]

let month = date.getMonth()

let CompleteMonth= MonthsArray[month]

let year = date.getUTCFullYear()


// console.log(`The full Date is: ${year} : month:${CompleteMonth} ${month} : Day: ${GetDay} ${DayName} : Hour ${hours} MIn: ${minutes} Sec:${seconds}`)

let GetFutureDate = new Date(year,month,GetDay+2,13,33,30)
// console.log(date)
// console.log(GetFutureDate)
console.log(GetFutureDate.getDate())
let fyear= GetFutureDate.getFullYear()
let fmonth= GetFutureDate.getMonth()
let fhour = GetFutureDate.getHours()
let fmins = GetFutureDate.getMinutes()
let nmon = MonthsArray[fmonth]

let s = document.getElementById('s')
 s.innerHTML = `${fyear} ${nmon} ${fmonth} ${fhour}:${fmins} AM`
const UpdateFunction=()=>{
  let GetFullTimeInMiliseconds = new Date()
  let TodaytimeinMilis = GetFullTimeInMiliseconds.getTime()
  // console.log(`Today Miliseconds is: ${TodaytimeinMilis}`)
  
  let futuretimeinMilis = GetFutureDate.getTime()
  // console.log(`Future Milisecond is: ${futuretimeinMilis}`)
  let finalMilisecons=  futuretimeinMilis- TodaytimeinMilis
  //  console.log(`The FinalMiliseconds: is ${finalMilisecons}`)
  //  console.log(`------------------`)
  
  let OneDayMs = 24*60*60*1000
  let OneHourMs = 60*60*1000
  let OneMinuteMs = 60*1000
  let OneSecondMs = 1000

  let FinalDays = Math.floor(finalMilisecons / OneDayMs)
  
  // console.log(`Days is: ${FinalDays}`)
  
  let FinalHours= Math.floor((finalMilisecons % OneDayMs) / OneHourMs)
  // console.log(`Hour is: ${FinalHours}`)
  
  let FinalMinutes = Math.floor((finalMilisecons % OneHourMs) /OneMinuteMs )
    // console.log(`Minutes is: ${FinalMinutes}`)
  let FinalSeconds = Math.floor((finalMilisecons % OneMinuteMs) /OneSecondMs)
    // console.log(`Seconds is: ${FinalSeconds}`)
    let Array =[FinalDays,FinalHours,FinalMinutes,FinalSeconds]
   

    CountDownBox.forEach((e,i)=>{
          e.textContent = Array[i]
          
    })
    


countdiv.forEach((e)=>{
  if(finalMilisecons<=0){
    clearInterval(countdown)
    e.classList.toggle('count-none')
    countdisplay.innerHTML= `<h3 class="strom" >Danger Storm Reached in City!!!!!</h3>`
    }
})




}

 const countdown= setInterval(UpdateFunction,1000)
 UpdateFunction()











