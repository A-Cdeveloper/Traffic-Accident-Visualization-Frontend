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


export type AccidentFilterType = {
  startDate: string | null;
  endDate: string | null;
  accidentType: string | null;
  categories: string[] | null;
};

