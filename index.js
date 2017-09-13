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
  return var akittens = [...kittens, element]
}

function prependKitten(element) {
  return var pkittens = [element, ...kittens]
}

function removeLastKitten() {
  return var rlkittens = kittens.slice(-(kittens.length - 1))
}
function removeFirstKitten() {
  return var rfkittens = kittens.slice(1)
}
