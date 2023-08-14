const Object = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 8,
  G: 3,
  H: 5,
  I: 1,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 7,
  R: 2,
  S: 3,
  T: 4,
  U: 6,
  W: 6,
  Y: 1,
  Z: 7,
};
function NameNumerologySum(nameNumerology) {
  let action = nameNumerology.toString();
  while (action.length !== 1) {
    let sum = 0;
    for (let i = 0; i < action.length; i++) {
      sum += Number(action[i]);
    }
    action = sum.toString();
  }
  return action;
}

export default function call(obj) {
  let { Name, date, message } = obj;
  console.log(obj);
  let nameNumerology = 0;
  for (let i = 0; i < Name.length; i++) {
    if (Object[Name[i]] !== undefined) {
      console.log(Object[Name[i]]);
      nameNumerology += Object[Name[i]];
    }
  }
  console.log('Name Numerology', nameNumerology);
  let nameNumo = NameNumerologySum(nameNumerology);

  date = date.split('-');
  let Date = date[2];
  let month = date[1];
  let year = date[0];

  while (Date.length !== 1) {
    let sum = 0;
    for (let i = 0; i < Date.length; i++) {
      sum += Number(Date[i]);
    }
    Date = sum.toString();
  }

  while (month.length !== 1) {
    let sum = 0;
    for (let i = 0; i < month.length; i++) {
      sum += Number(month[i]);
    }
    month = sum.toString();
  }
  while (year.length !== 1) {
    let sum = 0;
    for (let i = 0; i < year.length; i++) {
      sum += Number(year[i]);
    }
    year = sum.toString();
  }
  let total = Number(Date) + Number(month) + Number(year);
  total = total.toString();
  while (total.length !== 1) {
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
      sum += Number(total[i]);
    }
    total = sum.toString();
  }
  console.log({ Date, month, year, total, nameNumo });
  return { Date, month, year, total, nameNumo };
}
