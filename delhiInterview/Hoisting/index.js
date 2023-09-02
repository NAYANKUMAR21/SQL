function call() {
  if (true) {
    let name = 'nayan';
    console.log(name);
  }
  function xyz() {
    console.log('1', name);
  }
  xyz();
  console.log(name);
}
call();
