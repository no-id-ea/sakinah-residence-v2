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
    href: string;
    children?: React.ReactNode;
    image?: string;
}

export interface QnaProps {
    question: string;
    answer: string;
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

export interface LocationDetailProps {
    title: string;
    address: string;
    gmaps: string;
    reverse: boolean;
}

export interface DescriptionProps {
    title: string;
    description: string;
}

export interface SpecificationProps {
    name: string;
}