import { Button } from "antd";

export default function Income() {
  return (
    <div className="col-span-1 bg-primary shadow-xl rounded-xl mt-8 ml-4 p-2">
      <p className="text-white m-4 mb-6">Income</p>
      <div className="p-6 bg-white rounded-xl">
        <img src="/images/double-line-chart.svg" />
        <Button className="text-white bg-black w-full p-4 pb-8 rounded-xl mt-5">
          Go to setting
        </Button>
      </div>
    </div>
  );
}
