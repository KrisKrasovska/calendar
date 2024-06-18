/*
функция получает в себя список мероприятий - list, название типа мероприятия - title
статус включения пользователя в мероприятие -  isIncluded, статус мероприятия - statusTitle
*/
const filter = (list, title, isIncluded, statusTitle) => {
   let result = []
    if (title === 'Вебинар') {
        result = list.filter(obj => {
            obj.type.title === 'Вебинар'
        })
    }
    if (title === 'Тренинг') {
        result = list.filter(obj => {
            obj.type.title === 'Тренинг'
        })
    }
   if (statusTitle === 'Планируется') {
        result = list.filter(obj => {
            obj.status.title === 'Планируется'
        })
   }
   if (statusTitle === 'Завершено') {
        result = list.filter(obj => {
            obj.status.title === 'Завершено'
        })
    }
    if (statusTitle === 'Проводится') {
        result = list.filter(obj => {
            obj.status.title === 'Проводится'
        })
    }
    if (isIncluded) {
        result = list.filter(obj => {
            obj.isIncluded === true
        })
    }
    if (!isIncluded) {
        result = list.filter(obj => {
            obj.isIncluded === false
        })
    }
    return result;
}

