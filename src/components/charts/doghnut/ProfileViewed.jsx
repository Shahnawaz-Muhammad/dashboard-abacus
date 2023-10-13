import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 3],
      backgroundColor: [
        "#FF5733",
        "#FFC300",
        "#0EC227",
        "#7730CD",
        "#EB7D08",
      ],
      borderColor: [
        "#FF5733",
        "#FFC300",
        "#0EC227",
        "#7730CD",
        "#EB7D08",
      ],
      borderWidth: 1,
    },
  ],
};

export default function ProfileViewed() {
  return(
<div className="w-full h-full flex items-center justify-center">
<Doughnut data={data} />

</div>  )
}
