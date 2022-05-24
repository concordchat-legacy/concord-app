export class State {
    token: string | null;

    constructor() {
        this.token = window.localStorage.getItem('authenticative_user_token');
    }
};
