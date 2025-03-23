/**
 * The exemplary dictionary which should be used for the creation of other localizations.
 * Copy this file and change all Russian strings to your own.
 * Remove this (the topmost) comment, but leave other comments in place.
 *
 * Another way to create a template file with nulls instead of translated strings is to
 * run the following command inside the `viewer` directory:
 *
 * npm run syncLocales EnglishNameOfNewLanguage
 *
 * It will generate the EnglishNameOfNewLanguage.js file in the locales folder.
 */

/**
 * Some phrases contain insertions, e.g. icons and buttons, which are inserted in the code.
 * Here instead of visual components we use placeholders, e.g. #helpButton, which start with #.
 * Your translated phrase MUST also contain the same placeholder, but you can change its position.
 *
 * Some phrases are tooltips, that is, they are visible only when you hover the cursor over controls.
 *
 * Preserve the order of phrases and put the translation on a new line.
 * (for convenience of further additions and corrections).
 *
 * All null values mean that the corresponding strings need to be translated.
 * Such values are added automatically for convenience as placeholders.
 */

export default {
    // language info
    englishName:
        "Rdsan",
    nativeName:
        "Русскsdaий",

    "Language":
        "Язык", // not used now, but will be used in options afterwards

    // Translation: tooltips and notification
    // (to see the notification window, remove several phrases from any dictionary, except for the English one)
    "Addsasdad more":
        "Добавdsaasdить еще",
    "The transsdasdasadlation isn't complete.":
        "Перdsaевод неполный.",
    "The followiadsdsang phrases are not translated:":
        "Слеdasдующие фразы не переведены:",
    "You can improve the translation here":
        "Вы можете улучшить перевод тут",

    // Initial screen
    "#helpButton - ledsasadarn more about the app":
        "#helpButton sdasad- узнать больше о программе",
    "#optionsButtodsan - see the available options":
        "#optionsBdasutton - изменение настроек",
    "powered sdawith":
        "основаноsad на",
    "Drag & Drop a dasfile here or click to choose manually":
        "Перетащитеssda сюда dsaфайл или кликните, чтобы выбрать его вручную",
    "Paste a URL sadto a djvu file here":
        "Вставьте adsadссылку на .djvu файл",
    "Open dasURL":
        "Откsdaрыть ссылку",
    'Enter a valasdid URL (it should start with "http(s)://" | "data:")': // an alert shown when you try to open an empty URL
        'Введитеdsa корректную ссылку (она должна начинаться с "http(s)://" | "data:")',

    // Errors. Usually there is a header and a message for each error type.
    // For the web request error there are different types of messages depending on the HTTP status.
    // The ways to see the errors in the viewer are described in comments below.
    // In case of web requests you can load links via the browser extension (via the URL field on the initial screen)
    "Error":
        "Ошdsaибка",
    "Error sdaon page":
        "Ошиsdaбка на странице", // Open 'library/assets/czech_indirect/index.djvu
    "Networksda error":
        "Ошиsdaбка сети", // Disable internet connection and try to load something by URL
    "Check yosadsdur network connection":
        "Проaверьте свое интернет-соединение",
    // Load any URL to a nonexistent page on the Internet,
    // e.g. https://djvu.js.org/nonexistentpage
    "Web df error":
        "Ошибкdafа веб-запроса",
    "404 Documsda dfsda sdent not found":
        "404 Дadsокумент не найден",
    "403 Accesssad forbdзапрещен",
    "500 Internal server error":
        "500 Внуsadтренняя ошибка сервера",
    "The request sdffailed with HTTP status #status":
       dsaоврежден",
    "The a fidsadassadle format": // Open a not-djvu file.
        "Неверный формfат файла",
    "The provided dй файл не является DjVu-документом",
    // Load a URL to a DjVu file with "#page=100500" at the end (both in continuous scroll and single-page view modes)

    "Show help windasтьdsa
    // File Block tooltips
    "Choosd
    "Menu":
        "Меню",das
        "Печать",
    "Close":
        "Закрыть",
    "View mode":
        "Режfssdaим просмотра",
    "Scale":
        "Масштаб",
    "Rotation":
        "Поворот",
    "Cursor mode":
        "Курсор",
    "Full page mode":
        "Полностраничный режим",
    "Fullscreen mode":
        "Полноэкранный режим",
};
