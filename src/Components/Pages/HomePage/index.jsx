import React from 'react';
import Header from "../Header";
import {useRouter} from "next/router";

const HomePage = () => {
    const router=useRouter()
    const pushing=()=>{
        router.push("/login")
    }
    setTimeout(pushing, 10);
  return (
    <div>
      <Header/>
      11
    </div>
  );
};

export default HomePage;