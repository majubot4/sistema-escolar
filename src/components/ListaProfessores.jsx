import CardProfessor from "./CardProfessor";

function ListaProfessores(props) {
  return (
    <div className="lista-professores">
      {props.professores.map(function (professor) {
        return (
          <CardProfessor
            key={professor.id}
            professor={professor}
            aoExcluir={props.aoExcluir}
          />
        );
      })}
    </div>
  );
}

export default ListaProfessores;