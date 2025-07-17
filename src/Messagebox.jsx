function Messagebox({message, color , features , object1}) {

    let name1 = object1.name == "Sunny" ? "correst name" : null;
  return (
    <>
     <p>{message}</p>
     <p>{color}</p>
     <p>{features}</p>
     <p>{object1.name}</p>
     <p>{name1}</p>
    </>
  );
}

export default Messagebox;