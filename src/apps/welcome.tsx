import React from "react";

interface WelcomeProps {
user: {
name: string,
age: number,
},
label: string
}

class Welcome extends React.Component<WelcomeProps> {
name = '';
age = 0;

/*constructor(user = {age: 0}) {
this.age = user.age;

//console.log(user);
}*/

render () { // метод для работы сс компонентами
//console.log(this.props);
const {user, label} = this.props;

// return 'Hello, ' + user.name;

return <p style={{'color': label}}>Hello, {user.name}</p>;
}
}
export default Welcome;