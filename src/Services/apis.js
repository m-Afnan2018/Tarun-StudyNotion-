
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const categories = {
    GET_CATEGORY_API: BASE_URL + "/course/showAllCategories"
}
// Auth EndPoints
export const authEndPoints = {
    SEND_OTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESET_PASSWORD_TOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESET_PASSWORD_API: BASE_URL + "/auth/reset-password"
}

export const profileEndPoints = {
    FEEDBACK_API: BASE_URL + "/profile/sendFeedback",
    GET_USER_ENROLLED_COURSEs_API: BASE_URL + "/profile/getEnrolledCourses",
    CHANGE_DISPLAY_PICTURE : BASE_URL + "/profile/updateDisplayPicture",
    GET_USER_DETAILS : BASE_URL + "/profile/getUserDetails"
}