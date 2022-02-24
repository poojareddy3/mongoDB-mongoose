const db = require('./db');
const User = require('./models/user');

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const findAll = async () => {
    const allUsers = await User.find({});
    console.log(allUsers);
}

const findUser = async () => {
    const oneUser = await User.find({ name: 'Julie' });
    console.log(oneUser);
}

const createUser = async () => {
    const newUser = new User({ name: 'Kyle', age: 26, status: 'pending'});
    await newUser.save();
    console.log("Created a new User", newUser);
}

const updateUser = async () => {
    const updatedUser = await User.updateOne({name: 'Kyle', age: 26}, {age: 25});
    console.log(updatedUser);
}

const deleteUser = async () => {
    const deletedUser = await User.deleteOne({ name: 'Abe'});
    console.log(deletedUser);
}

const olderUsers = async () => {
    const oldUsers = await User.find({age: { $gt: 25 }});
    console.log(oldUsers);
}

const youngerUsers = async () => {
    const youngUsers = await User.find({ status: "active", age: { $lt: 25 }})
    console.log(youngUsers);
}

const run = async () => {
    await findAll();
    await findUser();
    await createUser();
    await updateUser();
    await deleteUser();
    await olderUsers();
    await youngerUsers();
    db.close();
}

run();