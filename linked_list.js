class Linked{
  constructor(head = null){
    this.head = head
  }

  findLast(){
    if(this.head === null){
      return null
    } else {
      let node = this.head
      while(node.next){
        node = node.next
      }
      return node
    }
  }

  append(data){
    const node = new Node(data)
    if(this.head === null){
      this.head = node
    } else {
      let lastNode = this.findLast
      lastNode.next = node
    }
  }
}

class Node(){
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

new Linked()
new Node()
