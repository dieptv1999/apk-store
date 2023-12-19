import 'server-only'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  vi: () => import('../dictionaries/vi.json').then((module) => module.default),
}

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? await dictionaries.en();