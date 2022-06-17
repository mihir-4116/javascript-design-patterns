/*
The visitor pattern allows defining new operations to the collection of objects without changing the structure of the objects themselves. 
This allows us to separate the class from the logic it implements.

The extra operations can be encapsulated in a Visitor object. 
The objects can have a visit method that accepts the Visitor object. 
The Visitor can then make the required changes and perform the operations on the object that received it. 
This allows the developers to make future extensions, extend the libraries/frameworks, etc.

Visitor pattern can be used when:
Similar operations need to be performed on different objects of a data structure.
Specific operations need to be performed on different objects in the data structure.
You want to add extensibility to libraries or frameworks.
*/

class visitor {
  visit(item) {}
}

class BookVisitor extends visitor {
  visit(book) {
    let price = 0;
    if (book.getPrice() > 0) {
      price = book.getPrice() * 0.1;
    } else {
      price = book.getPrice();
    }
    console.log(`${book.getName()} price is : ${price}`);
    return price;
  }
}

class Book {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  accept(bookVisitor) {
    bookVisitor.visit(this);
  }
}

const bookvisitor = new BookVisitor();
const book1 = new Book("#1234", "lordOftheRings", 80);
book1.accept(bookvisitor);
