let names = ["David Bowie", "The Artist Formerly Known as Prince", "John Lennon", "Jimmi Hendrix", "Robert Plant", "Paul McCarthy", "Gene Simmons", "Stevie Nicks", "Florence Welch", "Sonny and Char"];

// Map the names to objects
// ex: {name: "David Bowie"}
// Return result to mappedNames array

const mappedNames = names.map((name) => {
  let rockstar = {name: name}
  return rockstar
})

console.log(mappedNames)


// map through just the first rows
// return an array of the first names of the artists

const mappedFirstNames = names.map(name => name.split(" ")[0])
console.log(mappedFirstNames)

// Call filter method on names array.
// Only return artists names whose first names beginning with J.
// Store the result in a new array

let filteredNamesJ = names.filter(name => name[0] === "J")
console.log(filteredNamesJ)

// a.methodOne().methodTwo()

// Return an array of first names of artists whose first names begin with "J"

let firstNameJ = names.filter(name => name[0] === "J").map(name => name.split(" ")[0])
console.log(firstNameJ)

// SHAPES
let shapes = [
  { name: "Square", color: "Green", sides: 4 },
  { name: "Triangle", color: "Green", sides: 3 },
  { name: "Rectangle", color: "Red", sides: 4 },
  { name: "Pentagon", color: "Green", sides: 5 },
  { name: "Hexagon", color: "Red", sides: 6 }
]

// Call map on shapes array
// Return a new array of shape names

const shapeNames = shapes.map(shape => shape.name)
console.log(shapeNames)

// Call filter on shapes array

const greenShapes = shapes.filter(shape => shape.color === "Green")
console.log(greenShapes)
