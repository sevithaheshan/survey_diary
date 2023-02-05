import { GetConnection } from '../Database/Database.js';
import md5 from 'md5';
import { GLOBAL_CONFIG } from '../Configuration/Global.js';

// queries
const createNewUserQuery = "INSERT INTO Users VALUES(?, ?, ?, ?)";
const isUserExistQuery = "SELECT email FROM Users WHERE email = ?";
const userDetailQuery = "SELECT * FROM Users WHERE email = ?";

const CreateNewUser = async userDetail => {

    let isUserExists = false;
    let isUserCreated = false;
    let message;

    if (GLOBAL_CONFIG.DB_MYSQL_ENABLE) {

        try {

            var connection = await GetConnection();

            connection.query(isUserExistQuery, [userDetail.Email], (err, result, fields) => {

                if (err) {
                    message = 'something went wrong';
                    return;
                }

                if (result) {
                    message = 'User already exists.';
                    isUserExists = true;
                }
            });

            if (!isUserExists) {

                const hash_password = md5(userDetail.Password);
                connection.query(createNewUserQuery, [userDetail.Fullname, userDetail.Email, userDetail.Mobile, hash_password], (err, result, fields) => {
                    if (err) {
                        message = 'something went wrong';
                        return;
                    }

                    if (result.affectedRows > 0) {
                        message = 'User successfuly created.';
                        isUserCreated = true;
                    }
                });
            }

        } catch (err) {
            message = 'something went wrong';
        }

        return ({ isUserCreated, message });

    } else {

        var connection = await GetConnection();
        var request = new connection.Request();

        try {
            request.query(isUserExistQuery, [userDetail.Email], (err, result, fields) => {

                if (err) {
                    message = 'something went wrong';
                    return;
                }

                if (result) {
                    message = 'User already exists.';
                    isUserExists = true;
                }
            });

            if (!isUserExists) {

                const hash_password = md5(userDetail.Password);
                request.query(createNewUserQuery, [userDetail.Fullname, userDetail.Email, userDetail.Mobile, hash_password], (err, result, fields) => {
                    if (err) {
                        message = 'something went wrong';
                        return;
                    }

                    if (result.affectedRows > 0) {
                        message = 'User successfuly created.';
                        isUserCreated = true;
                    }
                });
            }

        } catch (err) {
            message = 'something went wrong';
        }

        return ({ isUserCreated, message });
    }
}

const LoginUser = async loginCredintial => {

    let isLoggedIn = false;
    let userDetail = null;
    let message;

    if (GLOBAL_CONFIG.DB_MYSQL_ENABLE) {

        try {

            var connection = await GetConnection();

            connection.query(userDetailQuery, [loginCredintial.Email], (err, result, fields) => {

                if (err) {
                    message = 'something went wrong';
                    return;
                }

                if (result) {
                    userDetail = result[0];
                } else {
                    message = 'User not exists.';
                }
            });

            if (userDetail) {

                const decryptPassword = md5(loginCredintial.Password);

                if (userDetail.password == decryptPassword) {
                    message = 'Log in successful.';
                    isLoggedIn = true;
                } else {
                    message = 'username or password incorrect.';
                }
            }

        } catch (err) {
            message = 'something went wrong';
        }

        return ({ isLoggedIn, message, userDetail });

    } else {

        try {

            var conn = await GetConnection();
            var request = new conn.Request();

            request.query(userDetailQuery, [loginCredintial.Email], (err, result, fields) => {

                if (err) {
                    message = 'something went wrong';
                    return;
                }

                if (result) {
                    userDetail = result[0];
                } else {
                    message = 'User not exists.';
                }
            });

            if (userDetail) {

                const decryptPassword = md5(loginCredintial.Password);

                if (userDetail.password == decryptPassword) {
                    message = 'Log in successful.';
                    isLoggedIn = true;
                } else {
                    message = 'username or password incorrect.';
                }
            }

        } catch (err) {
            message = 'something went wrong';
        }

        return ({ isLoggedIn, message, userDetail });
    }
}

export const userService = { CreateNewUser, LoginUser }