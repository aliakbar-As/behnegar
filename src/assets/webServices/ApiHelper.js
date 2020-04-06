
export const BaseURL = 'http://95.216.161.74/api/v1';

//user sign up APIs
export const register = BaseURL + '/auth/register';      //post
export const login = BaseURL + '/auth/login';      //post


const ApiHelper = {
   register,
   login,
};

export { ApiHelper };
