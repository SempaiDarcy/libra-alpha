// Интерфейс для темы
export interface Theme {
    name: string;
    color: string;
}

// Интерфейс для ссылки
export interface Link {
    name: string;
    icon: JSX.Element; // Используем JSX.Element для иконок
}

// Интерфейс для данных профиля пользователя
export interface UserProfile {
    icon: JSX.Element;
    title: string;
    desc: string;
    iconColor: string;
    iconBg: string;
}

// Интерфейс для задачи
export interface KanbanData {
    Id: string;
    Title: string;
    Status: string;
    Summary: string;
    Type: string;
    Priority: string;
    Tags: string;
    Estimate: number;
    Assignee: string;
    RankId: number;
    Color: string;
    ClassName: string;
}

// Интерфейс для колонок доски
export interface KanbanGrid {
    headerText: string;
    keyField: string;
    allowToggle: boolean;
    isExpanded?: boolean; // необязательное поле
}
