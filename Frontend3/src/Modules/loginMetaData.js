export default class LoginMetaData{
    
    
  token = "";
  result = {};

  LoginMetaData(response){
    
    this.token = response.token;
    this.result = response.result;
  }

}