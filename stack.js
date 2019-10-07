class Stack {
  constructor(top = null){
    this.top = top
    this.length = top ? 0 : 1
  }

  push(data){
    const node = new Node(data)
  }

  pop(){}

  isEmpty(){
    return !this.top
  }

  size(){
    if(this.top === null){
      return 0
    } else {
      let counter = 0
      let node = this.top
      while(node.next){
        counter ++
      }
      return counter
    }
  }
}

class Node {
  constructor(data, next=null){
    this.data = data
    this.next = next
  }

}
