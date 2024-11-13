import { ElementType, ReactNode, ButtonHTMLAttributes, ImgHTMLAttributes } from 'react';

export interface TextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'textxs' | 'texts' | 'textmd';
}

export interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'headingxs' | 'headings';
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: string;
  variant?: string;
  shape?: 'round';
  size?: 'xs';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
}

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  alt?: string;
}