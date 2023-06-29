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
    image: string;
}

export interface QnaProps {
    question: string;
    answer: string;
}