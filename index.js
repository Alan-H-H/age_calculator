const d = document;

const years = d.getElementById('year')
const months = d.getElementById('months')
const days = d.getElementById('days')

const yearInput = d.querySelector('.header_year')
const monthInput = d.querySelector('.header_month')
const dayInput = d.querySelector('.header_day')

const date = new Date()

const actualYear = date.getFullYear()
const actualMonth = date.getMonth() + 1
const actualDate = date.getDate()

function calculateAge (){
        //if(actualMonth < monthInput){
         //   return yearInput - 1
         //}
         const yearInputVal = Number(yearInput.value)
         const monthInputVal = Number(monthInput.value)
         const dayInputVal = Number(dayInput.value)
         
         const countEl = (actualYear*365+actualMonth*30.4+actualDate) - 
                         (yearInputVal*365+monthInputVal*30.4+dayInputVal)
                         
         const yearsEl = countEl/365
         const yearsFin = Math.round(countEl/365)
         const yearString = yearsEl.toString()
         
         const monthsEl = yearString.split(".")
         const monthsCount = Number(monthsEl[1])
         const monthString = monthsCount.toString()
         const monthSplit = monthString.split('')
         const monthsFin = 0 + Number(monthSplit[0]) 
         
         const dayEl = monthSplit[1] + monthSplit[2]
         const dayNum = Number(dayEl)
         const dayRounded = Math.floor(dayNum)
         
         if(yearInputVal > actualYear || monthInputVal > 12 || dayInputVal > 31){
           alert("Please enter valid dates.")
           years.textContent = ""
           months.textContent = ""
           days.textContent = ""
         }

        var yearText = (yearsFin > 1)
        ? "years" : "year";
        var monthText = (monthsFin > 1) 
        ? "months" : "month";
        var dayText = (dayRounded > 1)
        ? "days" : "day";

        if(monthInputVal > actualMonth){
                           years.textContent = yearsFin - 1 + yearText
                           months.textContent = monthsFin - actualMonth + monthText
                           days.textContent = dayRounded + dayText
                    if(dayRounded > 30.4){months.textContent = monthsFin + 1 + monthText
                                      days.textContent = dayRounded -30.4 + dayText}
        }
         else{years.textContent = yearsFin + yearText
              months.textContent = monthsFin + monthText
              days.textContent = dayRounded + dayText
           if(dayNum > 30.4){months.textContent = monthsFin + 1 + monthText
                             days.textContent = dayRounded -30.4 + dayText}
         }
         
}
