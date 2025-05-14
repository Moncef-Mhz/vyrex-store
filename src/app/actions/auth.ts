import { auth } from "@/lib/auth";
import { LoginType, NewUserType } from "@/types/auth";
import { redirect } from "next/navigation";

export const register = async (data: NewUserType) => {
  const { email, firstName, lastName, password } = data;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        password,
      },
    });

    redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (data: LoginType) => {
  const { email, password } = data;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    redirect("/");
  } catch (error) {
    console.log(error);
  }
};
