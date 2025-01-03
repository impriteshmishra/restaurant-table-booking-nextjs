const Footer = () => {
    return (
      <footer className="bg-green text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Restaurant Table Booking. All rights reserved.
          </p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              
                Privacy Policy
              
            </li>
            <li>
              
                Terms of Service
              
            </li>
            <li>
              
                Contact Us
              
            </li>
          </ul>
          <div className="mt-4">
            <p className="text-sm text-white">
              Made with ❤️ by Pritesh
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  