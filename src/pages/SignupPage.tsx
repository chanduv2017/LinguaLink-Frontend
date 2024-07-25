import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [userDetails, setUserDetails] = useState({
    username:"",
    email:"",
    password:"",
  });
  const Navigate=useNavigate();
  const sendRequest =async ()=>{
    try{
      const response=await axios.post(`${import.meta.env.VITE_API_BASE_URL}/signup`,userDetails);
      const jwt=response.data.jwt;
      localStorage.setItem("token",jwt);
      console.log("user created sucessfully");
      Navigate("/signin");
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>Create your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => setUserDetails({
                ...userDetails,
                username:e.target.value,
              })}
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setUserDetails({
                ...userDetails,
                email:e.target.value,
              })}
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => setUserDetails({
                ...userDetails,
                password:e.target.value,
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button onClick={sendRequest} className="w-full">Sign Up</Button>
          <p className="flex justify-center pt-2">
            Already have an account? 
            <Link to="/signin" className="pl-1 underline">
              login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}


