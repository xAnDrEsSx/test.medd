// NextJS
import { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";

// Services
import { login } from "@services/auth";

// Configs
import {
    NEXT_COGNITO_CLIENT_ID,
    NEXT_COGNITO_CLIENT_SECRET,
    NEXT_COGNITO_ISSUER,
} from "@configs/env";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return;

                const { email, password } = credentials;

                const response = await login({ email, password });

                if (response.status === 200) {
                    const user = response.data;
                    return user;
                }

                return;
            },
        }),
        CognitoProvider({
            clientId: NEXT_COGNITO_CLIENT_ID,
            clientSecret: NEXT_COGNITO_CLIENT_SECRET,
            issuer: NEXT_COGNITO_ISSUER,
        }),
    ],
    pages: {
        signIn: "/es",
    },
};
