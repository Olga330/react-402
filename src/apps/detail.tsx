import React from "react";
import { IUser } from "./interfaces/user";



interface DetailProps {
    user: IUser
}

class Detail extends React.Component<DetailProps> {
    render() {
        const {user} = this.props;

        return <>
            <ol>
                <li>Number: {user.emp_no}</li>
                <li>Last name: {user.last_name}</li>
                <li>Name:  {user.first_name} </li>
                <li>Gender:  {user.gender} </li>
                <li>Birthday: {user.birth_date}</li>
                <li>Hire date: {user.hire_date}</li>
            </ol>
        </>;
    }
}

export default Detail;