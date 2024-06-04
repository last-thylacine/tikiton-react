import css from "./Header.module.css"

const APPNAME = "tikiton"

export const Header = () => (
    <div className={css.header}>
        {APPNAME}
    </div>
)
