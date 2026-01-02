const Footer = () => {
  return (
    <div>
      <footer className="py-4 text-center bg-white border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AI Fertilizer Advisor. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
