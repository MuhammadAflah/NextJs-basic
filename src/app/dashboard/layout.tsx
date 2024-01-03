import React from "react";

export default function dashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggeddIn = true;
  return isLoggeddIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div> {revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </>
  ) : (
    login
  );
}
