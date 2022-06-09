import { ActivityTypeID } from "./enums";
import { ValuesFromActivityType } from "./types";

export const getValueFromActivityType = (
  activityTypeID: ActivityTypeID,
  values: ValuesFromActivityType
) => {
  const navigate: {
    [key in ActivityTypeID]: any;
  } = {
    [ActivityTypeID.ACTIVITY]: values.activity,
    [ActivityTypeID.CONTEST]: values.contest,
    [ActivityTypeID.CLUB]: values.club,
    [ActivityTypeID.INTERN]: values.intern,
    [ActivityTypeID.RECRUIT]: values.recruit,
  };

  return navigate[activityTypeID];
};
