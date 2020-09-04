// Your code here
let createEmployeeRecord = function(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2], 
    payPerHour: array[3],
    timeInEvents: [], 
    timeOutEvents: []
  }
}; //input is an array, and output is an object 



let createEmployeeRecords = function(arrayOfArrays) {
  return arrayOfArrays.map(array => createEmployeeRecord(array))
}; //input is an array of arrays, and output is an array of objects

let createTimeInEvent = function(employeeObject, dateStamp) {
  let [date, hour] = dateStamp.split(" ")
  employeeObject.timeInEvents.push({
    type: "TimeIn", 
    hour: parseInt(hour, 10),
    date: date
  })
  return employeeObject;
  
}

let createTimeOutEvent = function(employeeObject, dateStamp) {
  let [date, hour] = dateStamp.split(" ")
  //"YYYY-MM-DD HHMM"
  employeeObject.timeOutEvents.push({
    type: "TimeOut", 
    hour: parseInt(hour, 10),
    date: date
  })
  return employeeObject;
  
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}


let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * (employee.payPerHour)
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employeeObject) {
  let eligibleDates = employeeObject.timeInEvents.map(function(event))
  employeeObject.timeInEvents.map(event => event.date)
  
}


