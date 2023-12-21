import './App.css';
import { Perfil, Bio, LinkLinkedIn } from './perfil';

function App() {
  return (
    <div>
      <Perfil namorada="Amanda" imgperfil='./certificação.jpg'/>
      <br/>
      <Bio />
      <br/><br/>
      <LinkLinkedIn />
    </div>);
}

export default App;
