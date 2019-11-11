import {BehaviorSubject} from 'rxjs';

class AuthStore {

    loginStatus = new BehaviorSubject(false);

    doLogin = async() => {
        console.log('do login');
        try{

            this.loginStatus.next(true);

            return true
        }
        catch (e) {
            throw e
        }

    };
    doLogout = () => {
        this.loginStatus.next(false);
    }

}

export default new AuthStore();



