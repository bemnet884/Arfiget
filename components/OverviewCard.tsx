export const OverviewCard = ({ title, value }: { title: string; value: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-md border">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="mt-2 text-2xl font-bold text-gray-800">{value}</p>
  </div>
);
