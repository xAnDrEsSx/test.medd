// Zod
import { z } from "zod";

// Login Schema
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

// Forgot Password Schemas
export const forgotPasswordEmailSchema = z.object({
    email: z.string().email(),
});

export const forgotPasswordCodeSchema = z.object({
    code: z.string().length(4),
});

export const forgotPasswordChangechema = z.object({
    password: z.string(),
    confirmPassword: z.string(),
});

export type TForgotPasswordEmailSchema = z.infer<
    typeof forgotPasswordEmailSchema
>;

export type TForgotPasswordCodeSchema = z.infer<
    typeof forgotPasswordCodeSchema
>;

export type TForgotPasswordChangeSchema = z.infer<
    typeof forgotPasswordChangechema
>;
