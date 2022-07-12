import replace from "gulp-replace"; //Поиск и змена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения (подсказки)
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; //Проверка обновления картинок
import ifPlugin from "gulp-if"

// Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer:newer,
    if: ifPlugin
}