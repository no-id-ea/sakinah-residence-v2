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
    image: string;
    children?: React.ReactNode;
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

export interface DownloadProps {
    name: string;
    url: string;
}

export interface SitePlanProps {
    siteplan: string;
}

export interface ProductLocationProps {
    location: string;
}

export interface SpecificationProps {
    name: string;
    brochure: DownloadProps;
}

export interface PromoProps {
    date: string;
    slug: string;
    acf: {
        publisher: string;
        image: {
            url: string;
            name: string;
        },
        caption: string;
        information: string;
    }
}