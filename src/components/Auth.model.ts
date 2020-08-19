import { AuthProvider } from '@firebase/auth-types';

export default class Auth {
  constructor(readonly provider: AuthProvider, readonly name: string) {}
}
