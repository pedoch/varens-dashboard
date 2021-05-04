import MainLayout from "../components/common/MainLayout";
import Head from "next/head";
import styled from "styled-components";
import ActiveUsers from "../components/views/campaigns/ActiveUsers";
import Users from "../components/views/campaigns/Users";
import Income from "../components/views/campaigns/Income";

// const Main = styled.div`
//   @apply col-span-2
// `

export default function Campaigns() {
  return (
    <MainLayout>
      <Head>
        <title>Campaigns</title>
      </Head>
      <div className="grid grid-cols-3 w-full max-w-6xl mx-auto h-full">
        <div className="col-span-2 p-10 w-full h-full grid grid-cols-2 border-r border-gray-300">
          <div className="mb-5">
            <p className="text-xl font-semibold">Hi Dash UI8,</p>
            <p className="text-4xl font-semibold">Campaigns</p>
          </div>
          <ActiveUsers />
          <Users />
          <Income />
        </div>
      </div>
    </MainLayout>
  );
}
