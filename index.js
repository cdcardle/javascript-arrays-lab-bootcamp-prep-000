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

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(element) {
  var akittens = [...kittens, element]
}

function prependKitten(element) {
  var pkittens = [element, ...kittens]
}

function removeLastKitten() {
  var rlkittens = kittens.slice(-(kittens.length - 1))
}
function removeFirstKitten() {
  var rfkittens = kittens.slice(1)
}
