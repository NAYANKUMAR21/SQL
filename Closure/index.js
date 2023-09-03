function clouse() {
  let message = 'good evening';
  return function a() {
    console.log(message);
    const xyz = function b() {
      console.log(message);
      return;
    };
    message = 'good after noon';
    return xyz;
  };
}
