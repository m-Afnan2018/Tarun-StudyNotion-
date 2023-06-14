
import { useDispatch } from 'react-redux';
import { authEndPoints } from '../apis';
import { apiConnector } from '../apiConnector';
import toast, { Toaster } from 'react-hot-toast';
import { setLoading, setToken } from "../../redux/slices/authSlice"
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/profileSlice';

const {
    SEND_OTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESET_PASSWORD_TOKEN_API,
    RESET_PASSWORD_API
} = authEndPoints;


export const sendOtp = (email, navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        console.log('called');

        try {
            const response = await apiConnector("POST", SEND_OTP_API, {
                email
            });
            console.log("SEND OTP API RESPONSE ...", response);
            console.log(response.data.success)


            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Otp Sent Successfully");
            navigate('/verify-email');

        } catch (error) {
            console.log("Otp Error", error);
            toast.error("Unable to send Otp");

        }
        dispatch(setLoading(false));

    };
}


export function signUp(
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    accountType,
    otp,
    navigate
) {
    return async (dispatch) => {
        // const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
            })

            console.log("SIGNUP API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Signup Successful")
            navigate("/login")
        } catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/signup")
        }
        dispatch(setLoading(false))
    }
}

export const login = (email, password, navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password
            });

            console.log("Login Api Response.....", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Login Successful");
            dispatch(setToken(response?.data?.user?.token));
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            dispatch(setUser({ ...response.data.user, image: userImage }))
            localStorage.setItem("token", JSON.stringify(response?.data?.user?.token));
            navigate('/dashboard/my-profile')


        } catch (error) {
            console.log("login failed");
            toast.error("Login Lailed")
        }
        dispatch(setLoading(false));
    }
}

export const getPasswordResetToken = (email, setIsEmailSent) => {

    return async (dispatch) => {
        // set the loader true using dispatch function
        dispatch(setLoading(true));
        // call the api using apiconnector method
        try {
            const response = await apiConnector("POST", RESET_PASSWORD_TOKEN_API, {
                email,
            });
            // log the response 
            console.log("Reset Password Token  Response", response);
            // check if response contain success or not and display toast according to the condotion
            if (!response.data.success) {
                // Toast Code Here
                throw new Error(response.data.message)
            }
            // after the otp is sent set isEmailSent true
            // Success Toast
            toast.success("Reset Email Sent Successfully")
            setIsEmailSent(true);
            // set the loader false using dispatch method}
        } catch (error) {
            // catch error  
            console.log("Error While Resetting the password token");
            toast.error("Failed To Send Reset Email")
            // add a toast with error message
        }
        dispatch(setLoading(false));
    }
}


export const resetPassword = (password, confirmPassword, token, navigate) => {

    return async (dispatch) => {
        // Set Loader to true
        dispatch(setLoading(true));
        // make an api call and log the response
        try {
            console.log('called at resetPassword');
            const response = await apiConnector("POST", RESET_PASSWORD_API, {
                password,
                confirmPassword,
                token
            });
            console.log("Reset password success", response);
            // check weather it is a success or a fail 

            if (!response.data.success) {
                toast.error("Error While updating data")
                throw new Error(response.data.message)
            }

            toast.success('Reset Password  Success')
            navigate('/login');

        } catch (error) {
            // Catch the error
            // log the error
            console.log("Error While changing password");
            toast.error("Failed To Send Reset Email");
            console.log(error);
        }
        // Set the loader to false
        dispatch(setLoading(false));
    }
}

export const logout = (navigate) => {
    return ( (dispatch) => {
        console.log("called")
        try {
            dispatch(setUser(null));
            dispatch(setToken(null));
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            console.log("Logged Out ," , localStorage.getItem('token'));
            toast.success('Logout success');
            navigate('/');
        } catch (error) {
            toast.error("Unable to logout")
        }
    }) 
}