import A from "./A";
import classes from "../styles/MainContainer.module.scss";
import Head from "next/head";

const MainContainer = ({children, pageTitle, bodyTitle, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"bandwor, бандивор, кирилл морозов, александровское, " + keywords}/>
                <title>{pageTitle}</title>
            </Head>
            <div className="navbar">
                <A href="/">Главная страница</A>
                <A href="/users/">Пользователи</A>
            </div>
            <hr/>
            <h1 style={{textAlign: "center"}}>{bodyTitle}</h1>
            <hr/>
            <div className={classes.content}>
            {children}
            </div>
        </>
    );
};

export default MainContainer;