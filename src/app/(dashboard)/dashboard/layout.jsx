function DashboardLayout({ children }) {
  return (
    <div>
      <div className="bg-green-400 p-6">Dashboard Layout</div>
      {children}
      <footer>Dashboard footer</footer>
    </div>
  );
}

export default DashboardLayout;
