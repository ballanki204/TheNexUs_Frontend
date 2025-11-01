import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Special handling for book page
  if (location.pathname === "/book") {
    const breadcrumbs = [{ label: "Home", path: "/", icon: Home }];
    if (location.state && location.state.fromPage) {
      breadcrumbs.push(location.state.fromPage);
    }
    breadcrumbs.push({ label: "Book a Session", path: "/book" });
    return (
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}

                {index === breadcrumbs.length - 1 ? (
                  // Last item (current page)
                  <span className="text-gray-900 font-medium flex items-center">
                    {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                    {crumb.label}
                  </span>
                ) : (
                  // Previous items (clickable)
                  <Link
                    to={crumb.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  >
                    {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    );
  }

  // Define breadcrumb structure for all sections
  const breadcrumbMap = {
    // Main pages
    about: { label: "About Us", path: "/about" },
    software: { label: "Software Solutions", path: "/software" },
    "digital-marketing": {
      label: "Digital Marketing",
      path: "/digital-marketing",
    },
    "plant-marketplace": {
      label: "Plant Marketplace",
      path: "/plant-marketplace",
    },
    "safety-app": { label: "Safety App", path: "/safety-app" },

    // Software subpages
    healthcare: { label: "Healthcare Software", path: "/software/healthcare" },
    "real-estate": {
      label: "Real Estate Software",
      path: "/software/real-estate",
    },
    "food-restaurant": {
      label: "Food & Restaurant Software",
      path: "/software/food-restaurant",
    },
    "trading-financial": {
      label: "Trading & Financial Software",
      path: "/software/trading-financial",
    },
    "education-elearning": {
      label: "Education & E-Learning Software",
      path: "/software/education-elearning",
    },
    enterprise: { label: "Enterprise Software", path: "/software/enterprise" },
    "it-cloud": { label: "IT & Cloud Solutions", path: "/software/it-cloud" },
    cybersecurity: {
      label: "Cybersecurity Solutions",
      path: "/software/cybersecurity",
    },
    "ai-ml": { label: "AI & Machine Learning", path: "/software/ai-ml" },

    // Careers section
    careers: { label: "Careers", path: "/careers" },
    jobs: { label: "Job Listings", path: "/careers/jobs" },
    job: { label: "Job Details", path: null }, // Dynamic
    apply: { label: "Application", path: null }, // Dynamic
    culture: { label: "Our Culture", path: "/careers/culture" },
    locations: { label: "Locations", path: "/careers/locations" },
    testimonials: { label: "Testimonials", path: "/careers/testimonials" },
    contact: { label: "Contact & Help", path: "/careers/contact" },
  };

  const breadcrumbs = [{ label: "Home", path: "/", icon: Home }];

  // Build breadcrumb trail
  let currentPath = "";
  pathnames.forEach((pathname, index) => {
    currentPath += `/${pathname}`;

    if (breadcrumbMap[pathname]) {
      const crumb = breadcrumbMap[pathname];
      if (crumb.path) {
        breadcrumbs.push({
          label: crumb.label,
          path: crumb.path,
        });
      } else if (pathname === "job" && pathnames[index + 1]) {
        // Handle dynamic job details
        const jobId = pathnames[index + 1];
        breadcrumbs.push({
          label: "Job Details",
          path: `/careers/job/${jobId}`,
        });
      } else if (pathname === "apply" && pathnames[index + 1]) {
        // Handle dynamic application
        const jobId = pathnames[index + 1];
        breadcrumbs.push(
          { label: "Job Listings", path: "/careers/jobs" },
          { label: "Job Details", path: `/careers/job/${jobId}` },
          { label: "Application", path: `/careers/apply/${jobId}` }
        );
      }
    }
  });

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}

              {index === breadcrumbs.length - 1 ? (
                // Last item (current page)
                <span className="text-gray-900 font-medium flex items-center">
                  {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                  {crumb.label}
                </span>
              ) : (
                // Previous items (clickable)
                <Link
                  to={crumb.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                >
                  {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
