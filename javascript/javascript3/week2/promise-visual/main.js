async function translateOneByOne() {
  await new Promise((resolve) => {
    resolve(
      moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
        x: 20,
        y: 300,
      })
    );
    console.log("first");
  });
  await new Promise((resolve) => {
    resolve(
      moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
        x: 400,
        y: 300,
      })
    );
    console.log("first");
  });
  await new Promise((resolve) => {
    resolve(
      moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
        x: 400,
        y: 20,
      })
    );
    console.log("first");
  });
}

translateOneByOne();

// async function tc() {
//   console.log("Gary");
//   await moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
//     x: 20,
//     y: 300,
//   });
//   //await delay(2000);
//   await moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
//     x: 400,
//     y: 300,
//   });
//   //await delay(2000);
//   await moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
//     x: 400,
//     y: 20,
//   });
// }
// tc();

function translateAllAtOnce() {
  const p1 = new Promise((resolve) => {
    resolve(
      moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
        x: 20,
        y: 300,
      })
    );
  });
  const p2 = new Promise((resolve) => {
    resolve(
      moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
        x: 400,
        y: 300,
      })
    );
  });
  const p3 = new Promise((resolve) => {
    resolve(
      moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
        x: 400,
        y: 20,
      })
    );
  });
  Promise.all([p1, p2, p3]);
}

translateAllAtOnce();

// function translateAllAtOnce() {
//   const p1 = new Promise((resolve) => {
//     resolve(
//       moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
//         x: 20,
//         y: 300,
//       })
//     );
//   })
//     .then(() => {
//       moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
//         x: 400,
//         y: 300,
//       });
//     })
//     .then(() => {
//       moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
//         x: 400,
//         y: 20,
//       });
//     });
// }

// translateAllAtOnce();
