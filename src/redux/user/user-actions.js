import { createAction } from "@reduxjs/toolkit";

export const usersLoginAction = createAction("users/login");
export const usersLogoutAction = createAction("users/logout");
export const usersSignUpAction = createAction("users/signup");
