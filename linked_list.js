class Node(){
  //accept data as an arg, default to next being null unless otherwise specified
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class Linked {
  //create a list where the head defaults to null and the size defaults to 0 unless otherwise specified
  constructor(head = null, size = 0){
    this.head = head
    this.size = size
  }

  //find the last element of the list
  findLast(){
    //if the value of the head is null (ie the list is empty), return null
    if(this.head === null){
      return null
    }
    //otherwise, iterate through the list until you reach the final node and return it 
    else {
      let node = this.head
      while(node.next){
        node = node.next
      }
      return node
    }
  }

  //add an element to the linked list - complexity of O(n)
  //complexity could be O(1) if we create a tracked tail as part of the constructor
  addElement(data){
    //create the node to add to the list
    const node = new Node(data)
    //if the head is not yet specified, make the new node the head of the list
    if(this.head === null){
      this.head = node
    // if the head is ALREADY specified, find the head of the linked list, iterate over the list until you reach the end, then assign the node to the next pointer of the last element in the list
    } else {
      let current = this.head
      while(current.next !== null){
        current = current.next
      }
      current.next = node
    }
    this.size ++
  }

  // insertAt(data, index){
  //   if(index > 0 && index > this.size){
  //     return false
  //   } else {
  //     const node = new Node(data)
  //     let curr = this.head, prev
  //     if(index === 0){
  //       node.next = head
  //       this.head = node
  //     } else {
  //
  //     }
  //   }
  // }

  //get any element from the linked list given the argument of an index value
  //complexity is O(n) because worst case scenario is traversing the entire list
  retrieve(index){
    //if the index is a postive value, iterate over the list
    if(index > -1){
      //create a pointer that starts at the head of the list
      let current = this.head
      //create a variable to track where in the list the iteration is currently
      let i = 0
      //traverse the list until you either reach the end or the specified index argument
      while((current !== null) && (i < index)){
        current = current.next
        i++
      }
      //return the data if current isn't null
      return current !== null ? current.data : undefined
    }
    // if the index isn't 0 or greater, just return undefined for an invalid index argument
    else {
      return undefined
    }
  }

  //find the specified index and then remove the node at that index
  //edge cases: empty list, index < 0, index greater than the length of the list, removal of the head
  remove(index){
    //if the index argument value is invalid or the list is empty
    if((this.head === null) || (index < 0)){
      throw new RangeError(`Index ${index} does not exist`)
    }
    //if the want to remove the head
    if(index === 0){
      const data = this.head.data
      this.head = this.head.next
      return data
    }
    //create a pointer to traverse the list starting at the head
    let current = this.head
    //keep track ofthe node previous to the current node
    let prev = null
    //keep track of index in the list
    let i = 0
    //loop over the list until you reach the specified index
    while((current !== null) && (i < index)){
      previous = current
      current = current.next
      i++
    }
    //if you found the node with the right index, use the previous node and change the reference to be the same as the node to remove's reference (effectively pointing to the node after the node to remove)
    //return the value of the node that you removed
    if (current !== null){
      previous.next = current.next
      return current.data
    }
    //if you can't find the node with an index that matches the index argument, throw an error
    throw new RangeError(`Index ${index} does not exist in the list`)
  }

} // end of Linked class

new Linked()
new Node()
