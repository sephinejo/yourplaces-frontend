import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

function UsersList({ items }) {
  if (items.length === 0) {
    return (
      <div>
        <Card className='center'>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className='users-list'>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList;
