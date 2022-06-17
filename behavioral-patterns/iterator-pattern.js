/*
The iterator pattern allows defining various types of iterators that can be used to iterate a collection of objects sequentially without exposing the underlying form.

Iterators encapsulate how the traversal occurs in an iteration. Most languages have builtin iterators such as IEnumerable and IEnumerator; 
however, JavaScript only supports basic looping constructs such as for, for-in, while, etc. 
The iterator pattern allows JavaScript developers to build other complex iterators which can be used to easily traverse collections that are stored in something complex such as graphs or trees. 
These iterators can then be used by the client to traverse a collection without having to know their inner working.

Iterators follow the behavior where they call a next function and step through a set of values until they reach the end. 
To do this they need to maintain a reference to the current position as well as the collection they are traversing. 
Hence, an iterator has functions such as next, hasNext, currentItem, and each.

This pattern can be used when dealing with problems explicitly related to iteration, 
for designing flexible looping constructs and accessing elements from a complex collection without knowing the underlying representation. 
You can use it to implement a generic iterator that traverses any collection independent of its type efficiently.
*/

class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNextElement() {
    return this.index <= this.elements.length;
  }

  first() {
    this.index = 0;
    return this.next();
  }
}

function iterate() {
  var items = ["Yello", "Green", "Blue"];
  var iter = new Iterator(items);
  for (var i = iter.first(); iter.hasNextElement(); i = iter.next()) {
    console.log(i);
  }
}

iterate();
