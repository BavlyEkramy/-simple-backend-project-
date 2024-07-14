const fs = require("fs");

const addPerson = (id, fname, lname, city, age) => {
  const allData = loadInfo();
  const duplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      city: city,
      age: age,
    });
    savealldata(allData);
  } else {
    console.log("ERROR DUPLICATED DATA");
  }
};

/////////////////////////////////////////////////////////////////////

const savealldata = (allData) => {
  const saveallDataJson = JSON.stringify(allData);
  fs.writeFileSync("data10.json", saveallDataJson);
};

/////////////////////////////////////////////////////////////////////

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

///////////////////////////////////////////////////////////////////////

const deleteData = (id) => {
  const allData = loadInfo();
  const dataTokeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  if (dataTokeep.length == allData.length) {
    console.log("Invalid ID");
  } else savealldata(dataTokeep);
};

////////////////////////////////////////////////////////////////////////////////////////

const readData = (id) => {
  const allData = loadInfo();
  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  if (itemNeeded) {
    console.log(itemNeeded);
  } else {
    console.log("ID NEEDED NOT FOUND");
  }
};

////////////////////////////////////////////////////////////////////////////////////////////

const listData = () => {
  const allData = loadInfo();
  allData.forEach((obj) => {
    console.log(obj.fname, obj.city);
  });
};

module.exports = {
  addPerson,
  deleteData,
  readData,
  listData,
};
