function Messagebox({message, color , features , object1}) {
    let styles = {backgroundColor : "green"};
    let isColor = object1.name == "Sunny" ? styles : {backgroundColor : "red"};
  return (
    <>
     <p style={styles}>{message}</p>
     <p>{color}</p>
     <p style={isColor}>{features.map((feature) => <li>{feature}</li>)}</p>
     <p>{object1.name}</p>
     {object1.name == "SunnySethia" ? <p>"correst name"</p> : null}
    </>
  );
}

export default Messagebox;