class LinkedList {
  constructor() {
    this.nodeHead = null;
    this.nodeTail = null;
    this.length = 0;
  }

  append(value) {
    if (this.nodeHead === null) {
      this.nodeHead = new Node(value);
      this.nodeTail = this.nodeHead;
    } else {
      this.nodeTail.next = new Node(value);
      this.nodeTail = this.nodeTail.next;
    }

    this.length++;
  }
  prepend(value) {
    if (this.nodeHead === null) {
      append(value);
    } else {
      const node = new Node(value);
      node.next = this.nodeHead;
      this.nodeHead = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.nodeHead;
  }

 tail() {
    return this.nodeTail;
  }

  at(index) {
    if(index < 0 || index >= this.length) return null;

    let current = this.nodeHead;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.nodeHead;
    while (current.next !== this.nodeTail) {
      current = current.next;
    }
    this.nodeTail = current;
    this.nodeTail.next = null;
    this.length--;
  }

  contains(value) {
    let current = this.nodeHead;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false
  }

  find(value) {
    let current = this.nodeHead;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null
  }
  toString() {
    let result = "";
    let current = this.nodeHead;
    while (current !== null) {
      result += `${current.value} -> `;
      current = current.next;
    }
    return result + "null";
  }

  insertAt(value, index) {
    if(index < 0 || index >= this.length) return null;

    if(index === 0) {
      this.prepend(value);
    } else if(index === this.length) {
      this.append(value);
    } else {
      const node = new Node(value);
      let current = this.nodeHead;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.length++;
    }
  }

  removeAt(index) {
    if(index < 0 || index >= this.length) return null;

    if(index === 0) {
      this.nodeHead = this.nodeHead.next;
      this.length--;
    } else {
      let current = this.nodeHead;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
      this.length--;
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

