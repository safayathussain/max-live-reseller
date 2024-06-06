import { store } from "@/redux/store";
import { FetchApi } from "./FetchApi";
import { setAuth } from "@/redux/slices/AuthSlice";
import toast from "react-hot-toast";

export function capitalizeAllWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
export const getAuth = () => {
  const auth = store.getState().auth.user;
  console.log(auth)
  if (auth.user?.role === 'BR') {
    // console.log(auth)
    return auth.user
  } else if (auth?.accessToken) {
    const data = jwtDecode(auth?.accessToken || '')
    return data.user
  } else {
    return {}
  }
}
export const loginUser = async (email, password, func) => {
  const res = await FetchApi({ url: 'admin/signInAllUsers', method: 'post', data: { email, password }, callback: func })
  if (res.status === 200) {
    if(res.data.user.role === 'BR'){
      store.dispatch(setAuth(res?.data))
      window.location = '/dashboard'
    }else {
      toast.error('Invalid email or password')
    }

  }

  return res;

}

export const logoutUser = () => {
  store.dispatch(setAuth({}))
  window.location = '/login'
}

