"use client";
import React, { useState } from "react";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { SignInFlow } from "../types";
export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="h-full w-full items-center justify-center bg-[#5c3b58]  flex ">
      <div className="md:h-auto md:w-[420px] ">
        {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
      </div>
    </div>
  );
}
export default AuthScreen;