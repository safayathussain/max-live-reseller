import { store } from "@/redux/store";
import { FetchApi } from "./FetchApi";
import { setAuth } from "@/redux/slices/AuthSlice";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
export function capitalizeAllWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
export const getAuth = () => {
  const auth = store.getState().auth?.user?.user;
  if (auth.role === 'BR') {
    return auth
  } else if (auth?.accessToken) {
    const data = jwtDecode(auth?.accessToken || '')
    return data.user
  } else {
    return {}
  }
}
export const loginUser = async (email, password) => {
  const res = await FetchApi({ url: '/admin/signInAllUsers', method: 'post', data: { email, password },  })
  if (res?.status === 200) {
    console.log(res)
    if (res?.data?.user.role === 'BR') {
      store.dispatch(setAuth(res?.data))
      window.location = '/dashboard'
    } else {
      toast.error('Invalid email or password.')
    }

  }
  return res;
}

export const logoutUser = () => {
  store.dispatch(setAuth({}))
  window.location = '/login'
}


export const refetchAuth = async () => {
  const auth = store.getState().auth?.user;
  try {
    
    const res = await FetchApi({
      url: `/user/getUserById/${auth.user._id}`, callback: () => {
      }
    })
    if(res.status === 200) {
      const newObj = {
        ...auth,
        user: res.data.user,
      }
      store.dispatch(setAuth(newObj))
    }
  } catch (error) {
    store.dispatch(setAuth({}))
  }
}
