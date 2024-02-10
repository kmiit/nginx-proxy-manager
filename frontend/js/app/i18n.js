const Cache    = ('./cache');
// const messages = require('../i18n/messages.json');

/**
 * @param {String}  namespace
 * @param {String}  key
 * @param {Object}  [data]
 */
module.exports = function (namespace, key, data) {
    let languages = ["en", "zh"]
    let locale = Cache.locale;
    if (locale == "zh-CN") locale = "zh" 
    // check that the locale exists
    if (!languages.includes(locale)) {
        locale = 'en';
    }

    const messages = require('../i18n/messages.json')
    const lang = require(`../i18n/${locale}.json`)
    if (typeof lang[namespace] !== 'undefined' && typeof lang[namespace][key] !== 'undefined') {
        return lang[namespace][key](data);
    } else if (locale !== 'en' && typeof messages[namespace] !== 'undefined' && typeof messages[namespace][key] !== 'undefined') {
        return messages[namespace][key](data);
    }

    return '(MISSING: ' + namespace + '/' + key + ')';
};
