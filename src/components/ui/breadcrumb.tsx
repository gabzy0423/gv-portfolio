import type { ComponentProps, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { cn } from "cn"

function Breadcrumb({ className, ...props }: ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" className={cn("", className)} {...props} />
}

function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) {
  return <ol className={cn("flex items-center gap-2", className)} {...props} />
}

function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) {
  return <li className={cn("inline-flex items-center gap-2", className)} {...props} />
}

function BreadcrumbLink({ className, ...props }: LinkProps & { className?: string; children?: ReactNode }) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 font-pixel text-sm font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    />
  )
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList }
