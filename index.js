const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  kittens.push(element)
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(element) {
  return akittens = [...kittens, element]
}

function prependKitten(element) {
  return pkittens = [element, ...kittens]
}

function removeLastKitten() {
  return rlkittens = kittens.slice(-(kittens.length - 1))
}
function removeFirstKitten() {
  return rfkittens = kittens.slice(1)
}
