import styles from '../styles/Home.module.css'
import {ButtonCont, SelectionButton} from './styles'
import Form from './components/forms/forms'
import { Wrapper } from './styles'
import { BackgroundImage } from './styles'
export default function Home() {
  return (
    <div>
      <Form></Form>
      <ButtonCont>
      <SelectionButton>Rock</SelectionButton>
      <SelectionButton>Paper</SelectionButton>
      <SelectionButton>Scissors</SelectionButton>
      </ButtonCont>
    </div>
  )
}
