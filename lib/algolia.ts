const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

dotenv.config({ path: ".env.local" });

async function getCaseStudies() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/gqxbq3iozos4/environments/master/entries?access_token=kOp-SOcq8HLpCQSL81WG1T3FKh1SN7x3MSlM7N_We-k&content_type=caseStudy
    `,
    { cache: "no-cache" }
  );

  const data = await response.json();

  return data;
}

async function getTrainingSession() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/gqxbq3iozos4/environments/master/entries?access_token=kOp-SOcq8HLpCQSL81WG1T3FKh1SN7x3MSlM7N_We-k&content_type=trainingSession
      `,
    { cache: "no-cache" }
  );

  const data = await response.json();

  return data;
}

async function getSalesInformational() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/gqxbq3iozos4/environments/master/entries?access_token=kOp-SOcq8HLpCQSL81WG1T3FKh1SN7x3MSlM7N_We-k&content_type=salesInformational
        `,
    { cache: "no-cache" }
  );

  const data = await response.json();

  return data;
}

async function getKnowledgeArticles() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/gqxbq3iozos4/environments/master/entries?access_token=kOp-SOcq8HLpCQSL81WG1T3FKh1SN7x3MSlM7N_We-k&content_type=knowledgeBaseArticle
        `,
    { cache: "no-cache" }
  );

  const data = await response.json();

  console.log("KNOWLEDGE ARTICLES =", data.items)

  return data;
}

// @ts-expect-error
function transformedCaseStudyData(data) {
  // @ts-expect-error
  const transformed = data.map((item) => {
    return {
      objectID: item.sys.id,
      title: item.fields.accountName,
      excerpt: item.fields.challenges,
      slug: item.fields.slug,
    };
  });

  return transformed;
}

// @ts-expect-error
function transformedKnowledgeArticleData(data) {
  // @ts-expect-error
  const transformed = data.map((item) => {
    return {
      objectID: item.sys.id,
      title: item.fields.title,
      category: item.fields.category.fields.categoryTitle,
      slug: item.fields.slug,
    };
  });

  console.log("transformed articles =", transformed)
  return transformed;
}

// @ts-expect-error
function transformedTrainingSessionData(data) {
  // @ts-expect-error
  const transformed = data.map((item) => {
    return {
      objectID: item.sys.id,
      title: item.fields.topic,
      excerpt: item.fields.previewSnippet,
      slug: item.fields.slug,
    };
  });

  return transformed;
}

// @ts-expect-error
function transformedSalesInfo(data) {
  // @ts-expect-error
  const transformed = data.map((item) => {
    return {
      objectID: item.sys.id,
      title: item.fields.documentTitle,
      slug: item.fields.link,
      document: item.fields.pdfdocument,
    };
  });

  
  return transformed;
}

(async function () {
  // initialize environment variables
  dotenv.config({ path: ".env.local" });

  try {
    const caseStudies = await getCaseStudies();
    const trainingSessions = await getTrainingSession();
    const salesInformation = await getSalesInformational();
    const knowledgeArticleInformation = await getKnowledgeArticles();
    console.log("articles =", knowledgeArticleInformation.items.map((item: any) => item.fields.category.fields.categoryTitle));

    const transformedSalesInformationals = transformedSalesInfo(
      salesInformation.items
    );
    const transformedTrainingSessions = transformedTrainingSessionData(
      trainingSessions.items
    );
    const transformedCaseStudy = transformedCaseStudyData(caseStudies.items);

    const transformedKnowledgeArticles = transformedKnowledgeArticleData(
      knowledgeArticleInformation.items
    );
    //console.log("Transformed case studies =", transformedCaseStudy);

    // Algolia
    const client = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_ADMIN_KEY
    );

    // initialize the index with your index name
    const index = client.initIndex("contentful_tam");

    const algoliaCaseStudy = await index.saveObjects(transformedCaseStudy);
    const algoliaTrainingSession = await index.saveObjects(
      transformedTrainingSessions
    );
    const algoliaSalesInformation = await index.saveObjects(
      transformedSalesInformationals
    );
    const algoliaKnowledgeInfo = await index.saveObjects(
      transformedKnowledgeArticles
    );

    console.log(
      `🎉 Sucessfully added ${
        algoliaCaseStudy.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaCaseStudy.objectIDs.join(
        "\n"
      )}`
    );
    console.log(
      `🎉 Sucessfully added ${
        algoliaTrainingSession.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaTrainingSession.objectIDs.join(
        "\n"
      )}`
    );
    console.log(
      `🎉 Sucessfully added ${
        algoliaSalesInformation.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaSalesInformation.objectIDs.join(
        "\n"
      )}`
    );
    console.log(
      `🎉 Sucessfully added ${
        algoliaKnowledgeInfo.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaKnowledgeInfo.objectIDs.join(
        "\n"
      )}`
    );
  } catch (error) {
    console.log(
      // @ts-expect-error
      `Something went wrong with Algolia and Contentful 🚨: ${error.message}`
    );
  }
})();
