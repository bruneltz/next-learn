// loading.tsx is a special Next.js file built on top of Suspense, it allows you to create 
// fallback UI to show as a replacement while page content loads.

// The user doesn't have to wait for the page to finish loading before navigating
// away (this is called interruptable navigation).


// When you create a new folder using parentheses (), the name won't be included in the URL path.
import DashboardSkeleton  from "@/app/ui/skeletons"

export default function Loading() {
    return <DashboardSkeleton />;
  }