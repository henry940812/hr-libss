export interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    backgroundColor?: string;
    onClick?: () => void;
}
