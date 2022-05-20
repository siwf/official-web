const languageKey = 'byn'
import Cookies from 'js-cookie'

export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = language => Cookies.set(languageKey, language)
