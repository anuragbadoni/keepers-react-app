import DeleteIcon from '@mui/icons-material/Delete';




function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={ () => {
        props.del(props.id); //THIS IS HOW WE PASS VALUES 
      }}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
