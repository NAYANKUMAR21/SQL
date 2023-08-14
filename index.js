class Node {
  constructor(a, x) {
    this.data = a;
    this.pos = x;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(num) {
    let x = new Node(num, this.size);
    if (this.head == null) {
      this.head = x;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = x;
    this.size++;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data, current.pos);
      current = current.next;
    }
    console.log('*****************');
  }
  deleteNum(num) {
    let current = this.head;
    let flag = -1;
    if (current.next == null) {
      this.head = null;
      this.size = 0;
      flag = 20;
    }
    while (current.next) {
      if (current.next.data == num) {
        current.next = current.next.next;
        flag = 23;
      } else {
        current = current.next;
      }
    }
    if (flag == num) {
      console.log('--------');
      console.log('Data removed', flag);
      console.log('--------');
      return;
    }
    console.log('--------');
    console.log(num, 'Number doesnt exists');
    console.log('--------');
    return;
  }
  deletePosition(position) {
    let current = this.head;
    let flag = -1;
    if (current.next == null) {
      this.head = null;
      this.size = 0;
      flag = 21;
    }
    if (position > this.size) {
      console.log('-------');
      console.log('Index is over the limit');
      console.log('-------');
      return;
    }

    let count = 1;

    while (current.next) {
      if (current.next.pos == position) {
        flag = current.data;
        current.next = current.next.next;
      } else {
        current = current.next;
      }
      count++;
    }
    if (flag > 0) {
      console.log('-------');
      console.log(`element at the pos ${position} deleted`);
      console.log('-------');
      return;
    }
    console.log('-----');
    console.log('Number at that position aleady deletd');
    console.log('-------');
    return;
  }
  addAtPosition(num, position) {
    let newNode = new Node(num, this.size);
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let count = 0;
    let prev = null;
    let current = this.head;
    while (count < position) {
      prev = current;
      current = current.next;
      count++;
    }
    if (current == null) {
      console.log('position is exhausted');
      return;
    }
    prev.next = newNode;
    newNode.next = current;

    return;
  }
  updatePosition(num, position) {
    let current = this.head;
    if (position == 0) {
      current.data = current.data + num;
      return;
    }
    let count = 0;
    while (count < position) {
      current = current.next;
      count++;
    }
    if (current == null) {
      console.log('pointer exhasted');
      return;
    }
    current.data = current.data + num;
    return;
  }
  reverseList() {
    let prev = null;
    let current = this.head;
    while (current) {
      let cuttingEachNode = current.next;
      current.next = prev;
      prev = current;
      current = cuttingEachNode;
    }
    this.head = prev;
    return this.head;
  }
  addOneNumberToLinkedList(num) {
    let list1 = this.head;
    let add = '';
    while (list1) {
      add += list1.data;
      list1 = list1.next;
    }
    console.log(add);
    let current = this.reverseList();

    let carry = num;

    while (current) {
      let sum = current.data + carry;
      if (sum >= 10) {
        let x = sum % 10;
        carry = Math.floor(sum / 10);
        current.data = x;
      } else {
        let y = sum % 10;
        carry = 0;
        current.data = y;
      }
      current = current.next;
    }
    let x = this.reverseList();
    this.head = x;
    let list = this.head;
    let sum = '';
    while (list) {
      sum += list.data;
      list = list.next;
    }
    console.log(sum);
  }
  printBeforeList() {}
}
let x = new LinkedList();
x.add(1);
x.add(2);
x.add(3);
x.add(4);
x.print();
x.addOneNumberToLinkedList(99);

// console.log(x)
/*
export function sortTypes( arr ) {
	if(arr.length==0){
		return ""
	}
	//Insert your code here
	
	let ans = {
		number:[],
		string:[],
		
		boolean:[],
		array:[],

	}
	
	for(let i=0;i<arr.length;i++){
		if(arr[i]==this){
			console.log("this")
			ans["array"].push(null)
		}
		else if(typeof arr[i]==='number'){
			ans['number'].push(arr[i])
		}
		else if(typeof arr[i]==='string'){
			ans['string'].push(arr[i])
		}
		else if(typeof arr[i]==='boolean'){
			ans['boolean'].push(arr[i])
		}
		else if(typeof arr[i]==='object'){
			if(arr[i]!==this && arr[i]!==null){
				ans['array'].push(arr[i])	
			}else{
				ans['array'].push(null)
			}
			
			
			
		}else if(typeof arr[i]=="null"){
			ans['array'].push(null)
		}
	}
	let result= []
	for(let key in ans){
		if(ans[key].length!=0){

		result.push(ans[key])
		}
	}
	console.log(result)
	return JSON.stringify(result)
		
	
	
}
*/