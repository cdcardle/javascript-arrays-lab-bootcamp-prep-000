const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]

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
kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  return akitten = [...kittens, name]
}

function prependKitten(name) {
  var pkittens = [name, ...kittens]
}

function removeLastKitten() {
  var rlkittens = kittens.slice(-(kittens.length - 1))
}
function removeFirstKitten() {
  var rfkittens = kittens.slice(1)
}
