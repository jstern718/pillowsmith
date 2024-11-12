import {
    NavLink,
} from "react-router-dom";

export default function NavLinkWithColor(props) {
    let address = props.address;
    let name = props.name;


    return (
        <NavLink
            to={`../pages/${address}`}
            className={({ isActive, isPending }) =>
            isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }
            >
                {name}
        </NavLink>
    );
}