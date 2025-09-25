import { UserProps } from "@/interfaces";

const UserCard = ({ id,name, email, address }: UserProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
