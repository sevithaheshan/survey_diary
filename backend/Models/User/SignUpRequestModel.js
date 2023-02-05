export class SignUpRequestModel {
    constructor(obj) {

        obj = obj != null ? obj : {}

        this.Fullname = obj.Fullname != null ? obj.Fullname : ''
        this.Email = obj.Email != null ? obj.Email : ''
        this.Mobile = obj.Mobile != null ? obj.Mobile : ''
        this.Password = obj.Password != null ? obj.Password : ''
    }
}

