import { validation } from "../Validations/User.js";
import { userService } from "../Services/UserService.js";
import { SignUpRequestModel } from '../Models/User/SignUpRequestModel.js';
import { LoginUserRequestModel } from '../Models/User/LoginRequestModel.js';

import Express from "express";
const router = new Express.Router();

// SingUp
router.post("/user/singup", async (req, res) => {

    try {

        if (!req.body) res.status(400).send({ user: null, message: "An invalid request" });

        const user = new SignUpRequestModel({
            Fullname : req.body.fullname,
            Email : req.body.email,
            Mobile : req.body.mobile,
            Password : req.bodypPassword
        });

        // validation
        const validateResult = validation.ValidateSignUpRequest(user);

        if (!validateResult.valide){
            res.status(400).send({ user: null, message: validateResult.message });
            return;
        } 

        // db operation
        const dbResult = await userService.CreateNewUser(user);

        if (dbResult.isUserCreated) {
            res.status(201).send({ user, message: dbResult.message });
        } else {
            res.status(400).send({ user: null, message: dbResult.message });
        }

    } catch (err) {
        res.status(400).send({ user: null, message: err });
    }
});

//login
router.post("/user/login", async (req, res) => {

    try {

        const loginCredintial = new LoginUserRequestModel({
            Email: req.body.email,
            Password: req.body.password
        })

        // validation
        const validateResult = validation.ValidateLoginRequest(loginCredintial);

        if (!validateResult.valide){
            res.status(400).send({ user: null, message: validateResult.message }); 
            return;
        } 

        // db operation
        const dbResult = await userService.LoginUser(loginCredintial);

        if (dbResult.isLoggedIn) {
            res.status(200).send({ user: dbResult.userDetail, message: dbResult.message });
        } else {
            res.status(400).send({ user: null, message: dbResult.message });
        }

    } catch (err) {
        res.status(400).send({ user: null, message: err });
    }
});

export default router;