import css from "./Main.module.css"

export const Main = ({ children }) => (
    <div className={css.main}>
        {children}
    </div>
)
