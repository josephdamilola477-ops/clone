
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Home, ShoppingBag, User, Settings, PanelLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2">
              <svg
                className="h-8 w-8 text-foreground"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="48" stroke="red" strokeWidth="4" />
                <path d="M50 50L85.3 37.5L78.8 68.3L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L78.8 68.3L59.3 84.4L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L59.3 84.4L31.7 84.4L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L31.7 84.4L21.2 68.3L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L21.2 68.3L14.7 37.5L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L14.7 37.5L31.7 15.6L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L31.7 15.6L59.3 15.6L50 50Z" fill="#4A4A4A" />
                <path d="M50 50L59.3 15.6L85.3 37.5L50 50Z" fill="#4A4A4A" />
                <text x="42" y="60" fontFamily="Arial" fontSize="24" fill="red" fontWeight="bold" textAnchor="end" > M </text>
                <line x1="44" y1="40" x2="44" y2="60" stroke="white" strokeWidth="2" />
                <text x="46" y="60" fontFamily="Arial" fontSize="24" fill="white" fontWeight="bold" textAnchor="start"> I </text>
              </svg>
               <span className="font-semibold text-xl group-data-[collapsible=icon]:hidden">
                Admin
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                 <SidebarMenuButton asChild isActive={isActive("/admin")} tooltip="Dashboard">
                  <Link href="/admin">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith("/admin/products")} tooltip="Products">
                  <Link href="/admin/products">
                    <ShoppingBag />
                    <span>Products</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-col flex-1">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-background px-6">
            <div className="flex-1">
                <SidebarTrigger className="md:hidden"/>
            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-muted/40"
                  />
                </div>
              </form>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
