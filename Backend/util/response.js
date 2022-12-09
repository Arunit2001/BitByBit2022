module.exports =  class Response {
  status = true;
  message = "";
  statusCode = 200;
  token = "";
  result = {};

  constructor(status, message, statusCode, token, result){
    this.status = status;
    this.message = message;
    this.statusCode = statusCode;
    this.token = token;
    this.result = result;
  }
}