import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRecoilState } from "recoil";
import { authState } from "@/Auth/Auth";

export default function SigninPage() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [auth,setAuth]=useRecoilState(authState)
  const Navigate = useNavigate();
  const sendRequest = async () => {
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        userDetails
      );
      const token = response.data.token;

      console.log(auth);
      if (token != null) {
        setAuth({isAuthenticated:true})
        Navigate("/main")
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  email: e.target.value,
                })
              }
              id="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  password: e.target.value,
                })
              }
              id="password"
              type="password"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button onClick={sendRequest} className="w-full">
            Sign in
          </Button>
          <p className="flex justify-center pt-2">
            Don't have an account?
            <Link to="/signup" className="pl-1 underline">
              signup
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
