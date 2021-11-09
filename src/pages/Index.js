import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
      name: "",
      countryOfOrigin: "",
      image: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.cheese.map((cheeses) => (
      <div key={cheeses._id} className="cheeses">
        <Link to={`/cheese/${cheeses._id}`}><h1>{cheeses.name}</h1></Link>
        <img src={cheeses.image} alt={cheeses.name} />
        <h3>{cheeses.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
}

export default Index;