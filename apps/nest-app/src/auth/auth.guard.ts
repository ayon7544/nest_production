import { CanActivate, ExecutionContext } from '@nestjs/common';
import { type Request } from 'express';
import { ICurrentUser } from './current-user.interface';
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const currentUser: ICurrentUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: ICurrentUser }>();
    request['user'] = currentUser;
    console.log('AuthGuard: ', request.headers);
    return true;
  }
}
