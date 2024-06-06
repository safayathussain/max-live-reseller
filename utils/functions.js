import { store } from "@/redux/store";
import { FetchApi } from "./FetchApi";
import { setAuth } from "@/redux/slices/AuthSlice";

export function capitalizeAllWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
export const getAuth = () => {
  const auth = store.getState().auth;
  if (auth.user?.role === 'BR') {
    return auth.user
    console.log(auth)
  } else if (auth?.accessToken) {
    const data = jwtDecode(auth?.accessToken || '')
    return data.user
  } else {
    return {}
  }
}
export const loginUser = async (email, password, func) => {
  const res = await FetchApi({ url: 'admin/signInAllUsers', method: 'post', data: { email, password }, callback: func })
  console.log(res)
  if (res.status === 200) {
    console.log(res?.data.user)
    store.dispatch(setAuth(res?.data))

  }

  return res;

}

export const logoutUser = () => {
  store.dispatch(setAuth({}))
  window.location = '/login'
}

