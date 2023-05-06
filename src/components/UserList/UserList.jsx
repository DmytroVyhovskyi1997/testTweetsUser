import { Card } from "components/Card/Card"

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <Card key={user.id} users={user} />
      ))}
    </ul>
  )
}
