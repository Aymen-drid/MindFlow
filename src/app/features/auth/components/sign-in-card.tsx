"use client"
import { useAuthActions } from "@convex-dev/auth/react";
import {TriangleAlert} from "lucide-react"
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React,{useState} from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"
interface SignInCardProps {
    setState:(state:SignInFlow)=>void;
}

export const SignInCard = ({setState}:SignInCardProps) => {
    const [email, SetEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const onPasswordSignIn = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        signIn("password",{email,password,flow:"signIn"}).then(()=>{
            setPending(false);
        }).catch(()=>{
            setError("Invalid email or password");
        }).finally(()=>{
            setPending(false);});
    }
    const { signIn } = useAuthActions();
    const onProvider = (value: "github"|"google") => {
        setPending(true);
        signIn(value).then(()=>{
            setPending(false);
        });
    }
    
    return (
        
        <Card className="space-y-5 w-full h-full p-8 ">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Log in to continue</CardTitle>
                <CardDescription>Use your email or another service to continue</CardDescription>
            </CardHeader>
            {!!error && (
                <div className="bg-destructive/15 text-destructive rounded-md flex items-center flex-row gap-x-2 p-3  space-x-2.5 text-sm">
<TriangleAlert className="size-4"/>
<p >{error} </p>
                </div>
            )}
            <CardContent className="space-y-5 px-0 pb-0">
                <form action="submit" className="space-y-2.5  " onSubmit={onPasswordSignIn}>
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
                    <Button type="submit" className="w-full" size="lg" disabled={pending}> Continue </Button>
                </form>
                <Separator/>
                <div className="flex flex-col gap-y-2.5 ">
                    <Button className="w-full relative " disabled={pending} onClick={() =>void  onProvider("google")}  size="lg" variant="outline"> <FcGoogle className="absolute size-5 top-2.5 left-2.5" size="lg"/> Continue with google</Button>
                    <Button onClick={() =>void  onProvider("github")} className="w-full relative" disabled={pending}  size="lg" variant="outline"><FaGithub className="absolute size-5 top-2.5 left-2.5"/> Continue with github</Button>


                </div>
            </CardContent>
            <CardFooter className="text-muted-foreground text-xs px-0 pb-0">
                <p>Don&apos;t have an account ?  <span className="text-sky-700 hover:underline cursor-pointer" onClick={()=>{setState("signUp")}}>Sign up</span></p>
            </CardFooter>
        </Card>
        
    );
}
export default SignInCard;
