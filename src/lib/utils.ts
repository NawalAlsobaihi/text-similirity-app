import { clsx, type ClassValue } from "clsx";
import { COMPILER_INDEXES } from "next/dist/shared/lib/constants";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))

}