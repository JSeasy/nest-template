import { UserService } from 'src/users/users.service';

export const TokenProvider = {
  provide: 'TokenProvider',
  useValue: '123123213',
};

export const ConstProvider = {
  provide: 'ConstProvider',
  useValue: '123123211113',
};

export const ClassProvider = {
  provide: UserService,
  useClass: UserService,
};

export const FactoryProvider = {
  provide: 'FactoryProvider',
  useFactory: (name: string) => {
    return name;
  },
};
