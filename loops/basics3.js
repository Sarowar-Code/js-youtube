const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Classic"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
      genre: "Fantasy"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      genre: "Fantasy"
    }
];
  
// map, filter, reduce // use forEach , forloop and practice ...



// forEach is ideal when you want to do something with each element, not return something.
books.forEach((item) => { 
  // console.log(item.genre.toUpperCase()); 
})


// map()
// map() creates a new array by applying a function to each element of the original array.


const newBooks = books.map((item, index) => {
  return { ...item , price : 100 * index + "$"} 

})

// console.log(newBooks);

// filter
// filter() creates a new array containing only the elements that pass a test (return true) from the provided function.
const booksprice = books.filter((book)=> book.genre == "Fantasy" )
// console.log(booksprice);


// reduce()
const numbers = [1, 2, 3, 4, 5, 6, 7]
const sum = numbers.reduce((acc, curr) => {
  console.log(`acc :${acc}, curr: ${curr}`)
  return acc + curr
}, 0) // by default acc is 1. So we made this 0.

console.log(sum)

