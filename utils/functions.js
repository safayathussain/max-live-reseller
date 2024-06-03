import { store } from "@/redux/store";
import { FetchApi } from "./FetchApi";
import { setAuth } from "@/redux/slices/AuthSlice";

export function capitalizeAllWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
export const loginUser = async (email, password, func) => {
  const res = await FetchApi({ url: '/auth/signInUser', method: 'post', data: { email, password }, callback: func })
  console.log(res)
  if (res.status === 200) {
    store.dispatch(setAuth(res?.data.user))

  }
  return res;
}
export const logoutUser = () => {
  store.dispatch(setAuth({}))
  window.location = '/login'
}

export const getAuth = () => {
  const auth = store.getState().auth?.user
  if (auth?.accessToken) {
    const data = jwtDecode(auth?.accessToken || '')
    return data.user
  } else if (auth.role === 'HO') {
    return auth
  } else {
    return {}
  }
}