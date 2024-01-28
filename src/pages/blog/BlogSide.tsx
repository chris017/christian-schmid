import Blog from '../../components/Blog'
import NavOut from '@/components/NavOut'
import NavIn from '@/components/NavIn'
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
export default function BlogSide() {
    const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) {
    return <>Loading...</>; // Display loading indicator while authentication is in progress
  } else if (isAuthenticated) {
    return (
      <>
        <NavIn />
        <Blog />
      </>
    );
  } else {
    return (
      <>
        <NavOut />
        <Blog />
      </>
    );
  }
}