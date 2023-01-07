export interface IReqWithUser extends Request {
  user: {
    username: string;
  };
}
