import _ from 'lodash'

console.log(
  '[welcome]',
  _([1, 2, 3]).map((x) => x * 2).toArray()
)
