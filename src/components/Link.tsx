'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  href?: string;
  children?: React.ReactNode;
  scroll?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, href, scroll, ...props },
  ref
) {
  const destination = href || to || '/';
  return <NextLink ref={ref} href={destination} scroll={scroll} {...props} />;
});

export default Link;
