const HourColumn = () => {
  const hours = Array.from({ length: 24 }, (_, i) => `${(i).toString().padStart(2, '0')}h`);

  return (
    <div className="flex flex-col text-sm text-gray-500 w-8">
      {hours.map((hour, index) => (
        <div key={index} className="h-[60px] border-b border-gray-200 text-right text-xs">
          {hour}
        </div>
      ))}
    </div>
  );
};

export default HourColumn;