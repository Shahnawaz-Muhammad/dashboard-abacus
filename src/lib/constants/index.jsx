import {
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "My Account",
    label: "My Account",
    path: "/",
    icon: <HiOutlineViewGrid   className="text-xl"/>,
  },
  {
    key: "My Adverts",
    label: "My Adverts",
    path: "/adverts",
    icon: <HiOutlineUsers  className="text-xl"/>,
  },
  {
    key: "My Projects",
    label: "My Projects",
    path: "/my-projects",
    icon: <HiOutlineShoppingCart  className="text-xl"/>,
  },
  {
    key: "Post a Project",
    label: "Post a Project",
    path: "/post-project",
    icon: <HiOutlineDocumentText  className="text-xl"/>,
  },
  {
    key: "My Jobs",
    label: "My Jobs",
    path: "/my-jobs",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "Post a job",
    label: "Post a job",
    path: "/post-job",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "Applicants",
    label: "Applicants",
    path: "/applications",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "Interviews",
    label: "Interviews",
    path: "/interviews",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "Shortlisted",
    label: "Shortlisted",
    path: "/shortlisted",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "My Votes",
    label: "My Votes",
    path: "/my-votes",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "My Reviews",
    label: "My Reviews",
    path: "/my-reviews",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "Project",
    label: "Project",
    path: "/project",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "My Watchlist",
    label: "My Watchlist",
    path: "/my-watchlist",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },
  {
    key: "Events",
    label: "Events",
    path: "/events",
    icon: <HiOutlineAnnotation  className="text-xl"/>,
  },

  
];
