export const normalizeKeys = (items = [], replacementKeys = {}) => {
  return Object.keys(items).map(key => {
    const newKey = replacementKeys[key] || key
    return {
      [newKey]: items[key]
    }
  }).reduce((a, b) => Object.assign({}, a, b))
}

export const normalizeTags = (items = [], itemSlug = '', itemName = '') => {
  return items.map(item => {
    return {
      slug: item[`${itemSlug}`],
      title: item[`${itemName}`]
    }
  }).sort((a, b) => (a.slug > b.slug) ? 1 : -1)
}