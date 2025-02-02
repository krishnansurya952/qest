export function Button({ children, onClick, variant = "default" }) {
    const baseStyle = "px-4 py-2 rounded text-white font-bold cursor-pointer";
    const styles = {
      default: "bg-blue-500 hover:bg-blue-600",
      destructive: "bg-red-500 hover:bg-red-600",
    };
  
    return (
      <button className={`${baseStyle} ${styles[variant]}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  