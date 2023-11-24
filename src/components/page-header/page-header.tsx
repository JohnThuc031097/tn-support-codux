import classNames from 'classnames';
import styles from './page-header.module.scss';
import { Menu, Input, Label } from 'semantic-ui-react';
import { Icon } from '@blueprintjs/core';
import { useState } from 'react';

export interface PageHeaderProps {
    className?: string;
}






export const PageHeader = ({ className }: PageHeaderProps) => {
    const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
    return (
        <header className={classNames(styles.root, className)}>
            <div className={styles.searchPage}>
                <Input fluid icon="search" placeholder="Search..." className={styles.searchInput} /></div>
            <div className={styles.userPage}>
                <Icon size={25} icon={'moon'} className={styles.userIconPage} />
                <div className={styles.userNoticePage}>
                    <Icon size={25} icon={'notifications'} className={styles.userIconPage} />
                    <Label circular color="red" size="mini" className={styles.userNoticeDot} attached="top right" floating={true} />
                </div>
                <Icon icon={'user'} size={25} className={styles.userIconPage} onClick={() => setOpenUserMenu(!openUserMenu)} />
            </div>
            {openUserMenu && (
                <div className={styles.userMenuPage}>
                    <Menu
                        items={[
                            <Menu.Item
                                key="0"
                                name="account"
                                className={styles.useMenuItemPage}
                            >
                                Account
                            </Menu.Item>,
                            <Menu.Item key="1" name="settings" className={styles.useMenuItemPage}>
                                Settings
                            </Menu.Item>,
                            <Menu.Item
                                key="2"
                                name="logout"
                                className={styles.useMenuItemPage}
                            >
                                Logout
                            </Menu.Item>,
                        ]}
                        className={styles.userMenuPage}
                    ></Menu>
                </div>
            )}
        </header>
    );
};
