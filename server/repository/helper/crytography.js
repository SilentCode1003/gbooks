const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const initVector = Buffer.alloc(16, "DEV032494");
const Securitykey = Buffer.alloc(32, "DEV032494DEV");



exports.Encrypter = (password, callback) => {
  try {
    let cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(password, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    callback(null, encryptedData);
  } catch (error) {
    callback(error, null);
  }
};

exports.Decrypter = (hash, callback) => {
  try {
    let decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedData = decipher.update(hash, "hex", "utf8");
    decryptedData += decipher.final("utf-8");

    callback(null, decryptedData);
  } catch (error) {
    callback(error, null);
  }
};

exports.DecrypterString = (hash) => {
  try {
    let decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedData = decipher.update(hash, "hex", "utf8");
    decryptedData += decipher.final("utf-8");

    return decryptedData;
  } catch (error) {
    throw error;
  }
};

exports.EncrypterString = (password) => {
  try {
    let cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(password, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    return encryptedData;
  } catch (error) {
    throw error;
  }
};