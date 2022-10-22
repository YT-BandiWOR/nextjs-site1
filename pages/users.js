import Link from "next/link";
import {useState} from "react";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer bodyTitle="Список пользователей" pageTitle="Список пользователей" keywords="список пользователей, пользователи, список">
            {
                users.map(user=>(
                    <div key={user.id} className="user">
                        <h1>{user.id}) {user.name}</h1>
                        <Link href={`users/${user.id}`}>
                            <a className="toUser-link">Профиль</a>
                        </Link>
                    </div>
                ))
            }
        </MainContainer>
    );
};

export default Users;


export async function getStaticProps(context) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

    return {
        props: {users}
    }
}