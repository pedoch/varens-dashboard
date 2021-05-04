import { Button } from "antd";

export default function Users() {
  return (
    <div className="col-span-1 bg-white shadow-xl rounded-xl mt-8 mr-4">
      <p className="m-6">Users</p>
      <div className="flex p-6 pt-0">
        <div>
          <p className="text-xs text-gray-400">New Users</p>
          <p className="text-3xl font-semibold">57m</p>
          <p className="text-green-500">21.77%</p>
        </div>
        <img src="/images/small-graph.svg" className="mx-auto" />
      </div>
      <hr className="bg-gray-200 h-px w-full" />
      <div className="flex p-6">
        <div>
          <p className="text-xs text-gray-400">New Users</p>
          <p className="text-3xl font-semibold">36k</p>
          <p className="text-green-500">21.77%</p>
        </div>
        <img src="/images/small-graph.svg" className="mx-auto" />
      </div>
      <hr className="bg-gray-200 h-px w-full" />
      <Button type="link" className="text-text-link w-full p-4 pb-8">
        Go to setting
      </Button>
    </div>
  );
}
