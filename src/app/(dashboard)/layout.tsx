export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>dashboard Layout</h1>
      <div>{children}</div>
    </div>
  );
}
