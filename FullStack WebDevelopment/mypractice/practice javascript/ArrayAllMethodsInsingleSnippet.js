const cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 70,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 15,
    },
    {
      color: "green",
      type: "station wagon1",
      registration: new Date("2020-03-03"),
      capacity: 35,
    },
    {
      color: "white",
      type: "station wagon2",
      registration: new Date("2021-03-03"),
      capacity: 50,
    },
  ];
  // array method some() - will return true if atleast one match found
  const atleast50Cap = cars.some((car) => car.capacity >= 50);
  console.log(atleast50Cap);

  // array method every() - will return true if condition matches all value
  const is10Cap = cars.every((car) => car.capacity >= 10);
  console.log(is10Cap);

  // array method find() - will filter the single value based on condition // return cap exactly 35
  const below40Cap = cars.find((car) => car.capacity === 35);
  console.log(below40Cap);

  // deleting a array element by index
  // splice() will delete add or modify the same array
  // slice() will return the new subarray deleted one
  const index = cars.findIndex((car) => car.color === "green");
  //cars.splice(index, 2);
  // console.log(cars);
  const newCars = cars.slice(0, index);
  console.log(newCars);

  // reduce() return a single value apply reduction on the array each element 
 // return the total capcity
  const totalCap = cars.reduce((acc, item) => acc + item.capacity, 0);
  console.log(totalCap);