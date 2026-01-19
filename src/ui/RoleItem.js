const RoleItem = (props) => (
    <div>
        <h3>{props.title}</h3>
        <h4 className="text-muted">{props.date}</h4>
        <p>{props.summaryOne}</p>
        <p>{props.summaryTwo}</p>
        <p>{props.summaryThree}</p>
        <br></br>
    </div>
);

export default RoleItem;