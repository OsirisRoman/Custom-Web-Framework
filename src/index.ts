import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "NAME", age: 20 });

const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();

// import { Collection } from "./models/Collection";
// import { User, UserProps } from "./models/User";

// const collection = User.buildUserCollection();

// collection.on("change", () => {
//   console.log(collection);
// });

// collection.fetch();
