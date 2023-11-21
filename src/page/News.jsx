import { NewsMainCon } from "../styles/pages/news";
import NewsTop from "../../src/components/page/News/NewsTop";
import NewsContaner from "../components/page/News/NewsContaner";
const News = () => {
  return (
    <NewsMainCon>
      <NewsTop />
      <NewsContaner />
    </NewsMainCon>
  );
};

export default News;
