const fakeRoom = {
  name: "Living Room",
  size: 100,
  tasks: [
    { name: "Put away doggo toys" },
    { name: "Sweep" },
    { name: "Vacuum" },
  ]
};

function getRoom () {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(fakeRoom);
    }, 2000);
  });
}

export { getRoom };
