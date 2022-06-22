import { gql } from "@apollo/client";

export const ActivityPost_item_Fragment = gql`
  fragment ActivityPost_item on Activity {
    thumbnailImage {
      id
      url
    }
    activityTypeID
    organizationName
    organizationType
    createdAt
    homepageURL
    regionDistricts {
      id
      name
      region {
        id
        name
      }
    }
    categories {
      id
      name
    }
    jobTypes
    recruitCloseAt
  }
`;
