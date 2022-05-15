
export const userRoles = [{key: 0, name: "Please select a user role"}, {key: 1, name: "User"}, {key: 2, name: "Mentor"}, {key: 3, name: "Autor"}];
/** Regular expressions */
export const EMAIL_REGEX:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_STRONG_REGEX:RegExp = /(?=.*[A-Z])(?=.*[0-9])(?=(.*[^A-Za-z0-9]){2})(?=.{8,})/;
export const PASSWORD_REGEX:RegExp = /(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;