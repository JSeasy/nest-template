export interface IReqWithUser extends Request {
  user: {
    username: string;
    id: string;
  };
}

export interface IUserPayload {
  username: string;
  id: string;
}
