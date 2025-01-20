"use client"
import { TriangleAlert } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"
interface SignInCardProps {
    setState: (state: SignInFlow) => void;
}
export const SignUpCard = ({ setState }: SignInCardProps) => {
    const [email, SetEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [name, setName] = useState<string>("");
    const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Passwords do not match ");
            return;
        }
        setPending(true);
        signIn("password", { name ,email, password, flow: "signUp" }).then(() => {
            setPending(false);
        }).catch(() => {
            setError("Something went wrong");
        }).finally(() => {
            setPending(false);
        });
    }
    const { signIn } = useAuthActions();
    const onProvider = (value: "github" | "google") => {
        setPending(true);
        signIn(value).then(() => {
            setPending(false);
        });
    }
    return (

        <Card className="space-y-5 w-full h-full p-8 ">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Sign up to continue</CardTitle>
                <CardDescription>Use your email or another service to continue</CardDescription>
            </CardHeader>
            {!!error && (
                <div className="bg-destructive/15 text-destructive rounded-md flex items-center flex-row gap-x-2 p-3  space-x-2.5 text-sm">
                    <TriangleAlert className="size-4" />
                    <p >{error} </p>
                </div>
            )}
            <CardContent className="space-y-5 px-0 pb-0">
                <form onSubmit={onPasswordSignUp} action="submit" className="space-y-2.5  ">
                    <Input
                        value={name}
                        disabled={pending}
                        placeholder="Full Name"
                        onChange={(e) => { setName(e.target.value) }}
                        required
                        
                    ></Input>
                    <Input
                        disabled={pending}
                        value={email}
                        placeholder="Email"
                        onChange={(e) => { SetEmail(e.target.value) }}
                        required
                        type="email"
                    ></Input>
                    <Input
                        value={password}
                        disabled={pending}
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                        type="password"
                    ></Input>
                    <Input
                        value={confirmPassword}
                        disabled={pending}
                        placeholder="Confirm Password"
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        required
                        type="password"
                    ></Input>
                    <Button type="submit" className="w-full" size="lg" disabled={pending}> Continue </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5 ">
                    <Button className="w-full relative " disabled={pending} onClick={() => { onProvider("google") }} size="lg" variant="outline"> <FcGoogle className="absolute size-5 top-2.5 left-2.5" size="lg" /> Continue with google</Button>
                    <Button className="w-full relative" disabled={pending} onClick={() => { onProvider("github") }} size="lg" variant="outline"><FaGithub className="absolute size-5 top-2.5 left-2.5" /> Continue with github</Button>


                </div>
            </CardContent>
            <CardFooter className="text-muted-foreground text-xs px-0 pb-0">
                <p>Already  have an account ?  <span className="text-sky-700 hover:underline cursor-pointer" onClick={() => { setState("signIn") }}>Sign in</span></p>
            </CardFooter>
        </Card>

    );
}
export default SignUpCard;