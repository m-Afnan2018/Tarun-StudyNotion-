import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { profileEndPoints } from "../apis";
import { useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/authSlice";

const {
  FEEDBACK_API,
  GET_USER_ENROLLED_COURSEs_API,
  CHANGE_DISPLAY_PICTURE
} = profileEndPoints;


export const getUserEnrolledCourse = async (token) => {
  try {
    let result = [];
    console.log("BEFORE CALLING BACKEND API FOR GETCOURSES");
    const response = await apiConnector("GET", GET_USER_ENROLLED_COURSEs_API, null, {
      Authorisation: `Bearer ${token}`,
    });
    console.log("AFTER CALLING BACKEND API FOR GETCOURSES");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;

    return result;

  } catch (error) {
    console.log("Get USER ENROLLED COURSES ERROR.......", error);
    toast.error("Unable to get Enrolled courses");
  }
}


export const changeDisplayPicture = (file, token, user) => {


  return async (dispatch) => {

    try {
        console.log("called inside change display picture");
      // set  Loading True
      dispatch(setLoading(true));
      // make db call which will return secure url as response 
      const response = await apiConnector("PUT", CHANGE_DISPLAY_PICTURE, { file, token });
      console.log("Response",response);
      // update the secureurl link in the user state
      user.image = response;
      // return the response and set loading false
      dispatch(setLoading(false));
      toast.success("Dp Changed successfully");

    } catch (error) {
      console.log("Error while changing display picture", error);
      toast.error("Unable to upload image");
    }
  }

}