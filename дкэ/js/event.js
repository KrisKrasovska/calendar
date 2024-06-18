function createCard(title, status, type, isIncluded) {
  const img =
    type === "webinar" ? "./images/vebinar.svg" : "./images/trening.svg";
  const classEvent = type === "webinar" ? "event--webinar" : "event--trening";
  const classImg =
    type === "webinar" ? "event__img--webinar" : "event__img--trening";
  return `<div class=${classEvent}>
      <div>
        <p class="event__title">${title}</p>
        <p class="event__status">${status}</p>
        <p class="event__type">
          <span class=${classImg}
            ><img
              src=${img}
              alt="event"
              width="9"
              height="9" />
				  </span>
				  <span>${type === "webinar" ? "Вебинар" : "Тренинг"} </span>
        </p>
      </div>
      ${
        isIncluded
          ? '<p class="event__add">Вы входите в состав участников</p>'
          : ""
      }
    </div>`;
}
