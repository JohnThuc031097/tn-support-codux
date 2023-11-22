import classNames from 'classnames';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';
import styles from './sidebar.module.scss';
import LogoImg from '../../assets/logo.png';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={LogoImg} alt="Tn-Support logo" />
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="insights" aria-hidden />
                    Overview
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="list" aria-hidden />
                    Transactions
                    <Icon glyph='angleDown' aria-hidden />
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="creditCard" aria-hidden />
                    Cards
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="draft" aria-hidden />
                    Invoices
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="verified" aria-hidden />
                    Goals
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="settings" aria-hidden />
                    Settings
                </Nav.Item>
            </Nav></div>
    );
};
