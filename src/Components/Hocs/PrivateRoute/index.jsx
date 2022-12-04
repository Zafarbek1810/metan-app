import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useContextSelector} from "use-context-selector";
import UserContext from "../../../Context/UserContext";

export default function WithAuthComponent({children}) {
  const isAuth = useContextSelector(UserContext, ctx => ctx.state.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth])

  return (
    <>
      {
        (isAuth)
          ? children
          : <div></div>
      }
    </>
  )
};
