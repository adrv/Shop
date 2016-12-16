module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    items: {
      collection: 'item',
      via: 'category'
    }
  }
}
