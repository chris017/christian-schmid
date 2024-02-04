import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <div className="">
      {await isAuthenticated() ? (
        <h1 className='text-3xl text-center mt-6'>Hello User</h1>
      ) : (
        <div>This page is protected, please Login to view it</div>
      )}
    </div>
  );
}
