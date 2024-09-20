
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Department of Computer Engineering Regional Language. All rights reserved.
          </p>
          <p className="text-center text-xs">By Atharva Atul Desai</p>
        </div>
      </footer>
    );
  }
  