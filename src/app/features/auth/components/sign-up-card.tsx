"use client"
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
// import {FaEmail} from "react-icons/fa"
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
export const SignUpCard = ({setState}:SignInCardProps) => {
    const [email, SetEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        
        <Card className="space-y-5 w-full h-full p-8 ">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Sign up to continue</CardTitle>
                <CardDescription>Use your email or another service to continue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form action="submit" className="space-y-2.5  ">
                    <Input
                        disabled={false}
                        value={email}
                        placeholder="Email"
                        onChange={(e) => { SetEmail(e.target.value) }}
                        required
                        type="email"
                    ></Input>
                    <Input
                        value={password}
                        disabled={false}
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                        type="password"
                    ></Input>
                     <Input
                        value={confirmPassword}
                        disabled={false}
                        placeholder="Confirm Password"
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        required
                        type="password"
                    ></Input>
                    <Button type="submit" className="w-full" size="lg" disabled={false}> Continue </Button>
                </form>
                <Separator/>
                <div className="flex flex-col gap-y-2.5 ">
                    <Button className="w-full relative " disabled={false} onClick={()=>{} } size="lg" variant="outline"> <FcGoogle className="absolute size-5 top-2.5 left-2.5" size="lg"/> Continue with google</Button>
                    <Button className="w-full relative" disabled={false} onClick={()=>{} } size="lg" variant="outline"><FaGithub className="absolute size-5 top-2.5 left-2.5"/> Continue with github</Button>


                </div>
            </CardContent>
            <CardFooter className="text-muted-foreground text-xs px-0 pb-0">
                <p>Already  have an account ?  <span className="text-sky-700 hover:underline cursor-pointer" onClick={()=>{setState("signIn")}}>Sign in</span></p>
            </CardFooter>
        </Card>
        
    );
}
export default SignUpCard;