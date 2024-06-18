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
