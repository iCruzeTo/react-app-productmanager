import fetch from 'isomorphic-fetch';

export function fetchUser(id) {
  var retrievedObject = localStorage.getItem('data');
  return retrievedObject;
}

export function fetchTime(){
  var getTime = localStorage.getItem('hours');
  console.log(getTime);
  if(getTime > 0 ){
    localStorage.removeItem('hours');
  }
}

export function createProduct(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
