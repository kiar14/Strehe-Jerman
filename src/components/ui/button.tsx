import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const buttonVariants=cva('button', {variants:{variant:{default:'button-bronze',outline:'button-outline',dark:'button-dark'}},defaultVariants:{variant:'default'}});
export function Button({className,variant,...props}:React.ComponentProps<'button'>&VariantProps<typeof buttonVariants>){return <button className={cn(buttonVariants({variant,className}))} {...props}/>;}
