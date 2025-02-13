const MESSAGE_STATUS = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  WARNING: "WARNING",
  INFO: "INFO",
  ERROR: "ERROR",
  EXIST: "EXIST",
  NOT_EXIST: "NOT_EXIST",
  UNAUTHORIZED: "UNAUTHORIZED",
};

exports.JsonResponseSuccess = () => {
  return {
    message: MESSAGE_STATUS.SUCCESS,
  };
};

exports.JsonResponseData = (data) => {
  return {
    message: MESSAGE_STATUS.SUCCESS,
    data: data,
  };
};

exports.JsonResposeError = (message) => {
  return {
    message: message,
  };
};

exports.JsonResponseExist = () => {
  return {
    message: MESSAGE_STATUS.EXIST,
  };
};

exports.JsonResposeNotExist = () => {
  return {
    message: MESSAGE_STATUS.NOT_EXIST,
  };
};

exports.JsonReponseUnauthorized = (page) => {
  return page;
};
