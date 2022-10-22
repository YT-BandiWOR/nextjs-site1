import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    return (
        <MainContainer bodyTitle={"Пользователь "+user.name} pageTitle={"Данные пользователя: "+user.name}
        keywords={"пользователь, данные, подробнее, кирилл, пацан, "+user.name}>
            <h1>Пользователь №{user.id}</h1>
            <p>Имя: {user.name}</p>
            <p>Тэг: @{user.username}</p>
            <p>Телефон: {user.phone}</p>
            <p>Сайт: {user.website}</p>
            <h1>EMail:</h1>
            <code>{user.email}</code>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user},
    }
}