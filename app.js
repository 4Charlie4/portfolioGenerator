const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfData = (profileDataArr) => {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }
  console.log("============");
  //this functions the same as code above
  profileDataArgs.forEach(profileItem => console.log(profileItem));
};

printProfData(profileDataArgs);
