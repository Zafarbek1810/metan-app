import { useRouter } from "next/router";
import React from "react";
import MyLink from "../../../Common/MyLink";
import { RightNavWrapper } from "./RightNav.style";

const RightNav = ({ open }) => {
  const router = useRouter();
  return (
    <RightNavWrapper open={open}>
      <ul>
        <li>
          <MyLink  to="/" className={router.pathname == "/" ? "active" : "link"}>
            Home
          </MyLink>
        </li>
        <li>
          <MyLink  to="/dashboard/table" className={router.pathname == "/link" ? "active" : "link"}>
            Link
          </MyLink>
        </li>
        <li>
          <MyLink  to="/dashboard/table" className={router.pathname == "/link" ? "active" : "link"}>
            Link
          </MyLink>
        </li>
        <li>
          <MyLink  to="/dashboard/table" className={router.pathname == "/link" ? "active" : "link"}>
            Link
          </MyLink>
        </li>
        <li>
          <MyLink to="/login" className="login">ЛОГИН</MyLink>
        </li>
      </ul>

    </RightNavWrapper>
  );
};

export default RightNav;
