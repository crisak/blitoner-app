import { Container } from '@nextui-org/react'
import { Project } from '../../models'

const DetailProject = ({
  id,
  name,
  description,
  date,
  userID,
  categoryID
}: Project) => {
  return (
    <Container>
      <h2>{name}</h2>
      <p>
        <strong>id</strong>
        <br />
        {id}
      </p>
      <p>
        <strong>Description</strong>
        <br />
        {description}
      </p>
      <p>
        <strong>date</strong>
        <br />
        {date}
      </p>
      <p>
        <strong>User id</strong>
        <br />
        {userID}
      </p>
      <p>
        <strong>Usercategory ID</strong>
        <br />
        {categoryID}
      </p>
    </Container>
  )
}

export default DetailProject
