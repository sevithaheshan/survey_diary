export class LoginUserRequestModel {

    constructor(obj) {

        obj = obj != null ? obj : {}

        this.Email = obj.Email != null ? obj.Email : ''
        this.Password = obj.Password != null ? obj.Password : ''
    }
}