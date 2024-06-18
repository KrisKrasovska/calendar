

function getEvents(periodStart,periodEnd){
  const xhr = new XMLHttpRequest();
  // let str = "https://edu.soglasie.ru^443/oapi/CustomDKEEventsAPI/GetEvents"
  periodStart = new Date(periodStart)
  periodEnd= new Date(periodEnd)
  xhr.open("POST", "https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEvents");
  

  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("Accept", "application/json, pplication/json")
  xhr.setRequestHeader("x-app-id", "7024984577114365647")
    //https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEvents
  const body = JSON.stringify({

    periodStart: periodStart,
    periodEnd: periodEnd
  });
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.responseText));
      return xhr.responseText
    } else {
      return false
    }
  };
  xhr.send(body)
}

function getEventInfo(eventID){
//
const xhr = new XMLHttpRequest()

xhr.open("POST", "https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEventInfo");


xhr.setRequestHeader("Content-Type", "application/json")
xhr.setRequestHeader("Accept", "application/json, pplication/json")
xhr.setRequestHeader("x-app-id", "7024984577114365647")
  //https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEvents
const body = JSON.stringify({

  eventID: eventID
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(JSON.parse(xhr.responseText));
    return xhr.responseText
  } else {
    return false
  }
};
xhr.send(body)
}

console.log(getEvents("2024-02-06","2024-06-18"))
console.log(getEventInfo("5433345674"))