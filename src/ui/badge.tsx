import { Close } from "./icons";

interface Props {
  onClick?: () => void;
  onClose?: () => void;
  primary?: boolean;
  content: string;
}
export const Badge = ({ onClose, primary, content, onClick }: Props) => {
  const badgeColor = primary
    ? "text-purple bg-[#f4ebff]"
    : "text-gray-700 bg-gray-100";
  return (
    <div
      className={`cursor-pointer flex items-center text-sm px-2 rounded-full font-medium gap-1 ${badgeColor}`}
      onClick={onClick}
    >
      <span>{content}</span>
      {onClose ? (
        <button onClick={onClose}>
          <Close size={12} />
        </button>
      ) : null}
    </div>
  );
};
