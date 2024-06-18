

function getEvents(periodStart,periodEnd){
  const xhr = new XMLHttpRequest();
  // let str = "https://edu.soglasie.ru^443/oapi/CustomDKEEventsAPI/GetEvents"
  
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
    if (xhr.readyState == 4 && xhr.status == 201) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
  xhr.send()
}

function getEventInfo(eventID){
//
const xhr = new XMLHttpRequest()

xhr.open("POST", "https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEventinfo");


xhr.setRequestHeader("Content-Type", "application/json")
xhr.setRequestHeader("Accept", "application/json, pplication/json")
xhr.setRequestHeader("x-app-id", "7024984577114365647")
  //https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEvents
const body = JSON.stringify({

  eventID: eventID
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send()
}
console.log(getEvents("",""))
console.log(getEvents(new Date("2024-02-06"), new Date("2024-06-18")))