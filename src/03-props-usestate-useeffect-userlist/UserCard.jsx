//-----child component-------//
import { IMG_URL } from "../utils";
const UserCard = ({ user }) => {
  const { name, email, address } = user;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={IMG_URL + user.id} className="card-img-top mb-4" alt="profile" />
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          <strong>Email:</strong>
          {email}
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          <strong>Address:</strong>
          {address.street}
          <br />
          {address.suite}
          <br />
          {address.city}
          <br />
          {address.zipcode}
        </h6>
      </div>
    </div>
  );
};
export default UserCard;
