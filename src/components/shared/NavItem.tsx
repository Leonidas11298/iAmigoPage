import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface NavItemProps {
    to: string;
    text: string;
}

export const NavItem = ({ to, text }: NavItemProps) => {
    return (
        <li>
            <Link to={to} className="duration-300 font-medium ease-linear hover: text-primary py-3">
                {text}
            </Link>
        </li>
    );
};

export const HasItem = ({ to, text }: NavItemProps) => {
    return (
        <li>
            <HashLink to={to} className="duration-300 font-medium ease-linear hover: text-primary py-3">
                {text}
            </HashLink>
        </li>
    )
}
