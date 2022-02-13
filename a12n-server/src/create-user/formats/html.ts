import { render } from '../../templates';
import { PrincipalTypeList } from '../../principal/types';

export function createUserForm(msg: string, error: string) {

  return render('create-user', {
    title: 'Create User',
    msg: msg,
    error,
    type: PrincipalTypeList,
    action: '/create-user'
  });
}
