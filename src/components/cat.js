function Cat({img, name, age}) {
    if (name == undefined) {
        name = "You have to provide a name"
    }
    return (

        <div>
            <img src={img} alt="img-cat"/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>


    );
}

export default Cat;