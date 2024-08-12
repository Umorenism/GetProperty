interface ButtonProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className="px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300 text-white bg-green-400">
      {title}
    </div>
  );
};
