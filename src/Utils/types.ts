export type categoriesType = {
  id: string;
  name: string;
};

export type regionDistrictsType = {
  id: string;
  name: string;
  region: region;
};

export type region = {
  id: string;
  name: string;
};

export type thumbnailImage = {
  id: string;
  url: string;
};

export type ValuesFromActivityType = {
  activity: any;
  contest: any;
  club: any;
  intern?: any;
  recruit: any;
};

export type PostType = {
  id: string;
  title: string;
  commentCount: number;
  url: string;
};

export type categorieType = {
  id: string;
  name: string;
};

export type interestType = {
  id: string;
  name: string;
};

export type commentVariablesType = {
  filterBy: filterByType;
  pagination: pagination;
};

export type filterByType = {
  pageID: string;
  pageType: number;
};

export type pagination = {
  page: number;
  pageSize: number;
};

export type commentType = {
  id: string;
  name: string;
  createdAt: Date;
  content: string;
};
