import NoteAddIcon from '@mui/icons-material/NoteAdd';


function CreateArea(props) {
  return (
    <div >
      <form>
        <input onChange={props.changed1} name="title" placeholder="Title" value={props.val}/>
        <textarea onChange={props.changed2} name="content" placeholder="Take a note..." rows="3" value={props.val2}/>
        <button onClick={props.clicked}><NoteAddIcon fontSize='medium'/></button>
      </form>
    </div>
  );
}

export default CreateArea;
