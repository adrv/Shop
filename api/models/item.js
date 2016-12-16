module.exports = {
	attributes: {
    name: {
      type: 'string',
      required: true
    },
    price: {
      type: 'integer',
      required: true
    },
    sellPrice: {
      type: 'integer',
      required: true
    },
    category: {
      model: 'category'
    }
  }
}
