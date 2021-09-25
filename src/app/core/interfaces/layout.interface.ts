export interface TopNavigationItem {
    link: string,
    exact: boolean,
    name: string
}

export interface MainNavigationItem {
    link: string,
    exact: boolean,
    name: string,
    hasCaret: boolean,
    children?: SubMenu[]
}

export interface SubMenu {
    sectionTitle: string,
    sectionName: string[]
}