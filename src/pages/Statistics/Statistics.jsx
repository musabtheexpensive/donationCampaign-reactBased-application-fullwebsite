import { PieChart, Pie, Tooltip } from "recharts";

const totalDonation = 13;
const yourDonation = 2;

const totalDonationPc = 100 - (yourDonation * 100) / totalDonation;
const yourDonationPc = (yourDonation * 100) / totalDonation;
const data = [
  { name: "Total Donation", value: totalDonationPc },
  { name: "Your Donation", value: yourDonationPc },
];

const Statistics = () => {
  return (
    <div className="flex justify-center">
      <PieChart width={600} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
