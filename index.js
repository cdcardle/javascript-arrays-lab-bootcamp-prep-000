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

function appendKitten(name) {
  akitten = [...kittens, name]
}

function prependKitten(name) {
  pkittens = [name, ...kittens]
}

function removeLastKitten() {
  rlkittens = kittens.slice(-(kittens.length - 1))
}
function removeFirstKitten() {
  rfkittens = kittens.slice(1)
}
