import * as EmailValidator from 'email-validator';

const ValidateSignUpRequest = (signUpRequestModel) => {

    // Validate Full Name
    if(!signUpRequestModel.FullName) return({valide: false, message:"Full name cannot be empty."});
    if(signUpRequestModel.FullName.length() < 3) return({valide: false, message:"Full name should be included minimum 3 letters."});

    // Validate Email
    if(!signUpRequestModel.Email) return({valide: false, message:"Email cannot be empty."});
    if(!EmailValidator.validate(signUpRequestModel.Email)) return({valide: false, message:"Email is not valid."});

    // Validate Mobile
    if(!signUpRequestModel.Mobile) return({valide: false, message:"Mobile cannot be empty."});
    if(signUpRequestModel.Mobile.length() != 10) return({valide: false, message:"Mobile Number should be included 10 letters."});

    // Validate Password
    if(!signUpRequestModel.Password) return({valide: false, message:"Password cannot be empty."});
    if(signUpRequestModel.Password.length() < 5) return({valide: false, message:"Password should be included minimum 5 letters."});

    return({valide: true, message:""});
}

const ValidateLoginRequest = (loginRequestModel) => {
 
    // Validate Email
    if(!loginRequestModel.Email) return({valide: false, message:"Email cannot be empty."});
    if(!EmailValidator.validate(loginRequestModel.Email)) return({valide: false, message:"Email is not valid."});

    // Validate Password
    if(!loginRequestModel.Password) return({valide: false, message:"Password cannot be empty."});
    if(loginRequestModel.Password.length < 5) return({valide: false, message:"Password should be included minimum 5 letters."});

    return({valide: true, message:""});
}

export const validation = {ValidateSignUpRequest, ValidateLoginRequest};