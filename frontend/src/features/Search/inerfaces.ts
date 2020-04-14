export interface Step1Entity {
  requestType: "instructor" | "mentor" | "sme";
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  alternateMobile: string;
  spokenLanguage?: string[] | null;
  country: string;
  city: string;
  timezone: string;
  address: string;
  postalCode: string;
  state: string;
  experience: number;
}

export interface CountryEntity {
  id: string;
  name: string;
}

export interface SpokenLanguageEntity {
  id: string;
  name: string;
}

export interface TimezoneEntity {
  id: string;
  name: string;
  offset?: string;
}

export interface OnboardingEntity {
  id?: number;
  step1?: Step1Entity;
}

export interface OnboardingState {
  countries: CountryEntity[];
  timezones: TimezoneEntity[];
  spokenLanguages: SpokenLanguageEntity[];
  onboarding: OnboardingEntity;
  loaded: boolean;
  // error: OnboardingError;
  currentStep: number;
  numberOfSteps: number;
}
