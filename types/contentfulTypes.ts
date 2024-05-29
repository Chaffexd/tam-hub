export type Sys = {
  space: {};
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {};
  revision: number;
  contentType: {};
  locale: string;
};

export type TeamMemberProps = {
  name: string;
  title: string;
  location: string;
  authorImage: {
    fields: {
      image: {
        fields: {
          file: {
            url: string;
          };
          description: string;
        };
      };
    };
  };
};

export type TeamMembersProps = {
  teamMemberData: TeamMemberProps;
};

export type PageProps = {
  title: string;
  slug: string;
  description: {
    data: {};
    content: {}[];
  };
  featuredImage: {
    metadata: {};
    sys: Sys;
    fields: {
      title: string;
      altText: string;
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
  tiles: {
    fields: {
      featureCards: string;
      cards: {
        sys: Sys;
        fields: {
          title: string;
          slug: string;
          description: string;
        };
      }[];
    };
  };
  accounts: {
    sys: Sys;
    fields: {
      title: string;
      slug: string;
      image: {
        fields: {
          image: {
            fields: {
              file: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
};

export type HomePageProps = {
  pageInfo: PageProps;
};
