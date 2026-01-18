export type Accident = {
  id: number;
  accidentId: number;
  pdepartment: string;
  pstation: string;
  dateTime: string;
  longitude: number;
  latitude: number;
  accidentType: string;
  category: string;
  description: string;
};

export type AccidentsSuccessResponse = {
  pstation: string;
  startDate: string | null;
  endDate: string | null;
  accidentType: string | null;
  categories: string[] | null;
  total: number;
  data: Accident[];
};

export type AccidentsErrorResponse = {
  error: string;
  details?: Array<{
    code: string;
    path: string[];
    message: string;
  }>;
};

export type AccidentsResponse = AccidentsSuccessResponse | AccidentsErrorResponse;


// Parametri koje šaljemo na server za filtriranje
export type AccidentFilterParams = {
  startDate: string | null;
  endDate: string | null;
  accidentType: string | null;
  categories: string[] | null;
};

// Jedna opcija u filteru (value + label)
export type FilterOption = {
  value: string;
  label: string;
};

// Tipovi nesreća koje dobijamo sa servera
export type AccidentTypes = FilterOption[];

// Kategorije koje dobijamo sa servera
export type AccidentCategories = FilterOption[];

// Ceo response sa metadata endpoint-a
export type MetadataResponse = {
  accidentTypes: AccidentTypes;
  categories: AccidentCategories;
};
