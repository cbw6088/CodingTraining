function solution(phone_book) {
  let newArr = phone_book.map(Number);
  phone_book.sort();
  for (let i = 0; i < phone_book.length; i++) {
    let first = phone_book[i];
    if (i + 1 >= phone_book.length) {
      break;
    }
    if (first == phone_book[i + 1].slice(0, first.length)) {
      return false;
    }
  }
  return true;
}
