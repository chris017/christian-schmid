
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Dashboardside from "../../components/Dashboardside";
export default async function Dashboard() {
  
  // const { isAuthenticated } = getKindeServerSession();
  return (
    <div className="">
      {/* {await isAuthenticated() ? ( */}
        <div>
          <Dashboardside />
       
        </div>
      {/* ) : (
        <div>This page is protected, please Login to view it</div> */}
      {/* )} */}
    </div>
  );
}
