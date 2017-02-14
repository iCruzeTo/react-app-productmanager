import fetch from 'isomorphic-fetch';

export function fetchTime(id) {
  var retrievedObject = localStorage.getItem('hours');
  return retrievedObject;
}

export function calculateHoursWorked(data) {
  let hours = 0;
  let startTime = parseInt(data.startTime);
  let endTime = parseInt(data.endTime);
  if (startTime < endTime){
      let calculaeHoursWorked = endTime - startTime;
      localStorage.setItem('hours', calculaeHoursWorked);
  }
  if(endTime < startTime){
    let calculaeHoursWorked = startTime - endTime;
    let realHoursWorked = 24 - calculaeHoursWorked;
    localStorage.setItem('hours', realHoursWorked);
  }
}
