let xyz = [
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/fwzniconjeyg9nsacubo.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/mmnd9dvyp4qeng6ooskt.webp',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/eoepxec9ik6qupmx2rmx.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/ls7lcj8ua73tkr2shdxd.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/ybxpuexysxaitzm2im1i.avif',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/j7kvyifwosmcdrp6ifwo.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/uuekdg2j4kxpvwaw4rdt.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/fwzniconjeyg9nsacubo.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/mmnd9dvyp4qeng6ooskt.webp',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/eoepxec9ik6qupmx2rmx.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/ls7lcj8ua73tkr2shdxd.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/ybxpuexysxaitzm2im1i.avif',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/j7kvyifwosmcdrp6ifwo.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/uuekdg2j4kxpvwaw4rdt.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558175/fwzniconjeyg9nsacubo.jpg',
  'http://res.cloudinary.com/dc3akfh6t/image/upload/v1693558176/eoepxec9ik6qupmx2rmx.jpg',
];

let ans = [];
let count = 1;
for (let i = 0; i < xyz.length; i++) {
  ans.push({ count, image: xyz[i] });
  count++
}
console.log(ans);
