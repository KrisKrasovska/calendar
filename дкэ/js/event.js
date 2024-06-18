async function getEvents() {
  const url = "https://edu.soglasie.ru:443/oapi/CustomDKEEventsAPI/GetEvents";
  const headers = {
    Accept: "application/json, application/json",
    "x-app-id": "7024984577114365647",
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    periodStart: "",
    periodEnd: "",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getEvents();

function createCard() {
  return `  <!-- карточка мероприятия -->
    <div class="event">
      <div>
        <p class="event__title">Название</p>
        <p class="event__status">статус</p>
        <p class="event__type">
          <span class="event__img"
            ><img
              src="./images/trening.svg"
              alt="event"
              width="9"
              height="9" /></span
          ><span>тип</span>
        </p>
      </div>
      <p class="event__add">Вы входите в состав участников</p>
    </div>`;
}
