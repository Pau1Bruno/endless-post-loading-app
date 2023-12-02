import styles from "./error.module.scss";

const Error = () => {
    return (
        <div className={styles.error}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>Not Found</i>
            </p>
        </div>
    );
}

export default Error;