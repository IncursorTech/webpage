export type SingleNavItem = { title: string; href: string; outlined?: boolean; dropdown?: boolean; authorized?: boolean };

export type NavItems = SingleNavItem[];

export type SingleBasicSectionItem = { imageURL: string; title: string; text: string; reversed?: boolean };

export type BasicSectionItems = SingleBasicSectionItem[];

export type SingleArticle = {
  slug: string;
  content: string;
  meta: {
    title: string;
    description: string;
    date: string;
    tags: string;
    imageUrl: string;
  };
};

export type NonNullableChildren<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

export type NonNullableChildrenDeep<T> = {
  [P in keyof T]-?: NonNullableChildrenDeep<NonNullable<T[P]>>;
};

interface TabMenuItem {
  title: string;
  description: string;
}

export interface DoctorProfiles {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  background?: boolean;
  tabMenuItems: Array<TabMenuItem>;
}
export interface HospitalProfiles {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  background?: boolean;
  tabMenuItems: Array<TabMenuItem>;
}

export type SearchSideProps = {
  header: string;
  title: string;
  description?: string;
};
export type DescriptionSideProps = {
  image: string;
  title: string;
  description?: string;
};
export type Country = {
  id: string;
  name: string;
  code: string;
  Cities: City[];
};

type SurgeyPackage = {
  name: string;
  price: number;
}

export type Service = {
  id: string;
  name: string;
  code: string;
  price: number;
  surgeyPackages: Array<SurgeyPackage>;
};

export interface City {
  code: string;
  name: string;
  currency: string;
  isMostPopular: boolean;
  services: Services;
  features: Feature[];
}
export interface Feature {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Services {
  treatment: Treatment;
  transportation: Accommodation;
  accommodation: Accommodation;
  insurance: Accommodation;
  aftercare: Accommodation;
}

export interface Accommodation {
  price: number;
}

export interface Treatment {
  price: number;
}
