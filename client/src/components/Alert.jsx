const Alert = ({ message, type = "success" }) => {
  if (!message) return null;

  return (
    <div
      className={`p-3 rounded-md text-white ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
