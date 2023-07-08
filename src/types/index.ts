export interface BannerProps {
    owner: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

export interface InfoSideProps {
    title: string;
    description: string;
    image: string;
    reverse: boolean;
}

export interface ProductCardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    image?: string;
}

export interface QnaProps {
    question: string;
    answer: string;
}

export interface NavbarProps {
    activeNav: string;
}

export interface ChildrenProps {
    children: React.ReactNode;
}

export interface YellowButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface CustomBannerProps {
    title: string;
}

export interface FacilitiesCardProps {
    title: string;
    image: string;
}