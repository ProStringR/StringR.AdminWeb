export interface ModelAuthResponse {
  token: string;
  id: number;
  responseMessage: string;
}

export class AuthUser implements ModelAuthResponse {
  public token: string;
  public id: number;
  public responseMessage: string;

  constructor(token: string, id: number, responseMessage: string) {
    this.token = token;
    this.id = id;
    this.responseMessage = responseMessage;
  }

}
