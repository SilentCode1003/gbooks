class DataModel {
    constructor(data, prefix) {
      for (const key in data) {
        this[key.replace(prefix, "")] = data[key];
      }
    }
  }
  
  exports.DataModeling = (data, prefix) => {
    let result = [];
  
    data.forEach((d) => {
      result.push(new DataModel(d, prefix));
    });
  
    return result;
  };
  