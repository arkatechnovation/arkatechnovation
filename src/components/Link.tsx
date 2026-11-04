'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  href?: string;
  children?: React.ReactNode;
  scroll?: boolean;
  prefetch?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, href, scroll, prefetch = false, ...props },
  ref
) {
  const destination = href || to || '/';
  return <NextLink ref={ref} href={destination} scroll={scroll} prefetch={prefetch} {...props} />;
});

export default Link;
