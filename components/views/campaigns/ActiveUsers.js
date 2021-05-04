// import { Column } from "@ant-design/charts";

export default function ActiveUsers() {
  var data = [
    {
      year: "Jan",
      value: 100,
      type: "New Users",
    },
    {
      year: "Feb",
      value: 45,
      type: "New Users",
    },
    {
      year: "Mar",
      value: 20,
      type: "New Users",
    },
    {
      year: "Apr",
      value: 120,
      type: "New Users",
    },
    {
      year: "Jan",
      value: 340,
      type: "Users",
    },
    {
      year: "Feb",
      value: 216,
      type: "Users",
    },
    {
      year: "Mar",
      value: 309,
      type: "Users",
    },
    {
      year: "Apr",
      value: 360,
      type: "Users",
    },
  ];

  // var config = {
  //   data: data,
  //   isStack: true,
  //   xField: "year",
  //   yField: "value",
  //   maxColumnWidth: 5,
  //   seriesField: "type",
  //   autoFit: true,
  //   label: {
  //     position: "middle",
  //     layout: [
  //       { type: "interval-adjust-position" },
  //       { type: "interval-hide-overlap" },
  //       { type: "adjust-color" },
  //     ],
  //   },
  //   color: "white",
  // };

  const stats = [
    { name: "Users", number: "36k", color: "#6C5DD3", icon: "graph.svg" },
    { name: "Clicks", number: "1m", color: "#FFA2C0", icon: "graph.svg" },
    { name: "Sales", number: "327$", color: "#7FBA7A", icon: "graph.svg" },
    { name: "Items", number: "68", color: "#FF9A7B", icon: "graph.svg" },
  ];
  return (
    <div className="col-span-2 p-6 rounded-xl shadow-lg">
      <p className="text-xl font-semibold">Active Users right now 💡</p>
      <div className="mt-10 flex space-x-3">
        <div>
          <p className="text-6xl font-semibold">478</p>
          <div className="flex mt-5">
            <img src="/images/dial.jpg" className="mr-3 w-10 h-10" />
            <p className="w-20 text-text-link">Page views per minute</p>
          </div>
          <hr className="bg-gray-300 my-5" />
          <div className="flex">
            <img src="/images/line-graph.svg" className="mr-2" />
            <img src="/images/icons/caretdown-bluebg.svg" className="mr-2" />
            <p className="text-text-link">6%</p>
          </div>
          <p className="w-40 mt-5 text-gray-300">
            Update your payout method in Settings
          </p>
        </div>
        <div className="w-full min-h-full bg-text-link rounded-xl p-6 text-white">
          {/* <Column
            legend={false}
            columnStyle={{
              style: {
                color: "white",
                cursor: "pointer",
              },
            }}
            {...config}
          /> */}
        </div>
      </div>
      <div className="w-full border border-gray-400 rounded-xl grid grid-cols-4 mt-8">
        {stats.map((stat, index) => {
          return (
            <div
              key={stat.name}
              className={`p-6 flex flex-col  ${
                index != stats.length - 1 && "border-r border-gray-400"
              }`}
            >
              <p className="text-sm mb-3 flex">
                <img src={`/images/icons/${stat.icon}`} className="mr-3" />{" "}
                {stat.name}
              </p>
              <p className="text-5xl font-semibold">{stat.number}</p>
              <span className="min-w-full h-0.5 mt-3 relative">
                <hr className="bg-gray-100 h-0.5 w-full absolute" />
                <hr
                  className="w-1/2 absolute h-0.5"
                  style={{ backgroundColor: stat.color }}
                ></hr>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
