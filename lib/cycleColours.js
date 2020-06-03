export default (number, colours = ['coral', 'lightviolet', 'lightteal']) =>
  colours[number % colours.length]
