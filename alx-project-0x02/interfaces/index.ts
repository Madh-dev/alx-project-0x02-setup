import { title } from "process";

export interface CardProps{
    title: string;
    content: string;
}
export interface PostModalProps{
    isOpen: boolean;
    onClose: ()=>void;
    onAddPost: (title:string,content:string)=>void;
}
export interface ButtonProps{
    size?: "small" | "medium" | "large";
    shape:"rounded-sm" | "rounded-md" | "rounded-full";
    children: React.ReactNode;
    onClick?: ()=>void;
}
export interface PostProps{
    title: string;
    body:string;
    userId: number;
    id:number;
}