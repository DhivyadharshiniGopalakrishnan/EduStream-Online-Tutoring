
export interface Resource {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  calls: string;
  features: string[];
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
