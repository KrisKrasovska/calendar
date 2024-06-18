document.addEventListener('DOMContentLoaded', () => {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let currentDate = new Date();

    const datesRow = document.getElementById('dates-row');
    const eventsRow = document.getElementById('events-row');

    function renderCalendar(date) {
        datesRow.innerHTML = '';
        eventsRow.innerHTML = '';

        for (let i = 0; i < 5; i++) {
            const currentDay = new Date(date);
            currentDay.setDate(date.getDate() + i);
            const day = currentDay.getDate();
            const dayOfWeek = daysOfWeek[currentDay.getDay()];

            const dateCol = document.createElement('div');
            dateCol.className = 'col date py-2';
            dateCol.innerHTML = `
                <div class="number ${i === 2 ? 'bg-orange-custom' : ''}">${day}</div>
                <div class="day ${i === 2 ? 'bg-orange-custom' : ''}">${dayOfWeek}</div>
            `;
            datesRow.appendChild(dateCol);
        }

        for (let j = 0; j < 10; j++) {
            const eventRow = document.createElement('div');
            eventRow.className = 'row event-row';

            for (let k = 0; k < 5; k++) {
                const eventCol = document.createElement('div');
                eventCol.className = 'col border-right event py-3';
                if (j === 0 && k === 0) {
                    eventCol.innerHTML = `
                        <div class="event-card webinar">
                            <h6>Ораторское мастерство. Занятие 6. Харизма</h6>
                            <p>Завершено</p>
                        </div>
                    `;
                } else if (j === 1 && k === 1) {
                    eventCol.innerHTML = `
                        <div class="event-card training">
                            <h6>Эмоциональный интеллект. Модуль 2</h6>
                            <p>Завершено</p>
                        </div>
                    `;
                } else if (j === 7 && k === 3) {
                    eventCol.innerHTML = `
                        <div class="event-card webinar">
                            <h6>Ораторское мастерство. Занятие 7</h6>
                            <p>Проводится</p>
                            <p>Вы входите в состав участников</p>
                        </div>
                    `;
                } else if (j === 9 && k === 4) {
                    eventCol.innerHTML = `
                        <div class="event-card training">
                            <h6>Литературный квиз</h6>
                            <p>Планируется</p>
                            <p>Вы входите в состав участников</p>
                        </div>
                    `;
                }
                eventRow.appendChild(eventCol);
            }
            eventsRow.appendChild(eventRow);
        }
    }

    document.getElementById('prev-day').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        renderCalendar(currentDate);
    });

    document.getElementById('next-day').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});