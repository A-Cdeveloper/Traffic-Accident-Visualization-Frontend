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


// Parameters sent to server for filtering
export type AccidentFilterParams = {
  startDate: string | null;
  endDate: string | null;
  accidentType: string | null;
  categories: string[] | null;
};

// Single filter option (value + label)
export type FilterOption = {
  value: string;
  label: string;
};

// Accident types received from server
export type AccidentTypes = FilterOption[];

// Categories received from server
export type AccidentCategories = FilterOption[];

// Complete response from metadata endpoint
// src/types/accedents.ts
export type MetadataResponse = {
  accidentTypes: AccidentTypes;
  categories: AccidentCategories;
  lastUpdated?: string; 
};
