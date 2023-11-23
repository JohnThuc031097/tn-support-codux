import classNames from 'classnames';
import styles from './page-header.module.scss';
import { Search, Menu } from 'semantic-ui-react';
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
                <Search
                    results={[
                        { title: 'Result with no description' },
                        {
                            title: 'Result with description',
                            description: 'A description of result',
                        },
                        { description: 'An independent, and a little rebellious description' },
                    ]}
                    className={styles.searchItemPage}
                />
            </div>
            <div className={styles.userPage}>
                <Icon size={30} icon={'moon'} className={styles.userIconPage} />
                <Icon size={30} icon={'notifications'} className={styles.userIconPage} />
                <Icon icon={'user'} size={30} className={styles.userIconPage} onClick={() => setOpenUserMenu(!openUserMenu)} />
            </div>
            {openUserMenu && (
                <div className={styles.userMenuPage}>
                    <Menu
                        defaultActiveIndex={0}
                        items={[
                            <Menu.Item
                                key="editorials"
                                name="editorials"
                                className={styles.useMenuItemPage}
                            >
                                Editorials
                            </Menu.Item>,
                            <Menu.Item key="reviews" name="reviews" className={styles.useMenuItemPage}>
                                Reviews
                            </Menu.Item>,
                            <Menu.Item
                                key="upcomingEvents"
                                name="upcomingEvents"
                                className={styles.useMenuItemPage}
                            >
                                Upcoming Events
                            </Menu.Item>,
                        ]}
                        className={styles.userMenuPage}
                    ></Menu>
                </div>
            )}
        </header>
    );
};
