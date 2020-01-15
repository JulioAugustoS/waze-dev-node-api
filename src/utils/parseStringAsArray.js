module.exports = function parseStringAsArray(ArrayAsString) {
  return ArrayAsString.split(',').map(skil => skil.trim());
}