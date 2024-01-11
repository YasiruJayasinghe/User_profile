const CreateUser = () => {
  const handleUser = (e) => {
    event.preventDefault();
    const form = e.target;
    // console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, photoURL);

    const user = { name, email, photoURL };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          alert("User added successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="createuser">
      <h2>Create a New User</h2>

      <form onSubmit={handleUser}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your E-mail Address"
        />
        <input
          type="text"
          name="photoURL"
          id="photoURL"
          placeholder="Enter Your photoURL"
        />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default CreateUser;
