export {Perfil, Bio, LinkLinkedIn};

function Perfil(props) {

  const tituloPagina = <h1>Oba,<br/>minha namorada se chama<br/> {props.namorada}!</h1>;
  const tagFotoPerfil = <img src={props.imgperfil} className="inline_img"></img>;

  const perfilContent = (
    <div>
      <div className="titulo">
        {tituloPagina}
      </div>
      <div>
        {tagFotoPerfil}
      </div>
    </div>);

  return perfilContent;
}

function Bio() {
  const minibio = <div className="minibio">
    22 anos, apaixonado por aprender e muito interessado pela programação.<br/>
    Tenho habilidades comprovadas com SQL, Oracle PL/SQL desenvolvendo procedures, packages, functions, triggers, entre outros e Oracle APEX.<br/>
    Dedicando a aprender mais sobre conceitos do desenvolvimento Web e linguagens como Javascript e GO.<br/>
  </div>;
  return minibio;
}

function LinkLinkedIn() {
  return (
    <div className="linkedin">
      <a href="https://www.linkedin.com/in/joao-pedro-nobre-cruz/">LinkedIn</a>
    </div>);
}