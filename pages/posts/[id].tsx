import Head from "next/head";
import useStyles from "../../components/layout.styles";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";

interface IPostProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

export const Post: React.FC<IPostProps> = ({ postData }) => {
  const classes = useStyles();
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={classes.headingXl}>{postData.title}</h1>
      <div className={classes.lightText}>
        <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params = { id: "" },
}) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
