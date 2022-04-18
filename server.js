let arr = [];
let totalLength = 100;
let currentLength = 0;
for (let i = 0; i < 200; i++) {
  arr.push({ id: i, name: `Item no: ${i}` });
}

export const server = (qty) =>
  new Promise((resolve, reject) => {
    let newArr;
    if (currentLength >= totalLength) return resolve("done");

    if (currentLength === 0) {
      newArr = [...arr].slice(0, qty);
      currentLength += qty;
    } else {
      const newIndex = currentLength;
      newArr = [...arr].slice(newIndex, qty + newIndex);
      currentLength += qty;
    }
    setTimeout(() => {
      resolve(newArr);
    }, 3000);
  });
