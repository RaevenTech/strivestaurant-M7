import ListGroup from 'react-bootstrap/ListGroup'
import { PropsForDishComments } from '../types/PropsForDishComments'


const DishComments = (props: PropsForDishComments) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c:any) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
